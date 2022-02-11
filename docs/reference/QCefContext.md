---
title: QCefContext
---

# class `QCefContext` <a class="anchor" id="class_q_cef_context"></a>

```
class QCefContext
  : public QObject
```

Represents the CEF context

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`QCefContext`](#class_q_cef_context_1a3ab6dba50c5a1db89a55631a0ffa06af)`(QCoreApplication * app,const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * config)` | Constructs the CEF context
`public  `[`~QCefContext`](#class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d)`()` | Destructs the CEF context
`public void `[`addLocalFolderResource`](#class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454)`(const QString & path,const QString & url,int priority)` | Adds a url mapping item with local web resource directory
`public void `[`addArchiveResource`](#class_q_cef_context_1a007272d5df4016143f6b9e221a3b0eb1)`(const QString & path,const QString & url,const QString & password)` | Adds a url mapping item with local archive (.zip) file which contains the web resource
`public void `[`addCookie`](#class_q_cef_context_1af2d03548017644bce79e04eb997d572e)`(const QString & name,const QString & value,const QString & domain,const QString & url)` | Adds a cookie to the CEF context, this cookie is accessible from all browsers created with this context
`protected bool `[`init`](#class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6)`(const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * config)` | Initialize the CEF context
`protected void `[`uninit`](#class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b)`()` | Uninitialize the CEF context
`private QScopedPointer< QCefContextPrivate > `[`d_ptr`](#class_q_cef_context_1a502cdbb18c3abae014e6b8ee42948645) | 
`public static `[`QCefContext`](#class_q_cef_context)` * `[`instance`](#class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b)`()` | Gets the unique default instance

## Members

---
### `public  `[`QCefContext`](#class_q_cef_context_1a3ab6dba50c5a1db89a55631a0ffa06af)`(QCoreApplication * app,const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * config)` <a class="anchor" id="class_q_cef_context_1a3ab6dba50c5a1db89a55631a0ffa06af"></a>

Constructs the CEF context

#### Parameters
* `app` The application

* `config` The [QCefConfig](QCefConfig.md#class_q_cef_config) instance

---
### `public  `[`~QCefContext`](#class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d)`()` <a class="anchor" id="class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d"></a>

Destructs the CEF context

---
### `public void `[`addLocalFolderResource`](#class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454)`(const QString & path,const QString & url,int priority)` <a class="anchor" id="class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454"></a>

Adds a url mapping item with local web resource directory

#### Parameters
* `path` The path to the local resource directory

* `url` The url to be mapped to

---
### `public void `[`addArchiveResource`](#class_q_cef_context_1a007272d5df4016143f6b9e221a3b0eb1)`(const QString & path,const QString & url,const QString & password)` <a class="anchor" id="class_q_cef_context_1a007272d5df4016143f6b9e221a3b0eb1"></a>

Adds a url mapping item with local archive (.zip) file which contains the web resource

#### Parameters
* `path` The path to the local archive file

* `url` The url to be mapped to

* `password` The password of the archive

---
### `public void `[`addCookie`](#class_q_cef_context_1af2d03548017644bce79e04eb997d572e)`(const QString & name,const QString & value,const QString & domain,const QString & url)` <a class="anchor" id="class_q_cef_context_1af2d03548017644bce79e04eb997d572e"></a>

Adds a cookie to the CEF context, this cookie is accessible from all browsers created with this context

#### Parameters
* `name` The cookie item name

* `value` The cookie item value

* `domain` The applicable domain name

* `url` The applicable url

---
### `protected bool `[`init`](#class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6)`(const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * config)` <a class="anchor" id="class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6"></a>

Initialize the CEF context

#### Parameters
* `config` The [QCefConfig](QCefConfig.md#class_q_cef_config) instance

#### Returns
True on success; otherwise false

---
### `protected void `[`uninit`](#class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b)`()` <a class="anchor" id="class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b"></a>

Uninitialize the CEF context

---
### `private QScopedPointer< QCefContextPrivate > `[`d_ptr`](#class_q_cef_context_1a502cdbb18c3abae014e6b8ee42948645) <a class="anchor" id="class_q_cef_context_1a502cdbb18c3abae014e6b8ee42948645"></a>

---
### `public static `[`QCefContext`](#class_q_cef_context)` * `[`instance`](#class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b)`()` <a class="anchor" id="class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b"></a>

Gets the unique default instance

#### Returns
The default instance

