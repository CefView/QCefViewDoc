---
title: QCefContext
---

# class `QCefContext` <a id="class_q_cef_context" class="anchor"></a>

```
class QCefContext
  : public QObject
```

Represents the CEF context

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`QCefContext`](#class_q_cef_context_1aa2b8af8d2d806ba8b5110e868d314c8c)`(QCoreApplication * app,int argc,char ** argv,const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * config)` | Constructs the CEF context
`public  `[`~QCefContext`](#class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d)`()` | Destructs the CEF context
`public void `[`addLocalFolderResource`](#class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454)`(const QString & path,const QString & url,int priority)` | Adds a url mapping item with local web resource directory
`public void `[`addArchiveResource`](#class_q_cef_context_1aba9c70a84379190d151bdc4b634367e6)`(const QString & path,const QString & url,const QString & password,int priority)` | Adds a url mapping item with local archive (.zip) file which contains the web resource
`public bool `[`addCookie`](#class_q_cef_context_1a6d2e90de7fb5fcf2b7e7a6581d26e62c)`(const QString & name,const QString & value,const QString & domain,const QString & url)` | Adds a cookie to the CEF context, this cookie is accessible from all browsers created with this context
`public const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * `[`cefConfig`](#class_q_cef_context_1acfd6416ebc0a8df5cf8961dadeff960e)`() const` | Gets the [QCefConfig](QCefConfig.md#class_q_cef_config)
`protected bool `[`init`](#class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6)`(const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * config)` | Initialize the CEF context
`protected void `[`uninit`](#class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b)`()` | Uninitialize the CEF context
 | 
`public static `[`QCefContext`](#class_q_cef_context)` * `[`instance`](#class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b)`()` | Gets the unique default instance

## Members

---
### `public  `[`QCefContext`](#class_q_cef_context_1aa2b8af8d2d806ba8b5110e868d314c8c)`(QCoreApplication * app,int argc,char ** argv,const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * config)` <a id="class_q_cef_context_1aa2b8af8d2d806ba8b5110e868d314c8c" class="anchor"></a>

Constructs the CEF context

#### Parameters
* `app` The application

* `argc` The argument count

* `argv` The argument list pointer

* `config` The [QCefConfig](QCefConfig.md#class_q_cef_config) instance

---
### `public  `[`~QCefContext`](#class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d)`()` <a id="class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d" class="anchor"></a>

Destructs the CEF context

---
### `public void `[`addLocalFolderResource`](#class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454)`(const QString & path,const QString & url,int priority)` <a id="class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454" class="anchor"></a>

Adds a url mapping item with local web resource directory

#### Parameters
* `path` The path to the local resource directory

* `url` The url to be mapped to

* `priority` The priority

---
### `public void `[`addArchiveResource`](#class_q_cef_context_1aba9c70a84379190d151bdc4b634367e6)`(const QString & path,const QString & url,const QString & password,int priority)` <a id="class_q_cef_context_1aba9c70a84379190d151bdc4b634367e6" class="anchor"></a>

Adds a url mapping item with local archive (.zip) file which contains the web resource

#### Parameters
* `path` The path to the local archive file

* `url` The url to be mapped to

* `password` The password of the archive

* `priority` The priority

---
### `public bool `[`addCookie`](#class_q_cef_context_1a6d2e90de7fb5fcf2b7e7a6581d26e62c)`(const QString & name,const QString & value,const QString & domain,const QString & url)` <a id="class_q_cef_context_1a6d2e90de7fb5fcf2b7e7a6581d26e62c" class="anchor"></a>

Adds a cookie to the CEF context, this cookie is accessible from all browsers created with this context

#### Parameters
* `name` The cookie item name

* `value` The cookie item value

* `domain` The applicable domain name

* `url` The applicable url

#### Returns
True on success; otherwise false

---
### `public const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * `[`cefConfig`](#class_q_cef_context_1acfd6416ebc0a8df5cf8961dadeff960e)`() const` <a id="class_q_cef_context_1acfd6416ebc0a8df5cf8961dadeff960e" class="anchor"></a>

Gets the [QCefConfig](QCefConfig.md#class_q_cef_config)

#### Returns
The [QCefConfig](QCefConfig.md#class_q_cef_config) instance

---
### `protected bool `[`init`](#class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6)`(const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * config)` <a id="class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6" class="anchor"></a>

Initialize the CEF context

#### Parameters
* `config` The [QCefConfig](QCefConfig.md#class_q_cef_config) instance

#### Returns
True on success; otherwise false

---
### `protected void `[`uninit`](#class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b)`()` <a id="class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b" class="anchor"></a>

Uninitialize the CEF context

---
###  <a id="class_q_cef_context_1a502cdbb18c3abae014e6b8ee42948645" class="anchor"></a>

---
### `public static `[`QCefContext`](#class_q_cef_context)` * `[`instance`](#class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b)`()` <a id="class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b" class="anchor"></a>

Gets the unique default instance

#### Returns
The default instance

