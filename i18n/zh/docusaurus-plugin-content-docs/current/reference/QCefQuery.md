---
title: QCefQuery
---

# class `QCefQuery` {#class_q_cef_query}

表示从 Web 内容（Javascript）发送的查询请求

## 总结

 成员                                                         | 描述                   
 ------------------------------------------------------------ | ---------------------- 
 `public  `[`QCefQuery`](#class_q_cef_query_1a22d9fddcadce7a6e0259c691634c4d7a)`()` | QCefQuery 构造函数     
 `public  `[`QCefQuery`](#class_q_cef_query_1a4371b3245657bf41312aead3a88cbe33)`(const QString & req, const int64_t query)` | QCefQuery 有参构造函数 
 `public  `[`QCefQuery`](#class_q_cef_query_1a15297bbfd653f64aa48cec2347562b9e)`(const `[`QCefQuery`](#class_q_cef_query)` & other)` | QCefQuery 拷贝构造函数 
 `public `[`QCefQuery`](#class_q_cef_query)` & `[`operator=`](#class_q_cef_query_1adb304235ed62a9cac92338a415bfb058)`(const `[`QCefQuery`](#class_q_cef_query)` & other)` | QCefQuery 拷贝赋值函数 
 `public  `[`~QCefQuery`](#class_q_cef_query_1a402d117cbd2d37681394f86d31ed11a3)`()` | QCefQuery 析构函数     
 `public const QString `[`request`](#class_q_cef_query_1a16d137bcc1bf2ef9bc8969ff1bd091e7)`() const` | 获取查询内容           
 `public const qint64 `[`id`](#class_q_cef_query_1a5b701d7f9c92ff814cfe28b110142a4c)`() const` | 获取查询 ID            
 `public const QString `[`response`](#class_q_cef_query_1a663d5945146bebe69a0a3c5448bb9280)`() const` | 获取响应内容字符串     
 `public const bool `[`result`](#class_q_cef_query_1a8c2d78e19628d8066570338d659bc9b2)`() const` | 获取响应结果           
 `public const int `[`error`](#class_q_cef_query_1ab35201ac89d89f1445538f82a12f8fa8)`() const` | 获取响应错误           
 `public void `[`setResponseResult`](#class_q_cef_query_1aa86db4e257e3dc4e29c7906d80e06f28)`(bool success, const QString & response, int error) const | 设置响应                       
 `private QScopedPointer< QCefQueryPrivate > `[`d_ptr`](#class_q_cef_query_1a3e84c15339bbf841b91a541222aed4e6) |                        

## Members

---
### `public  `[`QCefQuery`](#class_q_cef_query_1a22d9fddcadce7a6e0259c691634c4d7a)`()` {#class_q_cef_query_1a22d9fddcadce7a6e0259c691634c4d7a}

QCefQuery 构造函数

---
### `public  `[`QCefQuery`](#class_q_cef_query_1a4371b3245657bf41312aead3a88cbe33)`(const QString & req, const int64_t query)` {#class_q_cef_query_1a4371b3245657bf41312aead3a88cbe33}

QCefQuery 有参构造函数

#### 参数
* `req` 请求上下文

* `query` 查询 ID

---
### `public  `[`QCefQuery`](#class_q_cef_query_1a15297bbfd653f64aa48cec2347562b9e)`(const `[`QCefQuery`](#class_q_cef_query)` & other)` {#class_q_cef_query_1a15297bbfd653f64aa48cec2347562b9e}

QCefQuery 拷贝构造函数

#### 参数
* `other` 另一个 QCefQuery 实例

---
### `public `[`QCefQuery`](#class_q_cef_query)` & `[`operator=`](#class_q_cef_query_1adb304235ed62a9cac92338a415bfb058)`(const `[`QCefQuery`](#class_q_cef_query)` & other)` {#class_q_cef_query_1adb304235ed62a9cac92338a415bfb058}

QCefQuery 拷贝赋值函数

#### 参数
* `other` 另一个 QCefQuery 实例

---
### `public  `[`~QCefQuery`](#class_q_cef_query_1a402d117cbd2d37681394f86d31ed11a3)`()` {#class_q_cef_query_1a402d117cbd2d37681394f86d31ed11a3}

QCefQuery 析构函数

---
### `public const QString `[`request`](#class_q_cef_query_1a16d137bcc1bf2ef9bc8969ff1bd091e7)`() const` {#class_q_cef_query_1a16d137bcc1bf2ef9bc8969ff1bd091e7}

获取查询内容

#### 返回值
查询内容

---
### `public const qint64 `[`id`](#class_q_cef_query_1a5b701d7f9c92ff814cfe28b110142a4c)`() const` {#class_q_cef_query_1a5b701d7f9c92ff814cfe28b110142a4c}

获取查询 ID

#### 返回值
查询 ID

---
### `public const QString `[`response`](#class_q_cef_query_1a663d5945146bebe69a0a3c5448bb9280)`() const` {#class_q_cef_query_1a663d5945146bebe69a0a3c5448bb9280}

获取响应内容字符串

#### 返回值
响应内容字符串

---
### `public const bool `[`result`](#class_q_cef_query_1a8c2d78e19628d8066570338d659bc9b2)`() const` {#class_q_cef_query_1a8c2d78e19628d8066570338d659bc9b2}

获取响应结果

#### 返回值
响应结果

---
### `public const int `[`error`](#class_q_cef_query_1ab35201ac89d89f1445538f82a12f8fa8)`() const` {#class_q_cef_query_1ab35201ac89d89f1445538f82a12f8fa8}

获取响应错误

#### 返回值
响应错误

---
### `public void `[`setResponseResult`](#class_q_cef_query_1aa86db4e257e3dc4e29c7906d80e06f28)`(bool success, const QString & response, int error) const` {#class_q_cef_query_1aa86db4e257e3dc4e29c7906d80e06f28}

设置响应

#### 参数
* `success` 如果查询成功，为 true；否则为 false

* `response` 响应内容字符串

* `error` 响应错误

---
### `private QScopedPointer< QCefQueryPrivate > `[`d_ptr`](#class_q_cef_query_1a3e84c15339bbf841b91a541222aed4e6) {#class_q_cef_query_1a3e84c15339bbf841b91a541222aed4e6}

