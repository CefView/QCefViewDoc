---
title: QCefEvent
---

# class `QCefEvent` <a id="class_q_cef_event" class="anchor"></a>

Represents the event sent from native context(C/C++ code) to the web context(javascript)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`QCefEvent`](#class_q_cef_event_1ab444dcc856db38dcc679db326ef22bf5)`()` | Constructs an event instance
`public  `[`QCefEvent`](#class_q_cef_event_1a2b2b8bacbfebefe302cd1fab91cd5e8c)`(const QString & name)` | Constructs an event instance with name
`public  `[`QCefEvent`](#class_q_cef_event_1a357d5cb242977682523e69d501c673d4)`(const `[`QCefEvent`](#class_q_cef_event)` & other)` | Constructs an event instance from existing one
`public `[`QCefEvent`](#class_q_cef_event)` & `[`operator=`](#class_q_cef_event_1a95e2f8c582270de0f9501945a6e063ee)`(const `[`QCefEvent`](#class_q_cef_event)` & other)` | Assigns an existing event instance to current
`public  `[`~QCefEvent`](#class_q_cef_event_1a5c0e38242fa1ba823f1664232966787c)`()` | Destructs the event instance
`public void `[`setEventName`](#class_q_cef_event_1a5db1273fdda416900f5b7b26a119c85a)`(const QString & name)` | Sets the event name
`public const QString `[`eventName`](#class_q_cef_event_1a5a970c76a348788b15a040c8c405a103)`() const` | Gets the event name
`public void `[`setArguments`](#class_q_cef_event_1ac84ba1292bcf56abdc5c6c4245aa6c04)`(const QVariantList & args)` | Sets the argument list
`public QVariantList & `[`arguments`](#class_q_cef_event_1a4cf70fa60235d723b9e578cded919327)`()` | Gets the argument list
 | 

## Members

---
### `public  `[`QCefEvent`](#class_q_cef_event_1ab444dcc856db38dcc679db326ef22bf5)`()` <a id="class_q_cef_event_1ab444dcc856db38dcc679db326ef22bf5" class="anchor"></a>

Constructs an event instance

---
### `public  `[`QCefEvent`](#class_q_cef_event_1a2b2b8bacbfebefe302cd1fab91cd5e8c)`(const QString & name)` <a id="class_q_cef_event_1a2b2b8bacbfebefe302cd1fab91cd5e8c" class="anchor"></a>

Constructs an event instance with name

#### Parameters
* `name` The event name

---
### `public  `[`QCefEvent`](#class_q_cef_event_1a357d5cb242977682523e69d501c673d4)`(const `[`QCefEvent`](#class_q_cef_event)` & other)` <a id="class_q_cef_event_1a357d5cb242977682523e69d501c673d4" class="anchor"></a>

Constructs an event instance from existing one

#### Parameters
* `other` The other event instance

---
### `public `[`QCefEvent`](#class_q_cef_event)` & `[`operator=`](#class_q_cef_event_1a95e2f8c582270de0f9501945a6e063ee)`(const `[`QCefEvent`](#class_q_cef_event)` & other)` <a id="class_q_cef_event_1a95e2f8c582270de0f9501945a6e063ee" class="anchor"></a>

Assigns an existing event instance to current

#### Parameters
* `other` The other event instance

---
### `public  `[`~QCefEvent`](#class_q_cef_event_1a5c0e38242fa1ba823f1664232966787c)`()` <a id="class_q_cef_event_1a5c0e38242fa1ba823f1664232966787c" class="anchor"></a>

Destructs the event instance

---
### `public void `[`setEventName`](#class_q_cef_event_1a5db1273fdda416900f5b7b26a119c85a)`(const QString & name)` <a id="class_q_cef_event_1a5db1273fdda416900f5b7b26a119c85a" class="anchor"></a>

Sets the event name

#### Parameters
* `name` The name to be set

---
### `public const QString `[`eventName`](#class_q_cef_event_1a5a970c76a348788b15a040c8c405a103)`() const` <a id="class_q_cef_event_1a5a970c76a348788b15a040c8c405a103" class="anchor"></a>

Gets the event name

#### Returns
The event name

---
### `public void `[`setArguments`](#class_q_cef_event_1ac84ba1292bcf56abdc5c6c4245aa6c04)`(const QVariantList & args)` <a id="class_q_cef_event_1ac84ba1292bcf56abdc5c6c4245aa6c04" class="anchor"></a>

Sets the argument list

#### Parameters
* `args` The argument list

---
### `public QVariantList & `[`arguments`](#class_q_cef_event_1a4cf70fa60235d723b9e578cded919327)`()` <a id="class_q_cef_event_1a4cf70fa60235d723b9e578cded919327" class="anchor"></a>

Gets the argument list

#### Returns
The argument list

---
###  <a id="class_q_cef_event_1aa4e043ac8c5d7c5d75ca878ca75ab017" class="anchor"></a>

