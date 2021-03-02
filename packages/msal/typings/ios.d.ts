declare class MSALAADAuthority extends MSALAuthority {
	static alloc(): MSALAADAuthority; // inherited from NSObject

	static new(): MSALAADAuthority; // inherited from NSObject

	constructor(o: { cloudInstance: MSALAzureCloudInstance; audienceType: MSALAudienceType; rawTenant: string });

	constructor(o: { environment: string; audienceType: MSALAudienceType; rawTenant: string });

	constructor(o: { URL: NSURL });

	constructor(o: { URL: NSURL; rawTenant: string });

	initWithCloudInstanceAudienceTypeRawTenantError(cloudInstance: MSALAzureCloudInstance, audienceType: MSALAudienceType, rawTenant: string): this;

	initWithEnvironmentAudienceTypeRawTenantError(environment: string, audienceType: MSALAudienceType, rawTenant: string): this;

	initWithURLError(url: NSURL): this;

	initWithURLRawTenantError(url: NSURL, rawTenant: string): this;
}

declare class MSALADFSAuthority extends MSALAuthority {
	static alloc(): MSALADFSAuthority; // inherited from NSObject

	static new(): MSALADFSAuthority; // inherited from NSObject

	constructor(o: { URL: NSURL });

	initWithURLError(url: NSURL): this;
}

declare class MSALAccount extends NSObject implements MSALAccountProtocol, NSCopying {
	static alloc(): MSALAccount; // inherited from NSObject

	static new(): MSALAccount; // inherited from NSObject

	readonly homeAccountId: MSALAccountId;

	readonly tenantProfiles: NSArray<MSALTenantProfile>;

	readonly accountClaims: NSDictionary<string, any>; // inherited from MSALAccountProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly environment: string; // inherited from MSALAccountProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly identifier: string; // inherited from MSALAccountProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly username: string; // inherited from MSALAccountProtocol

	readonly; // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MSALAccountEnumerationParameters extends MSALParameters {
	static alloc(): MSALAccountEnumerationParameters; // inherited from NSObject

	static new(): MSALAccountEnumerationParameters; // inherited from NSObject

	readonly identifier: string;

	returnOnlySignedInAccounts: boolean;

	readonly tenantProfileIdentifier: string;

	readonly username: string;

	constructor(o: { identifier: string });

	constructor(o: { identifier: string; username: string });

	constructor(o: { tenantProfileIdentifier: string });

	initWithIdentifier(accountIdentifier: string): this;

	initWithIdentifierUsername(accountIdentifier: string, username: string): this;

	initWithTenantProfileIdentifier(tenantProfileIdentifier: string): this;
}

declare class MSALAccountId extends NSObject implements NSCopying {
	static alloc(): MSALAccountId; // inherited from NSObject

	static new(): MSALAccountId; // inherited from NSObject

	readonly identifier: string;

	readonly objectId: string;

	readonly tenantId: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

interface MSALAccountProtocol extends NSObjectProtocol {
	accountClaims: NSDictionary<string, any>;

	environment: string;

	identifier: string;

	username: string;
}
declare var MSALAccountProtocol: {
	prototype: MSALAccountProtocol;
};

declare const enum MSALAudienceType {
	AzureADAndPersonalMicrosoftAccountAudience = 0,

	AzureADMultipleOrgsAudience = 1,

	AzureADMyOrgOnlyAudience = 2,

	PersonalMicrosoftAccountAudience = 3,
}

declare const enum MSALAuthScheme {
	Bearer = 0,

	Pop = 1,
}

declare class MSALAuthenticationSchemeBearer extends NSObject implements MSALAuthenticationSchemeProtocol {
	static alloc(): MSALAuthenticationSchemeBearer; // inherited from NSObject

	static new(): MSALAuthenticationSchemeBearer; // inherited from NSObject

	readonly authenticationScheme: string; // inherited from MSALAuthenticationSchemeProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly scheme: MSALAuthScheme; // inherited from MSALAuthenticationSchemeProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getAuthorizationHeader(accessToken: string): string;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MSALAuthenticationSchemePop extends NSObject implements MSALAuthenticationSchemeProtocol {
	static alloc(): MSALAuthenticationSchemePop; // inherited from NSObject

	static new(): MSALAuthenticationSchemePop; // inherited from NSObject

	readonly authenticationScheme: string; // inherited from MSALAuthenticationSchemeProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly scheme: MSALAuthScheme; // inherited from MSALAuthenticationSchemeProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { httpMethod: MSALHttpMethod; requestUrl: NSURL; nonce: string; additionalParameters: NSDictionary<any, any> });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getAuthorizationHeader(accessToken: string): string;

	initWithHttpMethodRequestUrlNonceAdditionalParameters(httpMethod: MSALHttpMethod, requestUrl: NSURL, nonce: string, additionalParameters: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface MSALAuthenticationSchemeProtocol extends NSObjectProtocol {
	authenticationScheme: string;

	scheme: MSALAuthScheme;

	getAuthorizationHeader(accessToken: string): string;
}
declare var MSALAuthenticationSchemeProtocol: {
	prototype: MSALAuthenticationSchemeProtocol;
};

declare class MSALAuthority extends NSObject implements NSCopying {
	static alloc(): MSALAuthority; // inherited from NSObject

	static authorityWithURLError(url: NSURL): MSALAuthority;

	static new(): MSALAuthority; // inherited from NSObject

	readonly url: NSURL;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum MSALAzureCloudInstance {
	PublicCloudInstance = 0,

	ChinaCloudInstance = 1,

	GermanyCloudInstance = 2,

	UsGovernmentCloudInstance = 3,
}

declare class MSALB2CAuthority extends MSALAuthority {
	static alloc(): MSALB2CAuthority; // inherited from NSObject

	static new(): MSALB2CAuthority; // inherited from NSObject

	constructor(o: { URL: NSURL });

	initWithURLError(url: NSURL): this;
}

declare var MSALBrokerVersionKey: string;

declare const enum MSALBrokeredAvailability {
	Auto = 0,

	None = 1,
}

declare class MSALCacheConfig extends NSObject implements NSCopying {
	static alloc(): MSALCacheConfig; // inherited from NSObject

	static defaultKeychainSharingGroup(): string;

	static new(): MSALCacheConfig; // inherited from NSObject

	readonly externalAccountProviders: NSArray<MSALExternalAccountProviding>;

	keychainSharingGroup: string;

	addExternalAccountProvider(externalAccountProvider: MSALExternalAccountProviding): void;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class MSALClaimsRequest extends NSObject implements MSALJsonDeserializable, MSALJsonSerializable {
	static alloc(): MSALClaimsRequest; // inherited from NSObject

	static new(): MSALClaimsRequest; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { jsonString: string }); // inherited from MSALJsonDeserializable

	claimsRequestsForTarget(target: MSALClaimsRequestTarget): NSArray<MSALIndividualClaimRequest>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithJsonStringError(jsonString: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	jsonString(): string;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeClaimRequestWithNameTargetError(name: string, target: MSALClaimsRequestTarget): boolean;

	requestClaimForTargetError(request: MSALIndividualClaimRequest, target: MSALClaimsRequestTarget): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum MSALClaimsRequestTarget {
	IdToken = 0,

	AccessToken = 1,
}

declare var MSALCorrelationIDKey: string;

declare var MSALDeclinedScopesKey: string;

declare class MSALDeviceInformation extends NSObject {
	static alloc(): MSALDeviceInformation; // inherited from NSObject

	static new(): MSALDeviceInformation; // inherited from NSObject

	readonly deviceMode: MSALDeviceMode;

	readonly extraDeviceInformation: NSDictionary<any, any>;

	readonly hasAADSSOExtension: boolean;
}

declare const enum MSALDeviceMode {
	Default = 0,

	Shared = 1,
}

declare var MSALDisplayableUserIdKey: string;

declare const enum MSALError {
	Internal = -50000,

	WorkplaceJoinRequired = -50001,

	InteractionRequired = -50002,

	ServerDeclinedScopes = -50003,

	ServerProtectionPoliciesRequired = -50004,

	UserCanceled = -50005,
}

declare var MSALErrorDescriptionKey: string;

declare var MSALErrorDomain: string;

interface MSALExternalAccountProviding extends NSObjectProtocol {
	accountsWithParametersError(parameters: MSALAccountEnumerationParameters): NSArray<MSALAccountProtocol>;

	removeAccountTenantProfilesError(account: MSALAccountProtocol, tenantProfiles: NSArray<MSALTenantProfile> | MSALTenantProfile[]): boolean;

	updateAccountIdTokenClaimsError(account: MSALAccountProtocol, idTokenClaims: NSDictionary<any, any>): boolean;
}
declare var MSALExternalAccountProviding: {
	prototype: MSALExternalAccountProviding;
};

declare class MSALGlobalConfig extends NSObject {
	static alloc(): MSALGlobalConfig; // inherited from NSObject

	static new(): MSALGlobalConfig; // inherited from NSObject

	static brokerAvailability: MSALBrokeredAvailability;

	static defaultWebviewType: MSALWebviewType;

	static readonly httpConfig: MSALHTTPConfig;

	static readonly loggerConfig: MSALLoggerConfig;

	static readonly telemetryConfig: MSALTelemetryConfig;
}

declare var MSALGrantedScopesKey: string;

declare class MSALHTTPConfig extends NSObject {
	static alloc(): MSALHTTPConfig; // inherited from NSObject

	static new(): MSALHTTPConfig; // inherited from NSObject

	retryCount: number;

	retryInterval: number;

	timeoutIntervalForRequest: number;
}

declare var MSALHTTPHeadersKey: string;

declare var MSALHTTPResponseCodeKey: string;

declare var MSALHomeAccountIdKey: string;

declare const enum MSALHttpMethod {
	GET = 0,

	HEAD = 1,

	POST = 2,

	PUT = 3,

	DELETE = 4,

	CONNECT = 5,

	OPTIONS = 6,

	TRACE = 7,

	PATCH = 8,
}

declare class MSALIndividualClaimRequest extends NSObject {
	static alloc(): MSALIndividualClaimRequest; // inherited from NSObject

	static new(): MSALIndividualClaimRequest; // inherited from NSObject

	additionalInfo: MSALIndividualClaimRequestAdditionalInfo;

	name: string;

	constructor(o: { name: string });

	initWithName(name: string): this;
}

declare class MSALIndividualClaimRequestAdditionalInfo extends NSObject {
	static alloc(): MSALIndividualClaimRequestAdditionalInfo; // inherited from NSObject

	static new(): MSALIndividualClaimRequestAdditionalInfo; // inherited from NSObject

	essential: number;

	value: any;

	values: NSArray<any>;
}

declare class MSALInteractiveTokenParameters extends MSALTokenParameters {
	static alloc(): MSALInteractiveTokenParameters; // inherited from NSObject

	static new(): MSALInteractiveTokenParameters; // inherited from NSObject

	customWebview: WKWebView;

	extraQueryParameters: NSDictionary<string, string>;

	extraScopesToConsent: NSArray<string>;

	loginHint: string;

	parentViewController: UIViewController;

	presentationStyle: UIModalPresentationStyle;

	promptType: MSALPromptType;

	readonly webviewParameters: MSALWebviewParameters;

	webviewType: MSALWebviewType;

	constructor(o: { scopes: NSArray<string> | string[]; webviewParameters: MSALWebviewParameters });

	initWithScopesWebviewParameters(scopes: NSArray<string> | string[], webviewParameters: MSALWebviewParameters): this;
}

declare const enum MSALInternalError {
	ErrorInvalidParameter = -42000,

	ErrorRedirectSchemeNotRegistered = -42001,

	ErrorInvalidRequest = -42002,

	ErrorInvalidClient = -42003,

	ErrorInvalidGrant = -42004,

	ErrorInvalidScope = -42005,

	ErrorUnauthorizedClient = -42006,

	ErrorUnhandledResponse = -42007,

	ErrorUnexpected = -42008,

	ErrorFailedAuthorityValidation = -42010,

	ErrorMismatchedUser = -42101,

	ErrorAmbiguousAccount = -42102,

	ErrorAuthorizationFailed = -42104,

	ErrorAccountRequired = -42106,

	ErrorSessionCanceled = -42401,

	ErrorInteractiveSessionAlreadyRunning = -42402,

	ErrorNoViewController = -42403,

	ErrorAttemptToOpenURLFromExtension = -42404,

	ErrorUINotSupportedInExtension = -42405,

	ErrorInvalidState = -42501,

	ErrorInvalidResponse = -42600,

	ErrorNonHttpsRedirect = -42602,

	ErrorBrokerResponseNotReceived = -42700,

	ErrorBrokerNoResumeStateFound = -42701,

	ErrorBrokerBadResumeStateFound = -42702,

	ErrorBrokerMismatchedResumeState = -42703,

	ErrorBrokerResponseHashMissing = -42704,

	ErrorBrokerCorruptedResponse = -42705,

	ErrorBrokerResponseDecryptionFailed = -42706,

	ErrorBrokerResponseHashMismatch = -42707,

	ErrorBrokerKeyFailedToCreate = -42708,

	ErrorBrokerKeyNotFound = -42709,

	ErrorBrokerUnknown = -42711,

	ErrorBrokerApplicationTokenWriteFailed = -42712,

	ErrorBrokerApplicationTokenReadFailed = -42713,

	BrokerNotAvailable = -42714,
}

declare var MSALInternalErrorCodeKey: string;

declare var MSALInvalidResultKey: string;

interface MSALJsonDeserializable extends NSObjectProtocol {
	initWithJsonStringError?(jsonString: string): MSALJsonDeserializable;
}
declare var MSALJsonDeserializable: {
	prototype: MSALJsonDeserializable;
};

interface MSALJsonSerializable extends NSObjectProtocol {
	jsonString(): string;
}
declare var MSALJsonSerializable: {
	prototype: MSALJsonSerializable;
};

declare const enum MSALLegacySharedAccountMode {
	ReadOnly = 0,

	ReadWrite = 1,
}

declare class MSALLegacySharedAccountsProvider extends NSObject implements MSALExternalAccountProviding {
	static alloc(): MSALLegacySharedAccountsProvider; // inherited from NSObject

	static new(): MSALLegacySharedAccountsProvider; // inherited from NSObject

	sharedAccountMode: MSALLegacySharedAccountMode;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { sharedKeychainAccessGroup: string; serviceIdentifier: string; applicationIdentifier: string });

	accountsWithParametersError(parameters: MSALAccountEnumerationParameters): NSArray<MSALAccountProtocol>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithSharedKeychainAccessGroupServiceIdentifierApplicationIdentifier(sharedGroup: string, serviceIdentifier: string, applicationIdentifier: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAccountTenantProfilesError(account: MSALAccountProtocol, tenantProfiles: NSArray<MSALTenantProfile> | MSALTenantProfile[]): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateAccountIdTokenClaimsError(account: MSALAccountProtocol, idTokenClaims: NSDictionary<any, any>): boolean;
}

declare const enum MSALLogLevel {
	Nothing = 0,

	Error = 1,

	Warning = 2,

	Info = 3,

	Verbose = 4,

	Last = 4,
}

declare class MSALLogger extends NSObject {
	static alloc(): MSALLogger; // inherited from NSObject

	static new(): MSALLogger; // inherited from NSObject

	static sharedLogger(): MSALLogger;

	PiiLoggingEnabled: boolean;

	level: MSALLogLevel;

	setCallback(callback: (p1: MSALLogLevel, p2: string, p3: boolean) => void): void;
}

declare class MSALLoggerConfig extends NSObject {
	static alloc(): MSALLoggerConfig; // inherited from NSObject

	static new(): MSALLoggerConfig; // inherited from NSObject

	logLevel: MSALLogLevel;

	piiEnabled: boolean;

	callback(): (p1: MSALLogLevel, p2: string, p3: boolean) => void;

	setLogCallback(callback: (p1: MSALLogLevel, p2: string, p3: boolean) => void): void;
}

declare var MSALOAuthErrorKey: string;

declare var MSALOAuthSubErrorKey: string;

declare function MSALParameterStringForHttpMethod(httpMethod: MSALHttpMethod): string;

declare class MSALParameters extends NSObject {
	static alloc(): MSALParameters; // inherited from NSObject

	static new(): MSALParameters; // inherited from NSObject

	completionBlockQueue: NSObject;
}

declare const enum MSALPromptType {
	SelectAccount = 0,

	Login = 1,

	Consent = 2,

	PromptIfNecessary = 3,

	Default = 3,
}

declare class MSALPublicClientApplication extends NSObject {
	static alloc(): MSALPublicClientApplication; // inherited from NSObject

	static cancelCurrentWebAuthSession(): boolean;

	static handleMSALResponse(response: NSURL): boolean;

	static handleMSALResponseSourceApplication(response: NSURL, sourceApplication: string): boolean;

	static new(): MSALPublicClientApplication; // inherited from NSObject

	readonly configuration: MSALPublicClientApplicationConfig;

	customWebview: WKWebView;

	readonly isCompatibleAADBrokerAvailable: boolean;

	validateAuthority: boolean;

	webviewType: MSALWebviewType;

	constructor(o: { clientId: string; authority: MSALAuthority });

	constructor(o: { clientId: string; authority: MSALAuthority; redirectUri: string });

	constructor(o: { clientId: string });

	constructor(o: { clientId: string; keychainGroup: string; authority: MSALAuthority; redirectUri: string });

	constructor(o: { configuration: MSALPublicClientApplicationConfig });

	accountForHomeAccountIdError(homeAccountId: string): MSALAccount;

	accountForIdentifierError(identifier: string): MSALAccount;

	accountForUsernameError(username: string): MSALAccount;

	accountsForParametersError(parameters: MSALAccountEnumerationParameters): NSArray<MSALAccount>;

	accountsFromDeviceForParametersCompletionBlock(parameters: MSALAccountEnumerationParameters, completionBlock: (p1: NSArray<MSALAccount>, p2: NSError) => void): void;

	acquireTokenForScopesAccountCompletionBlock(scopes: NSArray<string> | string[], account: MSALAccount, completionBlock: (p1: MSALResult, p2: NSError) => void): void;

	acquireTokenForScopesAccountPromptTypeExtraQueryParametersCompletionBlock(scopes: NSArray<string> | string[], account: MSALAccount, promptType: MSALPromptType, extraQueryParameters: NSDictionary<string, string>, completionBlock: (p1: MSALResult, p2: NSError) => void): void;

	acquireTokenForScopesCompletionBlock(scopes: NSArray<string> | string[], completionBlock: (p1: MSALResult, p2: NSError) => void): void;

	acquireTokenForScopesLoginHintCompletionBlock(scopes: NSArray<string> | string[], loginHint: string, completionBlock: (p1: MSALResult, p2: NSError) => void): void;

	acquireTokenSilentForScopesAccountAuthorityClaimsRequestForceRefreshCorrelationIdCompletionBlock(scopes: NSArray<string> | string[], account: MSALAccount, authority: MSALAuthority, claimsRequest: MSALClaimsRequest, forceRefresh: boolean, correlationId: NSUUID, completionBlock: (p1: MSALResult, p2: NSError) => void): void;

	acquireTokenSilentForScopesAccountAuthorityCompletionBlock(scopes: NSArray<string> | string[], account: MSALAccount, authority: MSALAuthority, completionBlock: (p1: MSALResult, p2: NSError) => void): void;

	acquireTokenSilentForScopesAccountCompletionBlock(scopes: NSArray<string> | string[], account: MSALAccount, completionBlock: (p1: MSALResult, p2: NSError) => void): void;

	acquireTokenSilentWithParametersCompletionBlock(parameters: MSALSilentTokenParameters, completionBlock: (p1: MSALResult, p2: NSError) => void): void;

	acquireTokenWithParametersCompletionBlock(parameters: MSALInteractiveTokenParameters, completionBlock: (p1: MSALResult, p2: NSError) => void): void;

	allAccounts(): NSArray<MSALAccount>;

	allAccountsFilteredByAuthority(completionBlock: (p1: NSArray<MSALAccount>, p2: NSError) => void): void;

	getCurrentAccountWithParametersCompletionBlock(parameters: MSALParameters, completionBlock: (p1: MSALAccount, p2: MSALAccount, p3: NSError) => void): void;

	getDeviceInformationWithParametersCompletionBlock(parameters: MSALParameters, completionBlock: (p1: MSALDeviceInformation, p2: NSError) => void): void;

	initWithClientIdAuthorityError(clientId: string, authority: MSALAuthority): this;

	initWithClientIdAuthorityRedirectUriError(clientId: string, authority: MSALAuthority, redirectUri: string): this;

	initWithClientIdError(clientId: string): this;

	initWithClientIdKeychainGroupAuthorityRedirectUriError(clientId: string, keychainGroup: string, authority: MSALAuthority, redirectUri: string): this;

	initWithConfigurationError(config: MSALPublicClientApplicationConfig): this;

	removeAccountError(account: MSALAccount): boolean;

	signoutWithAccountSignoutParametersCompletionBlock(account: MSALAccount, signoutParameters: MSALSignoutParameters, signoutCompletionBlock: (p1: boolean, p2: NSError) => void): void;
}

declare class MSALPublicClientApplicationConfig extends NSObject implements NSCopying {
	static alloc(): MSALPublicClientApplicationConfig; // inherited from NSObject

	static new(): MSALPublicClientApplicationConfig; // inherited from NSObject

	authority: MSALAuthority;

	bypassRedirectURIValidation: boolean;

	readonly cacheConfig: MSALCacheConfig;

	clientApplicationCapabilities: NSArray<string>;

	clientId: string;

	extendedLifetimeEnabled: boolean;

	knownAuthorities: NSArray<MSALAuthority>;

	multipleCloudsSupported: boolean;

	redirectUri: string;

	sliceConfig: MSALSliceConfig;

	tokenExpirationBuffer: number;

	constructor(o: { clientId: string });

	constructor(o: { clientId: string; redirectUri: string; authority: MSALAuthority });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithClientId(clientId: string): this;

	initWithClientIdRedirectUriAuthority(clientId: string, redirectUri: string, authority: MSALAuthority): this;
}

declare class MSALRedirectUri extends NSObject implements NSCopying {
	static alloc(): MSALRedirectUri; // inherited from NSObject

	static new(): MSALRedirectUri; // inherited from NSObject

	readonly brokerCapable: boolean;

	readonly url: NSURL;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class MSALResult extends NSObject {
	static alloc(): MSALResult; // inherited from NSObject

	static new(): MSALResult; // inherited from NSObject

	readonly accessToken: string;

	readonly account: MSALAccount;

	readonly authenticationScheme: string;

	readonly authority: MSALAuthority;

	readonly authorizationHeader: string;

	readonly correlationId: NSUUID;

	readonly expiresOn: Date;

	readonly extendedLifeTimeToken: boolean;

	readonly idToken: string;

	readonly scopes: NSArray<string>;

	readonly tenantId: string;

	readonly tenantProfile: MSALTenantProfile;

	readonly uniqueId: string;
}

declare class MSALSerializedADALCacheProvider extends NSObject implements NSCopying {
	static alloc(): MSALSerializedADALCacheProvider; // inherited from NSObject

	static new(): MSALSerializedADALCacheProvider; // inherited from NSObject

	readonly delegate: MSALSerializedADALCacheProviderDelegate;

	constructor(o: { delegate: MSALSerializedADALCacheProviderDelegate });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	deserializeError(serializedData: NSData): boolean;

	initWithDelegateError(delegate: MSALSerializedADALCacheProviderDelegate): this;

	serializeDataWithError(): NSData;
}

interface MSALSerializedADALCacheProviderDelegate extends NSObjectProtocol {
	didAccessCache(cache: MSALSerializedADALCacheProvider): void;

	didWriteCache(cache: MSALSerializedADALCacheProvider): void;

	willAccessCache(cache: MSALSerializedADALCacheProvider): void;

	willWriteCache(cache: MSALSerializedADALCacheProvider): void;
}
declare var MSALSerializedADALCacheProviderDelegate: {
	prototype: MSALSerializedADALCacheProviderDelegate;
};

declare class MSALSignoutParameters extends MSALParameters {
	static alloc(): MSALSignoutParameters; // inherited from NSObject

	static new(): MSALSignoutParameters; // inherited from NSObject

	signoutFromBrowser: boolean;

	readonly webviewParameters: MSALWebviewParameters;

	constructor(o: { webviewParameters: MSALWebviewParameters });

	initWithWebviewParameters(webviewParameters: MSALWebviewParameters): this;
}

declare class MSALSilentTokenParameters extends MSALTokenParameters {
	static alloc(): MSALSilentTokenParameters; // inherited from NSObject

	static new(): MSALSilentTokenParameters; // inherited from NSObject

	forceRefresh: boolean;

	constructor(o: { scopes: NSArray<string> | string[]; account: MSALAccount });

	initWithScopesAccount(scopes: NSArray<string> | string[], account: MSALAccount): this;
}

declare class MSALSliceConfig extends NSObject implements NSCopying {
	static alloc(): MSALSliceConfig; // inherited from NSObject

	static configWithSliceDc(slice: string, dc: string): MSALSliceConfig;

	static new(): MSALSliceConfig; // inherited from NSObject

	dc: string;

	slice: string;

	readonly sliceDictionary: NSDictionary<any, any>;

	constructor(o: { slice: string; dc: string });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithSliceDc(slice: string, dc: string): this;
}

declare class MSALTelemetry extends NSObject {
	static alloc(): MSALTelemetry; // inherited from NSObject

	static new(): MSALTelemetry; // inherited from NSObject

	static sharedInstance(): MSALTelemetry;

	notifyOnFailureOnly: boolean;

	piiEnabled: boolean;

	telemetryCallback: (p1: NSDictionary<string, string>) => void;
}

declare class MSALTelemetryConfig extends NSObject {
	static alloc(): MSALTelemetryConfig; // inherited from NSObject

	static new(): MSALTelemetryConfig; // inherited from NSObject

	notifyOnFailureOnly: boolean;

	piiEnabled: boolean;

	telemetryCallback: (p1: NSDictionary<string, string>) => void;
}

declare class MSALTenantProfile extends NSObject implements NSCopying {
	static alloc(): MSALTenantProfile; // inherited from NSObject

	static new(): MSALTenantProfile; // inherited from NSObject

	readonly claims: NSDictionary<string, any>;

	readonly environment: string;

	readonly identifier: string;

	readonly isHomeTenantProfile: boolean;

	readonly tenantId: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class MSALTokenParameters extends MSALParameters {
	static alloc(): MSALTokenParameters; // inherited from NSObject

	static new(): MSALTokenParameters; // inherited from NSObject

	account: MSALAccount;

	authenticationScheme: MSALAuthenticationSchemeProtocol;

	authority: MSALAuthority;

	claimsRequest: MSALClaimsRequest;

	correlationId: NSUUID;

	scopes: NSArray<string>;

	constructor(o: { scopes: NSArray<string> | string[] });

	initWithScopes(scopes: NSArray<string> | string[]): this;
}

declare var MSALVersionNumber: number;

declare var MSALVersionString: interop.Reference<number>;

declare var MSALWebAuthDidCompleteNotification: string;

declare var MSALWebAuthDidFailNotification: string;

declare var MSALWebAuthDidFinishLoadNotification: string;

declare var MSALWebAuthDidReceiveResponseFromBroker: string;

declare var MSALWebAuthDidStartLoadNotification: string;

declare var MSALWebAuthWillSwitchToBrokerApp: string;

declare class MSALWebviewParameters extends NSObject implements NSCopying {
	static alloc(): MSALWebviewParameters; // inherited from NSObject

	static new(): MSALWebviewParameters; // inherited from NSObject

	customWebview: WKWebView;

	parentViewController: UIViewController;

	prefersEphemeralWebBrowserSession: boolean;

	presentationStyle: UIModalPresentationStyle;

	webviewType: MSALWebviewType;

	constructor(o: { authPresentationViewController: UIViewController });

	constructor(o: { parentViewController: UIViewController });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithAuthPresentationViewController(parentViewController: UIViewController): this;

	initWithParentViewController(parentViewController: UIViewController): this;
}

declare const enum MSALWebviewType {
	Default = 0,

	AuthenticationSession = 1,

	SafariViewController = 2,

	WKWebView = 3,
}

declare var MSAL__Framework_VersionNumber: number;

declare var MSAL__Framework_VersionString: interop.Reference<number>;
