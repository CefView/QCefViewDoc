---
title: Web APIs
---

# Web APIs

## object `window.CefViewClient`
QCefView 为所有浏览器框架添加了`CefViewClient` 到 `window` 的 Javascript 桥接对象，使用这个桥接对象，你可以在任何时候执行本机和 Web 上下文之间的通信

### 总结
 成员                                                         | 描述                              
 ------------------------------------------------------------ | --------------------------------- 
 [`addEventListener`](#web_apis_addEventListener)`(name, listener)` | 为具有指定名称的事件添加 listener 
 [`removeEventListener`](#web_apis_removeEventListener)`(name, listener)` | 删除具有指定名称的事件的 listener 
 [`invokeMethod`](#web_apis_invokeMethod)`(name, ...args)`    | 调用具有指定名称和参数的本机方法  

### Members

---
#### [`addEventListener`](#web_apis_addEventListener)`(name, listener)` <a class="anchor" id="web_apis_addEventListener"></a>

为具有指定名称的事件添加 listener

##### 参数
* `name` 事件名称
* `listener` listener 回调函数

---
#### [`removeEventListener`](#web_apis_removeEventListener)`(name, listener)` <a class="anchor" id="web_apis_removeEventListener"></a>

删除具有指定名称的事件的 listener

##### 参数
* `name` 事件名称
* `listener` listener 回调函数

---
#### [`invokeMethod`](#web_apis_invokeMethod)`(name, ...args)` <a class="anchor" id="web_apis_invokeMethod"></a>

调用具有指定名称和参数的本机方法

##### 参数
* `name` 方法名称
* `..args` 方法的参数


## object `window`
QCefView 为所有浏览器框架的对象添加了一些额外的方法，使用这些方法，您可以在本机上下文和 Web 上下文之间执行通信`window`

### 总结

 成员                                                         | 描述                            
 ------------------------------------------------------------ | ------------------------------- 
 [`window.CefViewQuery`](#web_apis_CefViewQuery)`(query)`     | 将 cef 查询请求发送到本机上下文 
 [`window.CefViewQueryCancel`](#web_apis_CefViewQueryCancel)`(id)` | 取消具有指定 id 的查询请求      

### Members

---
#### [`window.CefViewQuery`](#web_apis_CefViewQuery)`(query)` <a class="anchor" id="web_apis_CefViewQuery"></a>

将 cef 查询请求发送到本机上下文

##### 参数
* `query` 查询对象

##### 返回值
* 查询 ID

---
#### [`window.CefViewQueryCancel`](#web_apis_CefViewQueryCancel)`(id)` <a class="anchor" id="web_apis_CefViewQueryCancel"></a>

取消具有指定 id 的查询请求

##### 参数
* `id` 查询 ID
