---
title: class QCefConfig
---

# class `QCefConfig` <a class="anchor" id="class_q_cef_config"></a>

Represents the CEF setting. For more details please refer to: [https://bitbucket.org/chromiumembedded/cef/wiki/GeneralUsage.md#markdown-header-cefsettings](https://bitbucket.org/chromiumembedded/cef/wiki/GeneralUsage.md#markdown-header-cefsettings)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`QCefConfig`](#class_q_cef_config_1a74b25fcd62cfe7cc4ab262cd890271bb)`(int argc,char * argv)` | Constructs a CEF config instance
`public  `[`QCefConfig`](#class_q_cef_config_1af90f0b9e087d39a6bd059701ee450516)`(const `[`QCefConfig`](#class_q_cef_config)` & other)` | Constructs a CEF setting from existing one
`public `[`QCefConfig`](#class_q_cef_config)` & `[`operator=`](#class_q_cef_config_1a2f78eccb1b7463db2c0b174aff5d0553)`(const `[`QCefConfig`](#class_q_cef_config)` & other)` | Assigns an existing config to current
`public  `[`~QCefConfig`](#class_q_cef_config_1a67d06ef56affa82e943c7a5c73afee9a)`()` | Destructs the config
`public void `[`setBrowserSubProcessPath`](#class_q_cef_config_1a3fca1b7b72f37f800278c743b74f1b82)`(const QString & path)` | Sets the browser subprocess path
`public const QString `[`browserSubProcessPath`](#class_q_cef_config_1a2b15417d6066479256fc514721cd0474)`() const` | Gets the browser subprocess path
`public void `[`setResourceDirectoryPath`](#class_q_cef_config_1a0690fb1cb1a3cd87c44be340b6308f42)`(const QString & path)` | Sets the resource directory path
`public const QString `[`resourceDirectoryPath`](#class_q_cef_config_1a45c8bed47089201d40124041b7499164)`() const` | Gets the resource directory path
`public void `[`setLocalesDirectoryPath`](#class_q_cef_config_1a4af04a575ecd6b632a794c42144d03d8)`(const QString & path)` | Sets the locales directory path
`public const QString `[`localesDirectoryPath`](#class_q_cef_config_1a3d43450cd3768ff1783596e48fcfe707)`() const` | Gets the locales directory path
`public void `[`setLogLevel`](#class_q_cef_config_1a230ee52b4d64e0ea6f7ba5a4e9ac5f5e)`(const `[`LogLevel`](#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c)` lvl)` | Sets the log level
`public const `[`QCefConfig::LogLevel`](#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c)` `[`logLevel`](#class_q_cef_config_1a8728d026571a97449e13e8502c34e5e5)`() const` | Gets the log level
`public void `[`setLocale`](#class_q_cef_config_1af67e837996a1dd84af0866f76588ba4e)`(const QString & locale)` | Sets the locale
`public const QString `[`locale`](#class_q_cef_config_1ac1d5ca26f596c9f3e7697da04e549414)`() const` | Gets the locale
`public void `[`setUserAgent`](#class_q_cef_config_1a60009aad390599eb5857182a32de7f23)`(const QString & agent)` | Sets the user agent
`public const QString `[`userAgent`](#class_q_cef_config_1ad95b55d57719d9fc1a3dc5abb5695016)`() const` | Gets the user agent
`public void `[`setCachePath`](#class_q_cef_config_1aa8f73284ec9ed73dc2028b8c89e8e3c8)`(const QString & path)` | Sets the cache directory path
`public const QString `[`cachePath`](#class_q_cef_config_1ab3a95ce139ce862abb4abb300c1cc1e3)`() const` | Gets the cache directory path
`public void `[`setUserDataPath`](#class_q_cef_config_1a1026015e087a1abaebd81b6a7bf47852)`(const QString & path)` | Sets the user data directory path
`public const QString `[`userDataPath`](#class_q_cef_config_1a317ff9d74e89dac404e20005c33b08e9)`() const` | Gets the user data directory path
`public void `[`setBridgeObjectName`](#class_q_cef_config_1a03687393e227bc8747bdc9ffa7400d60)`(const QString & name)` | Sets the bridge object name
`public const QString `[`bridgeObjectName`](#class_q_cef_config_1aab1ee01c7697e38b94b8edf961da4b35)`() const` | Gets the bridge object name
`public void `[`setBackgroundColor`](#class_q_cef_config_1a2ef252883876dd17193212c52bd02fc0)`(const QColor & color)` | Sets the background color of the web page
`public const QVariant `[`backgroundColor`](#class_q_cef_config_1aa04db9637f47424834bbcdf05a8b640b)`() const` | Gets the background color
`public void `[`setAcceptLanguageList`](#class_q_cef_config_1a360c26dd512b9a4a3d6596c0590c370b)`(const QString & languages)` | Sets the acceptable language list
`public const QString `[`acceptLanguageList`](#class_q_cef_config_1a2828af9a2815ddeb1026e2f6a760d5e8)`() const` | Get the acceptable language list
`public void `[`setPersistSessionCookies`](#class_q_cef_config_1a04c4f9aa52131df29c4eb6abd48cc2f0)`(bool enabled)` | Sets whether to persist session cookie
`public const QVariant `[`persistSessionCookies`](#class_q_cef_config_1aa8b22bc6b4d9ef5c8aeccfc363ee1f9c)`() const` | Gets whether to persist session cookie
`public void `[`setPersistUserPreferences`](#class_q_cef_config_1a6c5c7d498a6c003166071ac6e4e7e359)`(bool enabled)` | Sets whether to persist user preferences
`public const QVariant `[`persistUserPreferences`](#class_q_cef_config_1a4749b6aa16660a15d753f5248985e25f)`() const` | Gets whether to persist user preferences
`public void `[`setRemoteDebuggingPort`](#class_q_cef_config_1ac502d5e4b911c4e57d6fe4167be6d801)`(short port)` | Sets the remote debugging port
`public const QVariant `[`remoteDebuggingPort`](#class_q_cef_config_1aeaa7b37b83ee32a5ec50a1dec11d0c2e)`() const` | Gets the remote debugging port
`enum `[`LogLevel`](#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c) | Represents the log severity

## Members

---
### `public  `[`QCefConfig`](#class_q_cef_config_1a74b25fcd62cfe7cc4ab262cd890271bb)`(int argc,char * argv)` <a class="anchor" id="class_q_cef_config_1a74b25fcd62cfe7cc4ab262cd890271bb"></a>

Constructs a CEF config instance

#### Parameters
* `argc` The application arguments count

* `argv` The application arguments list

---
### `public  `[`QCefConfig`](#class_q_cef_config_1af90f0b9e087d39a6bd059701ee450516)`(const `[`QCefConfig`](#class_q_cef_config)` & other)` <a class="anchor" id="class_q_cef_config_1af90f0b9e087d39a6bd059701ee450516"></a>

Constructs a CEF setting from existing one

---
### `public `[`QCefConfig`](#class_q_cef_config)` & `[`operator=`](#class_q_cef_config_1a2f78eccb1b7463db2c0b174aff5d0553)`(const `[`QCefConfig`](#class_q_cef_config)` & other)` <a class="anchor" id="class_q_cef_config_1a2f78eccb1b7463db2c0b174aff5d0553"></a>

Assigns an existing config to current

---
### `public  `[`~QCefConfig`](#class_q_cef_config_1a67d06ef56affa82e943c7a5c73afee9a)`()` <a class="anchor" id="class_q_cef_config_1a67d06ef56affa82e943c7a5c73afee9a"></a>

Destructs the config

---
### `public void `[`setBrowserSubProcessPath`](#class_q_cef_config_1a3fca1b7b72f37f800278c743b74f1b82)`(const QString & path)` <a class="anchor" id="class_q_cef_config_1a3fca1b7b72f37f800278c743b74f1b82"></a>

Sets the browser subprocess path

#### Parameters
* `path` The path to the sub process executable

---
### `public const QString `[`browserSubProcessPath`](#class_q_cef_config_1a2b15417d6066479256fc514721cd0474)`() const` <a class="anchor" id="class_q_cef_config_1a2b15417d6066479256fc514721cd0474"></a>

Gets the browser subprocess path

---
### `public void `[`setResourceDirectoryPath`](#class_q_cef_config_1a0690fb1cb1a3cd87c44be340b6308f42)`(const QString & path)` <a class="anchor" id="class_q_cef_config_1a0690fb1cb1a3cd87c44be340b6308f42"></a>

Sets the resource directory path

#### Parameters
* `path` The resource directory path

---
### `public const QString `[`resourceDirectoryPath`](#class_q_cef_config_1a45c8bed47089201d40124041b7499164)`() const` <a class="anchor" id="class_q_cef_config_1a45c8bed47089201d40124041b7499164"></a>

Gets the resource directory path

---
### `public void `[`setLocalesDirectoryPath`](#class_q_cef_config_1a4af04a575ecd6b632a794c42144d03d8)`(const QString & path)` <a class="anchor" id="class_q_cef_config_1a4af04a575ecd6b632a794c42144d03d8"></a>

Sets the locales directory path

#### Parameters
* `path` The locales directory path

---
### `public const QString `[`localesDirectoryPath`](#class_q_cef_config_1a3d43450cd3768ff1783596e48fcfe707)`() const` <a class="anchor" id="class_q_cef_config_1a3d43450cd3768ff1783596e48fcfe707"></a>

Gets the locales directory path

---
### `public void `[`setLogLevel`](#class_q_cef_config_1a230ee52b4d64e0ea6f7ba5a4e9ac5f5e)`(const `[`LogLevel`](#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c)` lvl)` <a class="anchor" id="class_q_cef_config_1a230ee52b4d64e0ea6f7ba5a4e9ac5f5e"></a>

Sets the log level

#### Parameters
* `lvl`

---
### `public const `[`QCefConfig::LogLevel`](#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c)` `[`logLevel`](#class_q_cef_config_1a8728d026571a97449e13e8502c34e5e5)`() const` <a class="anchor" id="class_q_cef_config_1a8728d026571a97449e13e8502c34e5e5"></a>

Gets the log level

#### Returns
The current log level

---
### `public void `[`setLocale`](#class_q_cef_config_1af67e837996a1dd84af0866f76588ba4e)`(const QString & locale)` <a class="anchor" id="class_q_cef_config_1af67e837996a1dd84af0866f76588ba4e"></a>

Sets the locale

#### Parameters
* `locale` The locale to use. If empty the default locale of "en-US" will be used. This value is ignored on Linux where locale is determined using environment variable parsing with the precedence order: LANGUAGE, LC_ALL, LC_MESSAGES and LANG. Also configurable using the "lang" command-line switch.

---
### `public const QString `[`locale`](#class_q_cef_config_1ac1d5ca26f596c9f3e7697da04e549414)`() const` <a class="anchor" id="class_q_cef_config_1ac1d5ca26f596c9f3e7697da04e549414"></a>

Gets the locale

---
### `public void `[`setUserAgent`](#class_q_cef_config_1a60009aad390599eb5857182a32de7f23)`(const QString & agent)` <a class="anchor" id="class_q_cef_config_1a60009aad390599eb5857182a32de7f23"></a>

Sets the user agent

#### Parameters
* `agent` The user agent

---
### `public const QString `[`userAgent`](#class_q_cef_config_1ad95b55d57719d9fc1a3dc5abb5695016)`() const` <a class="anchor" id="class_q_cef_config_1ad95b55d57719d9fc1a3dc5abb5695016"></a>

Gets the user agent

---
### `public void `[`setCachePath`](#class_q_cef_config_1aa8f73284ec9ed73dc2028b8c89e8e3c8)`(const QString & path)` <a class="anchor" id="class_q_cef_config_1aa8f73284ec9ed73dc2028b8c89e8e3c8"></a>

Sets the cache directory path

#### Parameters
* `path` The cache path

---
### `public const QString `[`cachePath`](#class_q_cef_config_1ab3a95ce139ce862abb4abb300c1cc1e3)`() const` <a class="anchor" id="class_q_cef_config_1ab3a95ce139ce862abb4abb300c1cc1e3"></a>

Gets the cache directory path

---
### `public void `[`setUserDataPath`](#class_q_cef_config_1a1026015e087a1abaebd81b6a7bf47852)`(const QString & path)` <a class="anchor" id="class_q_cef_config_1a1026015e087a1abaebd81b6a7bf47852"></a>

Sets the user data directory path

#### Parameters
* `path` The user data directory path

---
### `public const QString `[`userDataPath`](#class_q_cef_config_1a317ff9d74e89dac404e20005c33b08e9)`() const` <a class="anchor" id="class_q_cef_config_1a317ff9d74e89dac404e20005c33b08e9"></a>

Gets the user data directory path

---
### `public void `[`setBridgeObjectName`](#class_q_cef_config_1a03687393e227bc8747bdc9ffa7400d60)`(const QString & name)` <a class="anchor" id="class_q_cef_config_1a03687393e227bc8747bdc9ffa7400d60"></a>

Sets the bridge object name

#### Parameters
* `name` The bridge object name

The bridge object represents a Javascript object which will be inserted into all browser and frames. This object is designated for communicating between Javascript in web content and native context(C/C++) code. This object is set as an property of window object. That means it can be obtained by calling window.bridgeObject in the Javascript code.

---
### `public const QString `[`bridgeObjectName`](#class_q_cef_config_1aab1ee01c7697e38b94b8edf961da4b35)`() const` <a class="anchor" id="class_q_cef_config_1aab1ee01c7697e38b94b8edf961da4b35"></a>

Gets the bridge object name

---
### `public void `[`setBackgroundColor`](#class_q_cef_config_1a2ef252883876dd17193212c52bd02fc0)`(const QColor & color)` <a class="anchor" id="class_q_cef_config_1a2ef252883876dd17193212c52bd02fc0"></a>

Sets the background color of the web page

#### Parameters
* `color` The color to be set

---
### `public const QVariant `[`backgroundColor`](#class_q_cef_config_1aa04db9637f47424834bbcdf05a8b640b)`() const` <a class="anchor" id="class_q_cef_config_1aa04db9637f47424834bbcdf05a8b640b"></a>

Gets the background color

---
### `public void `[`setAcceptLanguageList`](#class_q_cef_config_1a360c26dd512b9a4a3d6596c0590c370b)`(const QString & languages)` <a class="anchor" id="class_q_cef_config_1a360c26dd512b9a4a3d6596c0590c370b"></a>

Sets the acceptable language list

#### Parameters
* `languages`

---
### `public const QString `[`acceptLanguageList`](#class_q_cef_config_1a2828af9a2815ddeb1026e2f6a760d5e8)`() const` <a class="anchor" id="class_q_cef_config_1a2828af9a2815ddeb1026e2f6a760d5e8"></a>

Get the acceptable language list

---
### `public void `[`setPersistSessionCookies`](#class_q_cef_config_1a04c4f9aa52131df29c4eb6abd48cc2f0)`(bool enabled)` <a class="anchor" id="class_q_cef_config_1a04c4f9aa52131df29c4eb6abd48cc2f0"></a>

Sets whether to persist session cookie

#### Parameters
* `enabled` True if to perssit session cookie

---
### `public const QVariant `[`persistSessionCookies`](#class_q_cef_config_1aa8b22bc6b4d9ef5c8aeccfc363ee1f9c)`() const` <a class="anchor" id="class_q_cef_config_1aa8b22bc6b4d9ef5c8aeccfc363ee1f9c"></a>

Gets whether to persist session cookie

---
### `public void `[`setPersistUserPreferences`](#class_q_cef_config_1a6c5c7d498a6c003166071ac6e4e7e359)`(bool enabled)` <a class="anchor" id="class_q_cef_config_1a6c5c7d498a6c003166071ac6e4e7e359"></a>

Sets whether to persist user preferences

#### Parameters
* `enabled` True if to persist user preferences

---
### `public const QVariant `[`persistUserPreferences`](#class_q_cef_config_1a4749b6aa16660a15d753f5248985e25f)`() const` <a class="anchor" id="class_q_cef_config_1a4749b6aa16660a15d753f5248985e25f"></a>

Gets whether to persist user preferences

---
### `public void `[`setRemoteDebuggingPort`](#class_q_cef_config_1ac502d5e4b911c4e57d6fe4167be6d801)`(short port)` <a class="anchor" id="class_q_cef_config_1ac502d5e4b911c4e57d6fe4167be6d801"></a>

Sets the remote debugging port

#### Parameters
* `port` The port to use

CEF supports the remote debugging with Dev Tools in Chrome/Edge. if this value is set then you can debug the WebApplication by accessing [http://127.0.0.1:port](http://127.0.0.1:port) from Chrome/Edge

---
### `public const QVariant `[`remoteDebuggingPort`](#class_q_cef_config_1aeaa7b37b83ee32a5ec50a1dec11d0c2e)`() const` <a class="anchor" id="class_q_cef_config_1aeaa7b37b83ee32a5ec50a1dec11d0c2e"></a>

Gets the remote debugging port

---
### `enum `[`LogLevel`](#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c) <a class="anchor" id="class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c"></a>

Represents the log severity

 Values             | Descriptions
--------------------|-----------------------
LOGSEVERITY_DEFAULT | Default log level (Information)
LOGSEVERITY_VERBOSE | Verbose log level
LOGSEVERITY_DEBUG   | Debug log level
LOGSEVERITY_INFO    | Information log level
LOGSEVERITY_WARNING | Warning log level
LOGSEVERITY_ERROR   | Error log level
LOGSEVERITY_FATAL   | Fatal log level
LOGSEVERITY_DISABLE | Disable log



