import { MsalCommon, AcquireTokenSilentAsyncOptions, AcquireOptions, InitOptions } from './common';
import { Utils, Application } from '@nativescript/core';

const MS = com.microsoft.identity.client;
export class Msal extends MsalCommon {
	private MsalMultiple: com.microsoft.identity.client.IMultipleAccountPublicClientApplication;
	private MsalSingle: com.microsoft.identity.client.ISingleAccountPublicClientApplication;
	private settings: InitOptions;

	constructor(settings: InitOptions) {
		super();
		this.settings = settings;
	}

	public init() {
		return new Promise((resolve, reject) => {
			let res;
			res = Utils.ad.resources.getId(':raw/auth_config');
			if (this.settings.multiple) {
				MS.PublicClientApplication.createMultipleAccountPublicClientApplication(
					Application.android.context,
					res,
					new MS.IPublicClientApplication.IMultipleAccountApplicationCreatedListener({
						onCreated: (application: com.microsoft.identity.client.IMultipleAccountPublicClientApplication) => {
							this.MsalMultiple = application;
							console.log('setting MULTIPLE application');
							resolve(this);
						},
						onError: (exception: com.microsoft.identity.client.exception.MsalException) => {
							//Log Exception Here
							console.log(exception);
							reject(this);
						},
					})
				);
			} else {
				MS.PublicClientApplication.createSingleAccountPublicClientApplication(
					Application.android.context,
					res,
					new MS.IPublicClientApplication.ISingleAccountApplicationCreatedListener({
						onCreated: (application: com.microsoft.identity.client.ISingleAccountPublicClientApplication) => {
							this.MsalSingle = application;
							console.log('setting single application');
							resolve(this);
						},
						onError: (exception: com.microsoft.identity.client.exception.MsalException) => {
							//Log Exception Here
							console.log(exception);
							reject(this);
						},
					})
				);
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
		var callbacks = {
			onSuccess: function (r: com.microsoft.identity.client.IAuthenticationResult) {
				var result = {
					scope: r.getScope() as Array<string>,
					tenantId: r.getTenantId(),
					accessToken: r.getAccessToken(),
					account: {
						id: r.getAccount().getId(),
						username: r.getAccount().getUsername(),
					},
					idToken: r.getAccount().getIdToken(),
					expiresOn: new Date(r.getExpiresOn().toGMTString()),
				};
				options.onSuccess(result);
			},
			onError: function (e) {
				var error = {
					message: e.getMessage(),
					errorCode: e.getErrorCode(),
				};
				options.onError(error);
			},
			onCancel: function () {
				options.onCancel();
			},
		};
		if (this.settings.multiple) {
			this.MsalMultiple.acquireToken(Application.android.foregroundActivity, options.scopes, new com.microsoft.identity.client.AuthenticationCallback(callbacks));
		} else {
			this.MsalSingle.acquireToken(Application.android.foregroundActivity, options.scopes, new com.microsoft.identity.client.AuthenticationCallback(callbacks));
		}
	}

	public acquireTokenSilentAsync(opts: AcquireTokenSilentAsyncOptions) {
		var options = {
			scopes: opts.scopes,
			account: opts.account,
			onSuccess: opts.onSuccess,
			onError: opts.onError,
			onCancel: opts.onCancel,
		};
		var callbacks = {
			onSuccess: function (r: com.microsoft.identity.client.IAuthenticationResult) {
				var result = {
					scope: r.getScope() as Array<string>,
					tenantId: r.getTenantId(),
					accessToken: r.getAccessToken(),
					account: {
						id: r.getAccount().getId(),
						username: r.getAccount().getUsername(),
					},
					idToken: r.getAccount().getIdToken(),
					expiresOn: new Date(r.getExpiresOn().toGMTString()),
				};
				options.onSuccess(result);
			},
			onError: function (e) {
				var error = {
					message: e.getMessage(),
					errorCode: e.getErrorCode(),
				};
				options.onError(error);
			},
			onCancel: function () {
				options.onCancel();
			},
		};
		this.getAccount(options.account.accountIdentifier).then((account) => {
			if (this.settings.multiple) {
				let authority: string = this.MsalMultiple.getConfiguration().getDefaultAuthority().getAuthorityURL().toString();
				this.MsalMultiple.acquireTokenSilentAsync(options.scopes, account, authority, callbacks);
			} else {
				let authority: string = this.MsalMultiple.getConfiguration().getDefaultAuthority().getAuthorityURL().toString();
				this.MsalSingle.acquireTokenSilentAsync(options.scopes, authority, callbacks);
			}
		});
	}

	public getAccount(accountIdentifier): Promise<com.microsoft.identity.client.IAccount> {
		return new Promise((resolve, reject) => {
			if (this.settings.multiple) {
				resolve(this.MsalMultiple.getAccount(accountIdentifier));
			} else {
				let account = this.MsalSingle.getCurrentAccount();
				resolve(account.getCurrentAccount());
			}
		});
	}

	/**
	 *  signOut
	 */
	public signOut(account: com.microsoft.identity.client.IAccount) {
		if (this.settings.multiple) {
			this.MsalMultiple.removeAccount(account);
		} else {
			this.MsalSingle.signOut();
		}
	}
}
