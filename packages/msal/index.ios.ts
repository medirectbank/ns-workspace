import { MsalCommon, AcquireOptions, InitOptions, IAccount } from './common';
import { getAppDelegate } from './getappdelegate';
import { Application } from '@nativescript/core';

const appDelegate = getAppDelegate();

function enableMultipleOverridesFor(classRef, methodName, nextImplementation) {
	const currentImplementation = classRef.prototype[methodName];
	classRef.prototype[methodName] = function () {
		const result = currentImplementation && currentImplementation.apply(currentImplementation, Array.from(arguments));
		return nextImplementation.apply(nextImplementation, Array.from(arguments).concat([result]));
	};
}

enableMultipleOverridesFor(appDelegate, 'applicationOpenURLOptions', function (application: UIApplication, url: NSURL, options: NSDictionary<any, UISceneOpenURLOptions>): boolean {
	console.log('>>>>>>>>> IN Delegate');
	return MSALPublicClientApplication.handleMSALResponseSourceApplication(url, options[UIApplicationOpenURLOptionsSourceApplicationKey]);
});

export class Msal extends MsalCommon {
	private MSALApp: MSALPublicClientApplication;
	private webViewParamaters: MSALWebviewParameters;
	private settings: InitOptions;

	constructor(settings: InitOptions) {
		super();
		this.settings = settings;

		MSALGlobalConfig.loggerConfig.setLogCallback(function (level, message, containsPII) {
			console.log(level, '>>', message, containsPII);
		});
	}

	init() {
		return new Promise((resolve, reject) => {
			console.log('---- INIT ---');
			let parentViewController = Application.ios.rootController;
			this.webViewParamaters = MSALWebviewParameters.alloc().initWithAuthPresentationViewController(parentViewController);
			var authority: MSALAuthority = null;

			if (this.settings.authority !== undefined) {
				if (this.settings.authority !== null) {
					console.log('AUTHORITY', this.settings.authority);
					var url = NSURL.alloc().initWithString(this.settings.authority);
					authority = MSALAuthority.authorityWithURLError(url);
				}
			}
			try {
				if (this.settings.redirectUri && this.settings.clientId && this.settings.authority !== undefined) {
					console.log('---Client and authority amd redirect uri');
					let config: MSALPublicClientApplicationConfig = MSALPublicClientApplicationConfig.alloc().initWithClientIdRedirectUriAuthority(this.settings.clientId, this.settings.redirectUri, authority);

					this.MSALApp = MSALPublicClientApplication.alloc().initWithClientIdAuthorityRedirectUriError(this.settings.clientId, authority, this.settings.redirectUri);
				} else if (this.settings.clientId && this.settings.authority !== undefined) {
					console.log('---Client and authority');
					this.MSALApp = MSALPublicClientApplication.alloc().initWithClientIdAuthorityError(this.settings.clientId, authority);
				} else if (this.settings.clientId) {
					console.log('---Client id');
					this.MSALApp = MSALPublicClientApplication.alloc().initWithClientIdError(this.settings.clientId);
				}
				resolve(this);
			} catch (e) {
				console.log(e);
				reject(this);
			}
		});
	}
	/**
	 * acquireToken
	 * opts: AquireOptions
	 */
	public acquireToken(opts: AcquireOptions) {
		var options = {
			scopes: opts.scopes,
			onSuccess: opts.onSuccess,
			onError: opts.onError,
			onCancel: opts.onCancel,
		};
		var callbacks = function (r: MSALResult, e) {
			if (!e) {
				console.log('-----RESULT ----');

				let scopes = r.scopes;
				let arr = [];
				for (var x in scopes) {
					arr.push(scopes[x]);
				}

				var result = {
					scope: arr,
					tenantId: r.tenantId,
					accessToken: r.accessToken,
					account: {
						id: r.account.homeAccountId.identifier,
						username: r.account.username,
					},
					idToken: r.idToken,
					expiresOn: new Date(r.expiresOn),
				};
				options.onSuccess(result);
			} else {
				var error = {
					message: e.domain,
					errorCode: e.code,
				};
				options.onError(error);
			}
		};

		let interactiveParameters = MSALInteractiveTokenParameters.alloc().initWithScopesWebviewParameters(options.scopes, this.webViewParamaters);
		this.MSALApp.acquireTokenWithParametersCompletionBlock(interactiveParameters, callbacks);
	}

	public getAccount(accountIdentifier) {
		return new Promise((resolve, reject) => {
			let params: MSALParameters = new MSALParameters();
			params.completionBlockQueue = dispatch_get_current_queue();
			console.log('getting account');
			this.MSALApp.getCurrentAccountWithParametersCompletionBlock(params, function (current, prev, error) {
				if (error) {
					reject(error);
				} else {
					resolve(current);
				}
			});
		});
	}
	public signOut(account) {
		if (this.settings.multiple) {
			this.MSALApp.removeAccountError(account);
		} else {
			let interactiveParameters = MSALSignoutParameters.alloc().initWithWebviewParameters(this.webViewParamaters);
			interactiveParameters.signoutFromBrowser = false;
			this.MSALApp.signoutWithAccountSignoutParametersCompletionBlock(account, interactiveParameters, function (r, e) {
				if (!r) {
					return;
				}
			});
		}
	}
}
