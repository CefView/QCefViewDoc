---
title: QCefQuery
---

# class `QCefQuery` {#class_q_cef_query}

Represents the query request sent from the web content(Javascript)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`QCefQuery`](#class_q_cef_query_1a22d9fddcadce7a6e0259c691634c4d7a)`()`                  | Constructs a query instance.
`public  `[`~QCefQuery`](#class_q_cef_query_1a402d117cbd2d37681394f86d31ed11a3)`()`                  | Destructs a query instance.
`public const QString `[`request`](#class_q_cef_query_1a16d137bcc1bf2ef9bc8969ff1bd091e7)`() const`                  | Gets the query content.
`public const qint64 `[`id`](#class_q_cef_query_1a5b701d7f9c92ff814cfe28b110142a4c)`() const`                  | Gets the query id.
`public const QString `[`response`](#class_q_cef_query_1a663d5945146bebe69a0a3c5448bb9280)`() const`                  | Gets the response content string.
`public const bool `[`result`](#class_q_cef_query_1a8c2d78e19628d8066570338d659bc9b2)`() const`                  | Gets the response result.
`public const int `[`error`](#class_q_cef_query_1ab35201ac89d89f1445538f82a12f8fa8)`() const`                  | Gets the response error.
`public void `[`setResponseResult`](#class_q_cef_query_1aa86db4e257e3dc4e29c7906d80e06f28)`(bool success, const QString & response, int error) const`                  | Sets the response.
`public void `[`reply`](#class_q_cef_query_1a9b7df2f2ffaf42431392fcb0a89042be)`(bool success, const QString & response, int error) const`                  | Replies the query.
`protected  `[`QCefQuery`](#class_q_cef_query_1a2d63bf6b4584e80edbfe4e00fdc8790e)`(`[`QCefViewPrivate`](#class_q_cef_query_1a96f89510561545834ce356603ebee9be)` * source, const QString & req, const int64_t query)`                  | Constructs a query instance with request context and query id.
`protected void `[`markAsReplied`](#class_q_cef_query_1af1e8c950b361ad9ca4d4e260626c5d14)`() const`                  | Marks the query as replied (for internal use only)
`private QSharedPointer< QCefQueryPrivate > `[`d_ptr`](#class_q_cef_query_1a02d90690479905566ff8d5c484f7658c)                  | 

## Members

---
### `public  `[`QCefQuery`](#class_q_cef_query_1a22d9fddcadce7a6e0259c691634c4d7a)`()` {#class_q_cef_query_1a22d9fddcadce7a6e0259c691634c4d7a}

Constructs a query instance.

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
### `public void `[`reply`](#class_q_cef_query_1a9b7df2f2ffaf42431392fcb0a89042be)`(bool success, const QString & response, int error) const` {#class_q_cef_query_1a9b7df2f2ffaf42431392fcb0a89042be}

Replies the query.

#### Parameters
* `success` The result

* `response` The response data

* `error` The error code

---
### `protected  `[`QCefQuery`](#class_q_cef_query_1a2d63bf6b4584e80edbfe4e00fdc8790e)`(`[`QCefViewPrivate`](#class_q_cef_query_1a96f89510561545834ce356603ebee9be)` * source, const QString & req, const int64_t query)` {#class_q_cef_query_1a2d63bf6b4584e80edbfe4e00fdc8790e}

Constructs a query instance with request context and query id.

#### Parameters
* `source` The source CefView

* `req` The request context

* `query` The query id

---
### `protected void `[`markAsReplied`](#class_q_cef_query_1af1e8c950b361ad9ca4d4e260626c5d14)`() const` {#class_q_cef_query_1af1e8c950b361ad9ca4d4e260626c5d14}

Marks the query as replied (for internal use only)

---
### `private QSharedPointer< QCefQueryPrivate > `[`d_ptr`](#class_q_cef_query_1a02d90690479905566ff8d5c484f7658c) {#class_q_cef_query_1a02d90690479905566ff8d5c484f7658c}

