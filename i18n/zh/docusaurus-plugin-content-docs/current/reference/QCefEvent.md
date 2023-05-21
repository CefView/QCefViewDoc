---
title: QCefEvent
---

# class `QCefEvent` {#class_q_cef_event}

表示从本机上下文（C/C++ 代码）发送到 Web 上下文（javascript）的事件

## 总结

 成员                                                         | 描述                   
 ------------------------------------------------------------ | ---------------------- 
 `public  `[`QCefEvent`](#class_q_cef_event_1ab444dcc856db38dcc679db326ef22bf5)`()` | QCefEvent 构造函数     
 `public  `[`QCefEvent`](#class_q_cef_event_1a2b2b8bacbfebefe302cd1fab91cd5e8c)`(const QString & name)` | QCefEvent 有参构造函数 
 `public  `[`QCefEvent`](#class_q_cef_event_1a357d5cb242977682523e69d501c673d4)`(const `[`QCefEvent`](#class_q_cef_event)` & other)` | QCefEvent 拷贝构造函数 
 `public `[`QCefEvent`](#class_q_cef_event)` & `[`operator=`](#class_q_cef_event_1a95e2f8c582270de0f9501945a6e063ee)`(const `[`QCefEvent`](#class_q_cef_event)` & other)` | QCefEvent 拷贝赋值函数 
 `public  `[`~QCefEvent`](#class_q_cef_event_1a5c0e38242fa1ba823f1664232966787c)`()` | QCefEvent 析构函数     
 `public void `[`setEventName`](#class_q_cef_event_1a5db1273fdda416900f5b7b26a119c85a)`(const QString & name)` | 设置事件名称           
 `public const QString `[`eventName`](#class_q_cef_event_1a5a970c76a348788b15a040c8c405a103)`() const` | 获取事件名称           
 `public void `[`setArguments`](#class_q_cef_event_1ac84ba1292bcf56abdc5c6c4245aa6c04)`(const QVariantList & args)` | 设置参数列表           
 `public QVariantList & `[`arguments`](#class_q_cef_event_1a4cf70fa60235d723b9e578cded919327)`()` | 获取参数列表           
 `private QScopedPointer< QCefEventPrivate > `[`d_ptr`](#class_q_cef_event_1aa4e043ac8c5d7c5d75ca878ca75ab017) |

## Members

---
### `public  `[`QCefEvent`](#class_q_cef_event_1ab444dcc856db38dcc679db326ef22bf5)`()` {#class_q_cef_event_1ab444dcc856db38dcc679db326ef22bf5}

QCefEvent 构造函数

---
### `public  `[`QCefEvent`](#class_q_cef_event_1a2b2b8bacbfebefe302cd1fab91cd5e8c)`(const QString & name)` {#class_q_cef_event_1a2b2b8bacbfebefe302cd1fab91cd5e8c}

QCefEvent 有参构造函数

#### 参数
* `name` 事件名称

---
### `public  `[`QCefEvent`](#class_q_cef_event_1a357d5cb242977682523e69d501c673d4)`(const `[`QCefEvent`](#class_q_cef_event)` & other)` {#class_q_cef_event_1a357d5cb242977682523e69d501c673d4}

QCefEvent 拷贝构造函数

#### 参数
* `other` 另一个 QCefEvent 实例

---
### `public `[`QCefEvent`](#class_q_cef_event)` & `[`operator=`](#class_q_cef_event_1a95e2f8c582270de0f9501945a6e063ee)`(const `[`QCefEvent`](#class_q_cef_event)` & other)` {#class_q_cef_event_1a95e2f8c582270de0f9501945a6e063ee}

QCefEvent 拷贝赋值函数

#### 参数
* `other` 另一个 QCefEvent 实例

---
### `public  `[`~QCefEvent`](#class_q_cef_event_1a5c0e38242fa1ba823f1664232966787c)`()` {#class_q_cef_event_1a5c0e38242fa1ba823f1664232966787c}

QCefEvent 析构函数

---
### `public void `[`setEventName`](#class_q_cef_event_1a5db1273fdda416900f5b7b26a119c85a)`(const QString & name)` {#class_q_cef_event_1a5db1273fdda416900f5b7b26a119c85a}

设置事件名称

#### 参数
* `name` 要设置的名称

---
### `public const QString `[`eventName`](#class_q_cef_event_1a5a970c76a348788b15a040c8c405a103)`() const` {#class_q_cef_event_1a5a970c76a348788b15a040c8c405a103}

获取事件名称

#### 返回值
事件名称

---
### `public void `[`setArguments`](#class_q_cef_event_1ac84ba1292bcf56abdc5c6c4245aa6c04)`(const QVariantList & args)` {#class_q_cef_event_1ac84ba1292bcf56abdc5c6c4245aa6c04}

设置参数列表

#### 参数
* `args` 参数列表

---
### `public QVariantList & `[`arguments`](#class_q_cef_event_1a4cf70fa60235d723b9e578cded919327)`()` {#class_q_cef_event_1a4cf70fa60235d723b9e578cded919327}

获取参数列表

#### 返回值
参数列表

---
### `private QScopedPointer< QCefEventPrivate > `[`d_ptr`](#class_q_cef_event_1aa4e043ac8c5d7c5d75ca878ca75ab017) {#class_q_cef_event_1aa4e043ac8c5d7c5d75ca878ca75ab017}

