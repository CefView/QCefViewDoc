---
title: QCefConfig
---

# class `QCefConfig` {#class_q_cef_config}

Represents the CEF setting. For more details please refer to: [https://bitbucket.org/chromiumembedded/cef/wiki/GeneralUsage.md#markdown-header-cefsettings](https://bitbucket.org/chromiumembedded/cef/wiki/GeneralUsage.md#markdown-header-cefsettings)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`QCefConfig`](#class_q_cef_config_1a2a937276cdbf76f77d2bf70a766c6412)`()`                  | Constructs a CEF config instance
`public  `[`QCefConfig`](#class_q_cef_config_1af90f0b9e087d39a6bd059701ee450516)`(const `[`QCefConfig`](#class_q_cef_config)` & other)`                  | Constructs a CEF setting from existing one
`public `[`QCefConfig`](#class_q_cef_config)` & `[`operator=`](#class_q_cef_config_1a2f78eccb1b7463db2c0b174aff5d0553)`(const `[`QCefConfig`](#class_q_cef_config)` & other)`                  | Assigns an existing config to current
`public  `[`~QCefConfig`](#class_q_cef_config_1a67d06ef56affa82e943c7a5c73afee9a)`()`                  | Destructs the config
`public void `[`addCommandLineSwitch`](#class_q_cef_config_1a2873f9e8e8997db4060348418df16632)`(const QString & smitch)`                  | Adds a switch to the commandline args used to initialize the CEF
`public void `[`addCommandLineSwitchWithValue`](#class_q_cef_config_1a141daa8b02526d190e462cbcb38dbab5)`(const QString & smitch, const QString & v)`                  | Adds a switch with value to the commandline args used to initialize the CEF
`public void `[`setBrowserSubProcessPath`](#class_q_cef_config_1a3fca1b7b72f37f800278c743b74f1b82)`(const QString & path)`                  | Sets the browser subprocess path
`public const QString `[`browserSubProcessPath`](#class_q_cef_config_1a2b15417d6066479256fc514721cd0474)`() const`                  | Gets the browser subprocess path
`public void `[`setResourceDirectoryPath`](#class_q_cef_config_1a0690fb1cb1a3cd87c44be340b6308f42)`(const QString & path)`                  | Sets the resource directory path
`public const QString `[`resourceDirectoryPath`](#class_q_cef_config_1a45c8bed47089201d40124041b7499164)`() const`                  | Gets the resource directory path
`public void `[`setLocalesDirectoryPath`](#class_q_cef_config_1a4af04a575ecd6b632a794c42144d03d8)`(const QString & path)`                  | Sets the locales directory path
`public const QString `[`localesDirectoryPath`](#class_q_cef_config_1a3d43450cd3768ff1783596e48fcfe707)`() const`                  | Gets the locales directory path
`public void `[`setLogLevel`](#class_q_cef_config_1a230ee52b4d64e0ea6f7ba5a4e9ac5f5e)`(const `[`LogLevel`](#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c)` lvl)`                  | Sets the log level
`public const `[`QCefConfig::LogLevel`](#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c)` `[`logLevel`](#class_q_cef_config_1a8728d026571a97449e13e8502c34e5e5)`() const`                  | Gets the log level
`public void `[`setLocale`](#class_q_cef_config_1af67e837996a1dd84af0866f76588ba4e)`(const QString & locale)`                  | Sets the locale
`public const QString `[`locale`](#class_q_cef_config_1ac1d5ca26f596c9f3e7697da04e549414)`() const`                  | Gets the locale
`public void `[`setUserAgent`](#class_q_cef_config_1a60009aad390599eb5857182a32de7f23)`(const QString & agent)`                  | Sets the user agent
`public const QString `[`userAgent`](#class_q_cef_config_1ad95b55d57719d9fc1a3dc5abb5695016)`() const`                  | Gets the user agent
`public void `[`setCachePath`](#class_q_cef_config_1aa8f73284ec9ed73dc2028b8c89e8e3c8)`(const QString & path)`                  | Sets the cache directory path
`public const QString `[`cachePath`](#class_q_cef_config_1ab3a95ce139ce862abb4abb300c1cc1e3)`() const`                  | Gets the cache directory path
`public void `[`setUserDataPath`](#class_q_cef_config_1a1026015e087a1abaebd81b6a7bf47852)`(const QString & path)`                  | Sets the user data directory path
`public const QString `[`userDataPath`](#class_q_cef_config_1a317ff9d74e89dac404e20005c33b08e9)`() const`                  | Gets the user data directory path
`public void `[`setBridgeObjectName`](#class_q_cef_config_1a03687393e227bc8747bdc9ffa7400d60)`(const QString & name)`                  | Sets the bridge object name
`public const QString `[`bridgeObjectName`](#class_q_cef_config_1aab1ee01c7697e38b94b8edf961da4b35)`() const`                  | Gets the bridge object name
`public void `[`setBackgroundColor`](#class_q_cef_config_1a2ef252883876dd17193212c52bd02fc0)`(const QColor & color)`                  | Sets the background color of the web page
`public const QVariant `[`backgroundColor`](#class_q_cef_config_1aa04db9637f47424834bbcdf05a8b640b)`() const`                  | Gets the background color
`public void `[`setAcceptLanguageList`](#class_q_cef_config_1a360c26dd512b9a4a3d6596c0590c370b)`(const QString & languages)`                  | Sets the acceptable language list
`public const QString `[`acceptLanguageList`](#class_q_cef_config_1a2828af9a2815ddeb1026e2f6a760d5e8)`() const`                  | Get the acceptable language list
`public void `[`setPersistSessionCookies`](#class_q_cef_config_1a04c4f9aa52131df29c4eb6abd48cc2f0)`(bool enabled)`                  | Sets whether to persist session cookie
`public const QVariant `[`persistSessionCookies`](#class_q_cef_config_1aa8b22bc6b4d9ef5c8aeccfc363ee1f9c)`() const`                  | Gets whether to persist session cookie
`public void `[`setPersistUserPreferences`](#class_q_cef_config_1a6c5c7d498a6c003166071ac6e4e7e359)`(bool enabled)`                  | Sets whether to persist user preferences
`public const QVariant `[`persistUserPreferences`](#class_q_cef_config_1a4749b6aa16660a15d753f5248985e25f)`() const`                  | Gets whether to persist user preferences
`public void `[`setRemoteDebuggingPort`](#class_q_cef_config_1ac502d5e4b911c4e57d6fe4167be6d801)`(short port)`                  | Sets the remote debugging port
`public const QVariant `[`remoteDebuggingPort`](#class_q_cef_config_1aeaa7b37b83ee32a5ec50a1dec11d0c2e)`() const`                  | Gets the remote debugging port
`enum `[`LogLevel`](#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c)                  | Represents the log severity
`private QScopedPointer< QCefConfigPrivate > `[`d_ptr`](#class_q_cef_config_1ab524eb236e2915eabee11aa49124a0fc)                  | 

## Members

---
### `public  `[`QCefConfig`](#class_q_cef_config_1a2a937276cdbf76f77d2bf70a766c6412)`()` {#class_q_cef_config_1a2a937276cdbf76f77d2bf70a766c6412}

Constructs a CEF config instance

---
### `public  `[`QCefConfig`](#class_q_cef_config_1af90f0b9e087d39a6bd059701ee450516)`(const `[`QCefConfig`](#class_q_cef_config)` & other)` {#class_q_cef_config_1af90f0b9e087d39a6bd059701ee450516}

Constructs a CEF setting from existing one

---
### `public `[`QCefConfig`](#class_q_cef_config)` & `[`operator=`](#class_q_cef_config_1a2f78eccb1b7463db2c0b174aff5d0553)`(const `[`QCefConfig`](#class_q_cef_config)` & other)` {#class_q_cef_config_1a2f78eccb1b7463db2c0b174aff5d0553}

Assigns an existing config to current

---
### `public  `[`~QCefConfig`](#class_q_cef_config_1a67d06ef56affa82e943c7a5c73afee9a)`()` {#class_q_cef_config_1a67d06ef56affa82e943c7a5c73afee9a}

Destructs the config

---
### `public void `[`addCommandLineSwitch`](#class_q_cef_config_1a2873f9e8e8997db4060348418df16632)`(const QString & smitch)` {#class_q_cef_config_1a2873f9e8e8997db4060348418df16632}

Adds a switch to the commandline args used to initialize the CEF

#### Parameters
* `smitch` The switch name

---
### `public void `[`addCommandLineSwitchWithValue`](#class_q_cef_config_1a141daa8b02526d190e462cbcb38dbab5)`(const QString & smitch, const QString & v)` {#class_q_cef_config_1a141daa8b02526d190e462cbcb38dbab5}

Adds a switch with value to the commandline args used to initialize the CEF

#### Parameters
* `smitch` The swtich name

* `v` The switch value

---
### `public void `[`setBrowserSubProcessPath`](#class_q_cef_config_1a3fca1b7b72f37f800278c743b74f1b82)`(const QString & path)` {#class_q_cef_config_1a3fca1b7b72f37f800278c743b74f1b82}

Sets the browser subprocess path

#### Parameters
* `path` The path to the sub process executable

---
### `public const QString `[`browserSubProcessPath`](#class_q_cef_config_1a2b15417d6066479256fc514721cd0474)`() const` {#class_q_cef_config_1a2b15417d6066479256fc514721cd0474}

Gets the browser subprocess path

---
### `public void `[`setResourceDirectoryPath`](#class_q_cef_config_1a0690fb1cb1a3cd87c44be340b6308f42)`(const QString & path)` {#class_q_cef_config_1a0690fb1cb1a3cd87c44be340b6308f42}

Sets the resource directory path

#### Parameters
* `path` The resource directory path

---
### `public const QString `[`resourceDirectoryPath`](#class_q_cef_config_1a45c8bed47089201d40124041b7499164)`() const` {#class_q_cef_config_1a45c8bed47089201d40124041b7499164}

Gets the resource directory path

---
### `public void `[`setLocalesDirectoryPath`](#class_q_cef_config_1a4af04a575ecd6b632a794c42144d03d8)`(const QString & path)` {#class_q_cef_config_1a4af04a575ecd6b632a794c42144d03d8}

Sets the locales directory path

#### Parameters
* `path` The locales directory path

---
### `public const QString `[`localesDirectoryPath`](#class_q_cef_config_1a3d43450cd3768ff1783596e48fcfe707)`() const` {#class_q_cef_config_1a3d43450cd3768ff1783596e48fcfe707}

Gets the locales directory path

---
### `public void `[`setLogLevel`](#class_q_cef_config_1a230ee52b4d64e0ea6f7ba5a4e9ac5f5e)`(const `[`LogLevel`](#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c)` lvl)` {#class_q_cef_config_1a230ee52b4d64e0ea6f7ba5a4e9ac5f5e}

Sets the log level

#### Parameters
* `lvl`

---
### `public const `[`QCefConfig::LogLevel`](#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c)` `[`logLevel`](#class_q_cef_config_1a8728d026571a97449e13e8502c34e5e5)`() const` {#class_q_cef_config_1a8728d026571a97449e13e8502c34e5e5}

Gets the log level

#### Returns
The current log level

---
### `public void `[`setLocale`](#class_q_cef_config_1af67e837996a1dd84af0866f76588ba4e)`(const QString & locale)` {#class_q_cef_config_1af67e837996a1dd84af0866f76588ba4e}

Sets the locale

#### Parameters
* `locale` The locale to use. If empty the default locale of "en-US" will be used. This value is ignored on Linux where locale is determined using environment variable parsing with the precedence order: LANGUAGE, LC_ALL, LC_MESSAGES and LANG. Also configurable using the "lang" command-line switch.

---
### `public const QString `[`locale`](#class_q_cef_config_1ac1d5ca26f596c9f3e7697da04e549414)`() const` {#class_q_cef_config_1ac1d5ca26f596c9f3e7697da04e549414}

Gets the locale

---
### `public void `[`setUserAgent`](#class_q_cef_config_1a60009aad390599eb5857182a32de7f23)`(const QString & agent)` {#class_q_cef_config_1a60009aad390599eb5857182a32de7f23}

Sets the user agent

#### Parameters
* `agent` The user agent

---
### `public const QString `[`userAgent`](#class_q_cef_config_1ad95b55d57719d9fc1a3dc5abb5695016)`() const` {#class_q_cef_config_1ad95b55d57719d9fc1a3dc5abb5695016}

Gets the user agent

---
### `public void `[`setCachePath`](#class_q_cef_config_1aa8f73284ec9ed73dc2028b8c89e8e3c8)`(const QString & path)` {#class_q_cef_config_1aa8f73284ec9ed73dc2028b8c89e8e3c8}

Sets the cache directory path

#### Parameters
* `path` The cache path

---
### `public const QString `[`cachePath`](#class_q_cef_config_1ab3a95ce139ce862abb4abb300c1cc1e3)`() const` {#class_q_cef_config_1ab3a95ce139ce862abb4abb300c1cc1e3}

Gets the cache directory path

---
### `public void `[`setUserDataPath`](#class_q_cef_config_1a1026015e087a1abaebd81b6a7bf47852)`(const QString & path)` {#class_q_cef_config_1a1026015e087a1abaebd81b6a7bf47852}

Sets the user data directory path

#### Parameters
* `path` The user data directory path

---
### `public const QString `[`userDataPath`](#class_q_cef_config_1a317ff9d74e89dac404e20005c33b08e9)`() const` {#class_q_cef_config_1a317ff9d74e89dac404e20005c33b08e9}

Gets the user data directory path

---
### `public void `[`setBridgeObjectName`](#class_q_cef_config_1a03687393e227bc8747bdc9ffa7400d60)`(const QString & name)` {#class_q_cef_config_1a03687393e227bc8747bdc9ffa7400d60}

Sets the bridge object name

#### Parameters
* `name` The bridge object name

The bridge object represents a Javascript object which will be inserted into all browser and frames. This object is designated for communicating between Javascript in web content and native context(C/C++) code. This object is set as an property of window object. That means it can be obtained by calling window.bridgeObject in the Javascript code

---
### `public const QString `[`bridgeObjectName`](#class_q_cef_config_1aab1ee01c7697e38b94b8edf961da4b35)`() const` {#class_q_cef_config_1aab1ee01c7697e38b94b8edf961da4b35}

Gets the bridge object name

---
### `public void `[`setBackgroundColor`](#class_q_cef_config_1a2ef252883876dd17193212c52bd02fc0)`(const QColor & color)` {#class_q_cef_config_1a2ef252883876dd17193212c52bd02fc0}

Sets the background color of the web page

#### Parameters
* `color` The color to be set

This only works if the web page has no background color set. The alpha component value will be adjusted to 0 or 255, it means if you pass a value with alpha value in the range of [1, 255], it will be accepted as 255. The default value is qRgba(255, 255,. 255, 255)

---
### `public const QVariant `[`backgroundColor`](#class_q_cef_config_1aa04db9637f47424834bbcdf05a8b640b)`() const` {#class_q_cef_config_1aa04db9637f47424834bbcdf05a8b640b}

Gets the background color

---
### `public void `[`setAcceptLanguageList`](#class_q_cef_config_1a360c26dd512b9a4a3d6596c0590c370b)`(const QString & languages)` {#class_q_cef_config_1a360c26dd512b9a4a3d6596c0590c370b}

Sets the acceptable language list

#### Parameters
* `languages`

---
### `public const QString `[`acceptLanguageList`](#class_q_cef_config_1a2828af9a2815ddeb1026e2f6a760d5e8)`() const` {#class_q_cef_config_1a2828af9a2815ddeb1026e2f6a760d5e8}

Get the acceptable language list

---
### `public void `[`setPersistSessionCookies`](#class_q_cef_config_1a04c4f9aa52131df29c4eb6abd48cc2f0)`(bool enabled)` {#class_q_cef_config_1a04c4f9aa52131df29c4eb6abd48cc2f0}

Sets whether to persist session cookie

#### Parameters
* `enabled` True if to persist session cookie

---
### `public const QVariant `[`persistSessionCookies`](#class_q_cef_config_1aa8b22bc6b4d9ef5c8aeccfc363ee1f9c)`() const` {#class_q_cef_config_1aa8b22bc6b4d9ef5c8aeccfc363ee1f9c}

Gets whether to persist session cookie

---
### `public void `[`setPersistUserPreferences`](#class_q_cef_config_1a6c5c7d498a6c003166071ac6e4e7e359)`(bool enabled)` {#class_q_cef_config_1a6c5c7d498a6c003166071ac6e4e7e359}

Sets whether to persist user preferences

#### Parameters
* `enabled` True if to persist user preferences

---
### `public const QVariant `[`persistUserPreferences`](#class_q_cef_config_1a4749b6aa16660a15d753f5248985e25f)`() const` {#class_q_cef_config_1a4749b6aa16660a15d753f5248985e25f}

Gets whether to persist user preferences

---
### `public void `[`setRemoteDebuggingPort`](#class_q_cef_config_1ac502d5e4b911c4e57d6fe4167be6d801)`(short port)` {#class_q_cef_config_1ac502d5e4b911c4e57d6fe4167be6d801}

Sets the remote debugging port

#### Parameters
* `port` The port to use

CEF supports the remote debugging with Dev Tools in Chrome/Edge. if this value is set then you can debug the web application by accessing [http://127.0.0.1:port](http://127.0.0.1:port) from Chrome/Edge

---
### `public const QVariant `[`remoteDebuggingPort`](#class_q_cef_config_1aeaa7b37b83ee32a5ec50a1dec11d0c2e)`() const` {#class_q_cef_config_1aeaa7b37b83ee32a5ec50a1dec11d0c2e}

Gets the remote debugging port

---
### `enum `[`LogLevel`](#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c) {#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c}

Represents the log severity

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LOGSEVERITY_DEFAULT            | Default logging (currently INFO logging)
LOGSEVERITY_VERBOSE            | Verbose logging.
LOGSEVERITY_DEBUG            | DEBUG logging.
LOGSEVERITY_INFO            | INFO logging.
LOGSEVERITY_WARNING            | WARNING logging.
LOGSEVERITY_ERROR            | ERROR logging.
LOGSEVERITY_FATAL            | FATAL logging.
LOGSEVERITY_DISABLE            | Disable logging to file for all messages, and to stderr for messages with severity less than FATAL.

---
### `private QScopedPointer< QCefConfigPrivate > `[`d_ptr`](#class_q_cef_config_1ab524eb236e2915eabee11aa49124a0fc) {#class_q_cef_config_1ab524eb236e2915eabee11aa49124a0fc}

