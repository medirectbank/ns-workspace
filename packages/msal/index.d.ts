import { MsalCommon, AcquireOptions, InitOptions, IAccount } from './common';

export declare class Msal extends MsalCommon {
	constructor(settings: InitOptions);
	init(): Promise;
	acquireToken(opts: AcquireOptions): void;
	getAccount(accountIdentifier: string): Promise;
	signOut(account: IAccount);
}
