---
title: Web APIs
---

# object `window.CefView`
QCefView added the Javascript bridge object `CefView` to `window` object for all browsers frames, with this bridge object you can perform communication between native and web context at anytime

## Summary
 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
[`addEventListener`](#web_apis_addEventListener)`(name, listener)` | Adds a listener for the event with specified name
[`removeEventListener`](#web_apis_removeEventListener)`(name, listener)` | Removes the listener for the event with specified name
[`invokeMethod`](#web_apis_invokeMethod)`(name, ...args)` | Invokes a native method with the specified name and arguments

## Members

---
### [`addEventListener`](#web_apis_addEventListener)`(name, listener)` <a class="anchor" id="web_apis_addEventListener"></a>

Adds a listener for the event with specified name

#### Parameters
* `name` The event name
* `listener` The listener callback function

---
### [`removeEventListener`](#web_apis_removeEventListener)`(name, listener)` <a class="anchor" id="web_apis_removeEventListener"></a>

Removes the listener for the event with specified name

#### Parameters
* `name` The event name
* `listener` The listener callback function

---
### [`invokeMethod`](#web_apis_invokeMethod)`(name, ...args)` <a class="anchor" id="web_apis_invokeMethod"></a>

Invokes a native method with the specified name and arguments

#### Parameters
* `name` The method name
* `..args` The arguments for the method


# object `window`
QCefView added some extra methods to the `window` object for all browsers frames, with these methods you can perform communication between native and web context

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
[`window.CefViewQuery`](#web_apis_CefViewQuery)`(query)` | Sends a cef query request to the native context
[`window.CefViewQueryCancel`](#web_apis_CefViewQueryCancel)`(id)` | Cancels the query request with the specified id

## Members

---
### [`window.CefViewQuery`](#web_apis_CefViewQuery)`(query)` <a class="anchor" id="web_apis_CefViewQuery"></a>

Sends a cef query request to the native context

#### Parameters
* `query` The query object

#### Returns
* The query id

---
### [`window.CefViewQueryCancel`](#web_apis_CefViewQueryCancel)`(id)` <a class="anchor" id="web_apis_CefViewQueryCancel"></a>

Cancels the query request with the specified id

#### Parameters
* `id` The query id