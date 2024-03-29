---
title: QCefQuery
---

# class `QCefQuery` {#class_q_cef_query}

Represents the query request sent from the web content(Javascript)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`QCefQuery`](#class_q_cef_query_1a22d9fddcadce7a6e0259c691634c4d7a)`()`                  | Constructs a query instance.
`public  `[`QCefQuery`](#class_q_cef_query_1a4371b3245657bf41312aead3a88cbe33)`(const QString & req, const int64_t query)`                  | Constructs a query instance with request context and query id.
`public  `[`QCefQuery`](#class_q_cef_query_1a15297bbfd653f64aa48cec2347562b9e)`(const `[`QCefQuery`](#class_q_cef_query)` & other)`                  | Constructs a query instance from existing one.
`public `[`QCefQuery`](#class_q_cef_query)` & `[`operator=`](#class_q_cef_query_1adb304235ed62a9cac92338a415bfb058)`(const `[`QCefQuery`](#class_q_cef_query)` & other)`                  | Assigns an existing query instance to current.
`public  `[`~QCefQuery`](#class_q_cef_query_1a402d117cbd2d37681394f86d31ed11a3)`()`                  | Destructs a query instance.
`public const QString `[`request`](#class_q_cef_query_1a16d137bcc1bf2ef9bc8969ff1bd091e7)`() const`                  | Gets the query content.
`public const qint64 `[`id`](#class_q_cef_query_1a5b701d7f9c92ff814cfe28b110142a4c)`() const`                  | Gets the query id.
`public const QString `[`response`](#class_q_cef_query_1a663d5945146bebe69a0a3c5448bb9280)`() const`                  | Gets the response content string.
`public const bool `[`result`](#class_q_cef_query_1a8c2d78e19628d8066570338d659bc9b2)`() const`                  | Gets the response result.
`public const int `[`error`](#class_q_cef_query_1ab35201ac89d89f1445538f82a12f8fa8)`() const`                  | Gets the response error.
`public void `[`setResponseResult`](#class_q_cef_query_1aa86db4e257e3dc4e29c7906d80e06f28)`(bool success, const QString & response, int error) const`                  | Sets the response.
`private QScopedPointer< QCefQueryPrivate > `[`d_ptr`](#class_q_cef_query_1a3e84c15339bbf841b91a541222aed4e6)                  | 

## Members

---
### `public  `[`QCefQuery`](#class_q_cef_query_1a22d9fddcadce7a6e0259c691634c4d7a)`()` {#class_q_cef_query_1a22d9fddcadce7a6e0259c691634c4d7a}

Constructs a query instance.

---
### `public  `[`QCefQuery`](#class_q_cef_query_1a4371b3245657bf41312aead3a88cbe33)`(const QString & req, const int64_t query)` {#class_q_cef_query_1a4371b3245657bf41312aead3a88cbe33}

Constructs a query instance with request context and query id.

#### Parameters
* `req` The request context

* `query` The query id

---
### `public  `[`QCefQuery`](#class_q_cef_query_1a15297bbfd653f64aa48cec2347562b9e)`(const `[`QCefQuery`](#class_q_cef_query)` & other)` {#class_q_cef_query_1a15297bbfd653f64aa48cec2347562b9e}

Constructs a query instance from existing one.

#### Parameters
* `other` The other query instance

---
### `public `[`QCefQuery`](#class_q_cef_query)` & `[`operator=`](#class_q_cef_query_1adb304235ed62a9cac92338a415bfb058)`(const `[`QCefQuery`](#class_q_cef_query)` & other)` {#class_q_cef_query_1adb304235ed62a9cac92338a415bfb058}

Assigns an existing query instance to current.

#### Parameters
* `other` The other query instance

---
### `public  `[`~QCefQuery`](#class_q_cef_query_1a402d117cbd2d37681394f86d31ed11a3)`()` {#class_q_cef_query_1a402d117cbd2d37681394f86d31ed11a3}

Destructs a query instance.

---
### `public const QString `[`request`](#class_q_cef_query_1a16d137bcc1bf2ef9bc8969ff1bd091e7)`() const` {#class_q_cef_query_1a16d137bcc1bf2ef9bc8969ff1bd091e7}

Gets the query content.

#### Returns
The content string

---
### `public const qint64 `[`id`](#class_q_cef_query_1a5b701d7f9c92ff814cfe28b110142a4c)`() const` {#class_q_cef_query_1a5b701d7f9c92ff814cfe28b110142a4c}

Gets the query id.

#### Returns
The query id

---
### `public const QString `[`response`](#class_q_cef_query_1a663d5945146bebe69a0a3c5448bb9280)`() const` {#class_q_cef_query_1a663d5945146bebe69a0a3c5448bb9280}

Gets the response content string.

#### Returns
The response content string

---
### `public const bool `[`result`](#class_q_cef_query_1a8c2d78e19628d8066570338d659bc9b2)`() const` {#class_q_cef_query_1a8c2d78e19628d8066570338d659bc9b2}

Gets the response result.

#### Returns
The respone result

---
### `public const int `[`error`](#class_q_cef_query_1ab35201ac89d89f1445538f82a12f8fa8)`() const` {#class_q_cef_query_1ab35201ac89d89f1445538f82a12f8fa8}

Gets the response error.

#### Returns
The response error

---
### `public void `[`setResponseResult`](#class_q_cef_query_1aa86db4e257e3dc4e29c7906d80e06f28)`(bool success, const QString & response, int error) const` {#class_q_cef_query_1aa86db4e257e3dc4e29c7906d80e06f28}

Sets the response.

#### Parameters
* `success` True if the query is successful; otherwise false

* `response` The response content string

* `error` The response error

---
### `private QScopedPointer< QCefQueryPrivate > `[`d_ptr`](#class_q_cef_query_1a3e84c15339bbf841b91a541222aed4e6) {#class_q_cef_query_1a3e84c15339bbf841b91a541222aed4e6}

