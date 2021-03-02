import { DemoSharedBase } from '../utils';
import { Msal } from '@medirect/msal';
import { Http, isAndroid, Page } from '@nativescript/core';
import { AuthenticationResult } from '@medirect/msal/common';
import { atob } from './utils';

// PASS in config for iOS , android read Res folder. These are all from the Azure portal
let MSAL = new Msal({
	useConfig: isAndroid,
	multiple: true,
	clientId: '<YOUR CLIENT ID>',
	redirectUri: 'msauth.<YOUR_BUNDLE_ID>://auth',
	authority: '<YOUR AUTHORITY URL>',
});

export class DemoSharedMsal extends DemoSharedBase {
	private session: AuthenticationResult;
	private page: Page;
	constructor(page) {
		super();
		this.page = page;
	}
	login() {
		MSAL.init().then(() => {
			MSAL.acquireToken({
				scopes: ['public_profile', 'email'],
				onSuccess: (r) => {
					this.session = r;
					let token = r.idToken;
					token = token.split('.')[1];

					let data = JSON.parse(atob(token));
					// GET data from the graph API
					// Http.request({
					// 	url: 'https://graph.microsoft.com/v1.0/me/photos/48x48/$value',
					// 	method: "GET",
					// 	headers:{
					// 		'Authorization': "Bearer " + r.accessToken
					// 	}
					// }).then(res => {
					// 	console.log(res.content)
					// }).catch(e => {
					// 	console.log(e)
					// })
					this.set('hello', `Hello ${data.name}`);
				},
				onError: function (e) {
					console.log('error', e);
				},
				onCancel: function () {
					console.log('cancel');
				},
			});
		});
	}
	logout() {
		MSAL.getAccount(this.session.account.id).then((account) => {
			MSAL.signOut(account);
			this.set('hello', undefined);
		});
	}
}
