---
title: QCefContext
---

# class `QCefContext` {#class_q_cef_context}

```
class QCefContext
  : public QObject
```

Represents the CEF context.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`QCefContext`](#class_q_cef_context_1aa2b8af8d2d806ba8b5110e868d314c8c)`(QCoreApplication * app, int argc, char ** argv, const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * config)`                  | Constructs the CEF context.
`public  `[`~QCefContext`](#class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d)`()`                  | Destructs the CEF context.
`public void `[`addLocalFolderResource`](#class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454)`(const QString & path, const QString & url, int priority)`                  | Adds a url mapping item with local web resource directory. This works for all  instances created subsequently.
`public void `[`addArchiveResource`](#class_q_cef_context_1aba9c70a84379190d151bdc4b634367e6)`(const QString & path, const QString & url, const QString & password, int priority)`                  | Adds a url mapping item with local archive (.zip) file which contains the web resource. This works for all  instances created subsequently.
`public bool `[`addCookie`](#class_q_cef_context_1a6d2e90de7fb5fcf2b7e7a6581d26e62c)`(const QString & name, const QString & value, const QString & domain, const QString & url)`                  | Adds a cookie to the CEF context, this cookie is accessible from all browsers created with this context.
`public bool `[`deleteAllCookies`](#class_q_cef_context_1a794e41a74ddabc503bed5e8c47fe3dd0)`()`                  | Deletes all cookies from the CEF context.
`public bool `[`addCrossOriginWhitelistEntry`](#class_q_cef_context_1aaba077228a77f5e7d7491eda3ce10267)`(const QString & sourceOrigin, const QString & targetSchema, const QString & targetDomain, bool allowTargetSubdomains)`                  | Adds an entry to the cross-origin access whitelist. For details please refer to: [https://github.com/chromiumembedded/cef/blob/605c2bac86415dcec1e2902cdc46dc11c1ad026a/include/cef_origin_whitelist.h#L81C23-L81C23](https://github.com/chromiumembedded/cef/blob/605c2bac86415dcec1e2902cdc46dc11c1ad026a/include/cef_origin_whitelist.h#L81C23-L81C23).
`public bool `[`removeCrossOriginWhitelistEntry`](#class_q_cef_context_1af04aefeea503031f5a8fbdabf05bc5e8)`(const QString & sourceOrigin, const QString & targetSchema, const QString & targetDomain, bool allowTargetSubdomains)`                  | Removes an entry from the cross-origin access whitelist. For details please refer to: [https://github.com/chromiumembedded/cef/blob/605c2bac86415dcec1e2902cdc46dc11c1ad026a/include/cef_origin_whitelist.h#L91C12-L91C12](https://github.com/chromiumembedded/cef/blob/605c2bac86415dcec1e2902cdc46dc11c1ad026a/include/cef_origin_whitelist.h#L91C12-L91C12).
`public bool `[`clearCrossOriginWhitelistEntry`](#class_q_cef_context_1a95d71c83fef34e8218a8ce559f173ab4)`()`                  | Removes all entries from the cross-origin access whitelist.
`public const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * `[`cefConfig`](#class_q_cef_context_1acfd6416ebc0a8df5cf8961dadeff960e)`() const`                  | Gets the [QCefConfig](QCefConfig.md#class_q_cef_config).
`protected bool `[`init`](#class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6)`(const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * config)`                  | Initialize the CEF context.
`protected void `[`uninit`](#class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b)`()`                  | Uninitialize the CEF context.
`private QScopedPointer< QCefContextPrivate > `[`d_ptr`](#class_q_cef_context_1a502cdbb18c3abae014e6b8ee42948645)                  | 
`public static `[`QCefContext`](#class_q_cef_context)` * `[`instance`](#class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b)`()`                  | Gets the unique default instance.

## Members

---
### `public  `[`QCefContext`](#class_q_cef_context_1aa2b8af8d2d806ba8b5110e868d314c8c)`(QCoreApplication * app, int argc, char ** argv, const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * config)` {#class_q_cef_context_1aa2b8af8d2d806ba8b5110e868d314c8c}

Constructs the CEF context.

#### Parameters
* `app` The application

* `argc` The argument count

* `argv` The argument list pointer

* `config` The [QCefConfig](QCefConfig.md#class_q_cef_config) instance

---
### `public  `[`~QCefContext`](#class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d)`()` {#class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d}

Destructs the CEF context.

---
### `public void `[`addLocalFolderResource`](#class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454)`(const QString & path, const QString & url, int priority)` {#class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454}

Adds a url mapping item with local web resource directory. This works for all  instances created subsequently.

#### Parameters
* `path` The path to the local resource directory

* `url` The url to be mapped to

* `priority` The priority

---
### `public void `[`addArchiveResource`](#class_q_cef_context_1aba9c70a84379190d151bdc4b634367e6)`(const QString & path, const QString & url, const QString & password, int priority)` {#class_q_cef_context_1aba9c70a84379190d151bdc4b634367e6}

Adds a url mapping item with local archive (.zip) file which contains the web resource. This works for all  instances created subsequently.

#### Parameters
* `path` The path to the local archive file

* `url` The url to be mapped to

* `password` The password of the archive

* `priority` The priority

---
### `public bool `[`addCookie`](#class_q_cef_context_1a6d2e90de7fb5fcf2b7e7a6581d26e62c)`(const QString & name, const QString & value, const QString & domain, const QString & url)` {#class_q_cef_context_1a6d2e90de7fb5fcf2b7e7a6581d26e62c}

Adds a cookie to the CEF context, this cookie is accessible from all browsers created with this context.

#### Parameters
* `name` The cookie item name

* `value` The cookie item value

* `domain` The applicable domain name

* `url` The applicable url

#### Returns
True on success; otherwise false

---
### `public bool `[`deleteAllCookies`](#class_q_cef_context_1a794e41a74ddabc503bed5e8c47fe3dd0)`()` {#class_q_cef_context_1a794e41a74ddabc503bed5e8c47fe3dd0}

Deletes all cookies from the CEF context.

#### Returns
True on success; otherwise false

---
### `public bool `[`addCrossOriginWhitelistEntry`](#class_q_cef_context_1aaba077228a77f5e7d7491eda3ce10267)`(const QString & sourceOrigin, const QString & targetSchema, const QString & targetDomain, bool allowTargetSubdomains)` {#class_q_cef_context_1aaba077228a77f5e7d7491eda3ce10267}

Adds an entry to the cross-origin access whitelist. For details please refer to: [https://github.com/chromiumembedded/cef/blob/605c2bac86415dcec1e2902cdc46dc11c1ad026a/include/cef_origin_whitelist.h#L81C23-L81C23](https://github.com/chromiumembedded/cef/blob/605c2bac86415dcec1e2902cdc46dc11c1ad026a/include/cef_origin_whitelist.h#L81C23-L81C23).

#### Parameters
* `sourceOrigin` The source origin

* `targetSchema` The target schema

* `targetDomain` The target domain

* `allowTargetSubdomains` Whether to allow subdomain or not

#### Returns
True on success; otherwise false

---
### `public bool `[`removeCrossOriginWhitelistEntry`](#class_q_cef_context_1af04aefeea503031f5a8fbdabf05bc5e8)`(const QString & sourceOrigin, const QString & targetSchema, const QString & targetDomain, bool allowTargetSubdomains)` {#class_q_cef_context_1af04aefeea503031f5a8fbdabf05bc5e8}

Removes an entry from the cross-origin access whitelist. For details please refer to: [https://github.com/chromiumembedded/cef/blob/605c2bac86415dcec1e2902cdc46dc11c1ad026a/include/cef_origin_whitelist.h#L91C12-L91C12](https://github.com/chromiumembedded/cef/blob/605c2bac86415dcec1e2902cdc46dc11c1ad026a/include/cef_origin_whitelist.h#L91C12-L91C12).

#### Parameters
* `sourceOrigin` The source origin

* `targetSchema` The target schema

* `targetDomain` The target domain

* `allowTargetSubdomains` Whether to allow subdomain or not

#### Returns
True on success; otherwise false

---
### `public bool `[`clearCrossOriginWhitelistEntry`](#class_q_cef_context_1a95d71c83fef34e8218a8ce559f173ab4)`()` {#class_q_cef_context_1a95d71c83fef34e8218a8ce559f173ab4}

Removes all entries from the cross-origin access whitelist.

---
### `public const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * `[`cefConfig`](#class_q_cef_context_1acfd6416ebc0a8df5cf8961dadeff960e)`() const` {#class_q_cef_context_1acfd6416ebc0a8df5cf8961dadeff960e}

Gets the [QCefConfig](QCefConfig.md#class_q_cef_config).

#### Returns
The [QCefConfig](QCefConfig.md#class_q_cef_config) instance

---
### `protected bool `[`init`](#class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6)`(const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * config)` {#class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6}

Initialize the CEF context.

#### Parameters
* `config` The [QCefConfig](QCefConfig.md#class_q_cef_config) instance

#### Returns
True on success; otherwise false

---
### `protected void `[`uninit`](#class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b)`()` {#class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b}

Uninitialize the CEF context.

---
### `private QScopedPointer< QCefContextPrivate > `[`d_ptr`](#class_q_cef_context_1a502cdbb18c3abae014e6b8ee42948645) {#class_q_cef_context_1a502cdbb18c3abae014e6b8ee42948645}

---
### `public static `[`QCefContext`](#class_q_cef_context)` * `[`instance`](#class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b)`()` {#class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b}

Gets the unique default instance.

#### Returns
The default instance

