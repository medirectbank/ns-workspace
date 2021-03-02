# @medirect/msal

```javascript
ns plugin add @medirect/msal
```

## Usage

## Android

### Under Authentication -> Platform configurations, click "Add a platform" and select Android.

To generate the base64 signature of your application:

`MacOS: keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64`
`Windows: keytool -exportcert -alias androiddebugkey -keystore %HOMEPATH%.android\debug.keystore | openssl sha1 -binary | openssl base64`

### Configure your intent filter

```
 <!--Intent filter to capture authorization code response from the default browser on the device calling back to our app after interactive sign in -->
    <activity
        android:name="com.microsoft.identity.client.BrowserTabActivity">
        <intent-filter>
            <action android:name="android.intent.action.VIEW" />
            <category android:name="android.intent.category.DEFAULT" />
            <category android:name="android.intent.category.BROWSABLE" />
            <data
                android:scheme="msauth"
                android:host="<YOUR_PACKAGE_NAME>"
                android:path="/<YOUR_BASE64_ENCODED_PACKAGE_SIGNATURE>" />
        </intent-filter>
    </activity>
```

## iOS

see https://github.com/AzureAD/microsoft-authentication-library-for-objc

Add your application's redirect URI scheme to your Info.plist file, it will be in the format of
`msauth.[BUNDLE_ID]`

```
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>msauth.[BUNDLE_ID]</string>
        </array>
    </dict>
</array>
```

Add LSApplicationQueriesSchemes to allow making call to Microsoft Authenticator if installed.
Note that "msauthv3" scheme is needed when compiling your app with Xcode 11 and later.

```
<key>LSApplicationQueriesSchemes</key>
<array>
	<string>msauthv2</string>
	<string>msauthv3</string>
</array>
```

## License

Apache License Version 2.0
