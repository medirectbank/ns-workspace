import { Observable } from '@nativescript/core';

export class MsalCommon extends Observable {}

export interface AuthenticationResult {
	scope: Array<string>;
	tenantId: string;
	accessToken: string;
	account: IAccount;
	idToken: string;
	expiresOn: Date;
}
export interface IAccount {
	id: string;
	username: string;
	object?: any;
}
export interface MSALException {
	message: string;
	errorCode: string | number;
}
export interface InitOptions {
	useConfig?: boolean;
	clientId?: string;
	authority?: string;
	redirectUri?: string;
	multiple?: boolean;
}
export interface AcquireOptions {
	scopes: Array<any>;
	onSuccess: (result: AuthenticationResult) => void;
	onError: (error: MSALException) => void;
	onCancel?: () => void;
}
export interface AcquireTokenSilentAsyncOptions {
	scopes: Array<any>;
	account: any;
	onSuccess: (result: AuthenticationResult) => void;
	onError: (error: MSALException) => void;
	onCancel?: () => void;
}
export declare enum UiBehavior {
	SELECT_ACCOUNT = 0,
	FORCE_LOGIN = 1,
	CONSENT = 2,
}
