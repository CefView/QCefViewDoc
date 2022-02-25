---
title: QCefView
---

# class `QCefView` <a class="anchor" id="class_q_cef_view"></a>

```
class QCefView
  : public QWidget
```

Represents the CEF browser view

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`QCefView`](#class_q_cef_view_1aa0bf82c50f50f89aeee7afa3350110b1)`(const QString url,const `[`QCefSetting`](QCefSetting.md#class_q_cef_setting)` * setting,QWidget * parent)` | Constructs a [QCefView](#class_q_cef_view) instance
`public  `[`QCefView`](#class_q_cef_view_1a1b95ed3b73d10ee1580eea191d085c68)`(QWidget * parent)` | Constructs a [QCefView](#class_q_cef_view) instance
`public  `[`~QCefView`](#class_q_cef_view_1a70903dca8ccd3e2776d68742531177fd)`()` | Destructs the [QCefView](#class_q_cef_view) instance
`public int `[`browserId`](#class_q_cef_view_1ae4aa1652bf9852ed744dd38487bbb748)`()` | Gets the browser id
`public void `[`navigateToString`](#class_q_cef_view_1ac3b8ec3b088422a67f93fc580047a1a0)`(const QString & content)` | Navigates to the content.
`public void `[`navigateToUrl`](#class_q_cef_view_1a4bf036d5a7d128d4c1487afaa0393d5b)`(const QString & url)` | Navigates to the URL
`public bool `[`browserCanGoBack`](#class_q_cef_view_1a01100f7ab97f9f643e4f23af5cea9900)`()` | Checks whether the browser can go back
`public bool `[`browserCanGoForward`](#class_q_cef_view_1ae1d6a6d94e02a54654463e5b0c491624)`()` | Checks whether the browser can go forward
`public void `[`browserGoBack`](#class_q_cef_view_1aa82e1ceaa7f543f8d99d7d9cbf714382)`()` | Requires the browser to go back
`public void `[`browserGoForward`](#class_q_cef_view_1a9ce96fbf25701594b8d65381661141db)`()` | Requires the browser to go forward
`public bool `[`browserIsLoading`](#class_q_cef_view_1a12ca0bc0f4fc55dfc838769990d6a6d7)`()` | Checks whether the browser is loading
`public void `[`browserReload`](#class_q_cef_view_1a45bc8cd7340ce410cf873d7296ffacf6)`()` | Requires the browser to reload
`public void `[`browserStopLoad`](#class_q_cef_view_1afadd210f3c5cd95598b18aa158a9c16f)`()` | Requires the browser to stop load
`public bool `[`triggerEvent`](#class_q_cef_view_1ac47c23ffcd94bdffe2b6a81eaae077a2)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event)` | Triggers the event for main frame
`public bool `[`triggerEvent`](#class_q_cef_view_1aaccdc475dc89f9ca4885c94e8f50421d)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event,int frameId)` | Triggers the event for specified frame
`public bool `[`broadcastEvent`](#class_q_cef_view_1ad5455e3a8cb0ffa1f9d7cb98307a6bb4)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event)` | Broad cast the event for all frames
`public bool `[`responseQCefQuery`](#class_q_cef_view_1afc838dab54d2b083b05f0d98349b50cc)`(const `[`QCefQuery`](QCefQuery.md#class_q_cef_query)` & query)` | Response the [QCefQuery](QCefQuery.md#class_q_cef_query) request
`public bool `[`executeJavascript`](#class_q_cef_view_fcd94eb6960911ecb909-0242ac120002)`(int frameId,const QString& code,const QString& url,int startLine = 0)` | Executes javascript code in specified frame
`{signal} public void `[`loadingStateChanged`](#class_q_cef_view_1a3a7a88f6705481605cef678c111a6cf5)`(bool isLoading,bool canGoBack,bool canGoForward)` | Gets called on loading state changed
`{signal} public void `[`loadStart`](#class_q_cef_view_1a74964d85e3318a693e9d93a24176fb7c)`()` | Gets called on loading starts
`{signal} public void `[`loadEnd`](#class_q_cef_view_1ab09aca25ea627999b77c951c804c9a68)`(int httpStatusCode)` | Gets called on loading ends
`{signal} public void `[`loadError`](#class_q_cef_view_1a500199d0690238f89a71831cb7360459)`(int errorCode,const QString & errorMsg,const QString & failedUrl,bool & handled)` | Gets called on loading failed due to error
`{signal} public void `[`draggableRegionChanged`](#class_q_cef_view_1ae11274817f627abf9d407e12dcd5c050)`(const QRegion & draggableRegion,const QRegion & nonDraggableRegion)` | Gets called on draggable region changed
`{signal} public void `[`addressChanged`](#class_q_cef_view_1a39638bfc0eefac8e8fbeaa4d1047d7ee)`(int frameId,const QString & url)` | Gets called on the address changed
`{signal} public void `[`titleChanged`](#class_q_cef_view_1a48c82c208cab769a1baa7177bc58b030)`(const QString & title)` | Gets called on title changed
`{signal} public void `[`fullscreenModeChanged`](#class_q_cef_view_1afa0fbb5b4c2c6c3592085e9b94dffc4a)`(bool fullscreen)` | Gets called on fullscreen mode changed
`{signal} public void `[`statusMessage`](#class_q_cef_view_1a86d10c28b8821a36723e3504fa0cc7e7)`(const QString & message)` | Gets called on status message changed
`{signal} public void `[`consoleMessage`](#class_q_cef_view_1a2dae6946082712815273c2967d37762a)`(const QString & message,int level)` | Gets called on console message from the web content
`{signal} public void `[`loadingProgressChanged`](#class_q_cef_view_1ac7377eeed6811bafca1e6887b64d62a5)`(double progress)` | Gets called on loading progress changed
`{signal} public void `[`cefQueryRequest`](#class_q_cef_view_1acbf62eea36993163c4b70b4df96738d8)`(int browserId,int frameId,const `[`QCefQuery`](QCefQuery.md#class_q_cef_query)` & query)` | Gets called on new [QCefQuery](QCefQuery.md#class_q_cef_query) request
`{signal} public void `[`invokeMethod`](#class_q_cef_view_1aa407f7491139a2d5331566c8346a58c8)`(int browserId,int frameId,const QString & method,const QVariantList & arguments)` | Gets called on invoke method request from web content(Javascript)
`private QScopedPointer< QCefViewPrivate > `[`d_ptr`](#class_q_cef_view_1a6882524bec20e1620311b3853750638f) | 

## Members

---
### `public  `[`QCefView`](#class_q_cef_view_1aa0bf82c50f50f89aeee7afa3350110b1)`(const QString url,const `[`QCefSetting`](QCefSetting.md#class_q_cef_setting)` * setting,QWidget * parent)` <a class="anchor" id="class_q_cef_view_1aa0bf82c50f50f89aeee7afa3350110b1"></a>

Constructs a [QCefView](#class_q_cef_view) instance

#### Parameters
* `url` The target url

* `setting` The [QCefSetting](QCefSetting.md#class_q_cef_setting) instance

* `parent` The parent

---
### `public  `[`QCefView`](#class_q_cef_view_1a1b95ed3b73d10ee1580eea191d085c68)`(QWidget * parent)` <a class="anchor" id="class_q_cef_view_1a1b95ed3b73d10ee1580eea191d085c68"></a>

Constructs a [QCefView](#class_q_cef_view) instance

#### Parameters
* `parent` The parent

---
### `public  `[`~QCefView`](#class_q_cef_view_1a70903dca8ccd3e2776d68742531177fd)`()` <a class="anchor" id="class_q_cef_view_1a70903dca8ccd3e2776d68742531177fd"></a>

Destructs the [QCefView](#class_q_cef_view) instance

---
### `public int `[`browserId`](#class_q_cef_view_1ae4aa1652bf9852ed744dd38487bbb748)`()` <a class="anchor" id="class_q_cef_view_1ae4aa1652bf9852ed744dd38487bbb748"></a>

Gets the browser id

#### Returns
The browser id

---
### `public void `[`navigateToString`](#class_q_cef_view_1ac3b8ec3b088422a67f93fc580047a1a0)`(const QString & content)` <a class="anchor" id="class_q_cef_view_1ac3b8ec3b088422a67f93fc580047a1a0"></a>

Navigates to the content.

#### Parameters
* `content` The content

---
### `public void `[`navigateToUrl`](#class_q_cef_view_1a4bf036d5a7d128d4c1487afaa0393d5b)`(const QString & url)` <a class="anchor" id="class_q_cef_view_1a4bf036d5a7d128d4c1487afaa0393d5b"></a>

Navigates to the URL

#### Parameters
* `url` The url

---
### `public bool `[`browserCanGoBack`](#class_q_cef_view_1a01100f7ab97f9f643e4f23af5cea9900)`()` <a class="anchor" id="class_q_cef_view_1a01100f7ab97f9f643e4f23af5cea9900"></a>

Checks whether the browser can go back

#### Returns
True if can; otherwise false

---
### `public bool `[`browserCanGoForward`](#class_q_cef_view_1ae1d6a6d94e02a54654463e5b0c491624)`()` <a class="anchor" id="class_q_cef_view_1ae1d6a6d94e02a54654463e5b0c491624"></a>

Checks whether the browser can go forward

#### Returns
True if can; otherwise false

---
### `public void `[`browserGoBack`](#class_q_cef_view_1aa82e1ceaa7f543f8d99d7d9cbf714382)`()` <a class="anchor" id="class_q_cef_view_1aa82e1ceaa7f543f8d99d7d9cbf714382"></a>

Requires the browser to go back

---
### `public void `[`browserGoForward`](#class_q_cef_view_1a9ce96fbf25701594b8d65381661141db)`()` <a class="anchor" id="class_q_cef_view_1a9ce96fbf25701594b8d65381661141db"></a>

Requires the browser to go forward

---
### `public bool `[`browserIsLoading`](#class_q_cef_view_1a12ca0bc0f4fc55dfc838769990d6a6d7)`()` <a class="anchor" id="class_q_cef_view_1a12ca0bc0f4fc55dfc838769990d6a6d7"></a>

Checks whether the browser is loading

#### Returns
True if it is loading; otherwise false

---
### `public void `[`browserReload`](#class_q_cef_view_1a45bc8cd7340ce410cf873d7296ffacf6)`()` <a class="anchor" id="class_q_cef_view_1a45bc8cd7340ce410cf873d7296ffacf6"></a>

Requires the browser to reload

---
### `public void `[`browserStopLoad`](#class_q_cef_view_1afadd210f3c5cd95598b18aa158a9c16f)`()` <a class="anchor" id="class_q_cef_view_1afadd210f3c5cd95598b18aa158a9c16f"></a>

Requires the browser to stop load

---
### `public bool `[`triggerEvent`](#class_q_cef_view_1ac47c23ffcd94bdffe2b6a81eaae077a2)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event)` <a class="anchor" id="class_q_cef_view_1ac47c23ffcd94bdffe2b6a81eaae077a2"></a>

Triggers the event for main frame

#### Parameters
* `event` The [QCefEvent](QCefEvent.md#class_q_cef_event) instance

#### Returns
True on successful; otherwise false

---
### `public bool `[`triggerEvent`](#class_q_cef_view_1aaccdc475dc89f9ca4885c94e8f50421d)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event,int frameId)` <a class="anchor" id="class_q_cef_view_1aaccdc475dc89f9ca4885c94e8f50421d"></a>

Triggers the event for specified frame

#### Parameters
* `event` The [QCefEvent](QCefEvent.md#class_q_cef_event) instance

* `frameId` The frame id

#### Returns
True on successful; otherwise false

---
### `public bool `[`broadcastEvent`](#class_q_cef_view_1ad5455e3a8cb0ffa1f9d7cb98307a6bb4)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event)` <a class="anchor" id="class_q_cef_view_1ad5455e3a8cb0ffa1f9d7cb98307a6bb4"></a>

Broad cast the event for all frames

#### Parameters
* `event` The [QCefEvent](QCefEvent.md#class_q_cef_event) instance

#### Returns
True on successful; otherwise false

---
### `public bool `[`responseQCefQuery`](#class_q_cef_view_1afc838dab54d2b083b05f0d98349b50cc)`(const `[`QCefQuery`](QCefQuery.md#class_q_cef_query)` & query)` <a class="anchor" id="class_q_cef_view_1afc838dab54d2b083b05f0d98349b50cc"></a>

Response the [QCefQuery](QCefQuery.md#class_q_cef_query) request

#### Parameters
* `query` The query instance

#### Returns
True on successful; otherwise false

---
### `public bool `[`executeJavascript`](#class_q_cef_view_fcd94eb6960911ecb909-0242ac120002)`(int frameId,const QString& code,const QString& url,int startLine = 0)` <a class="anchor" id="class_q_cef_view_fcd94eb6960911ecb909-0242ac120002"></a>

Executes javascript code in specified frame

#### Parameters
* `frameId` The frame id

* `code` The javascript code

* `url` The URL where the script in question can be found, if any. The renderer may request this URL to show the developer the source of the error

* `startLine` The base line number to use for error reporting

#### Returns
True on successful; otherwise false

---
### `{signal} public void `[`loadingStateChanged`](#class_q_cef_view_1a3a7a88f6705481605cef678c111a6cf5)`(bool isLoading,bool canGoBack,bool canGoForward)` <a class="anchor" id="class_q_cef_view_1a3a7a88f6705481605cef678c111a6cf5"></a>

Gets called on loading state changed

#### Parameters
* `isLoading` Indicates the browser is loading

* `canGoBack` Indicates the browser can go back

* `canGoForward` Indicates the browser can go forward

---
### `{signal} public void `[`loadStart`](#class_q_cef_view_1a74964d85e3318a693e9d93a24176fb7c)`()` <a class="anchor" id="class_q_cef_view_1a74964d85e3318a693e9d93a24176fb7c"></a>

Gets called on loading starts

---
### `{signal} public void `[`loadEnd`](#class_q_cef_view_1ab09aca25ea627999b77c951c804c9a68)`(int httpStatusCode)` <a class="anchor" id="class_q_cef_view_1ab09aca25ea627999b77c951c804c9a68"></a>

Gets called on loading ends

#### Parameters
* `httpStatusCode`

---
### `{signal} public void `[`loadError`](#class_q_cef_view_1a500199d0690238f89a71831cb7360459)`(int errorCode,const QString & errorMsg,const QString & failedUrl,bool & handled)` <a class="anchor" id="class_q_cef_view_1a500199d0690238f89a71831cb7360459"></a>

Gets called on loading failed due to error

#### Parameters
* `errorCode` The error code

* `errorMsg` The error message

* `failedUrl` The url caused the failure

* `handled` Sets this parameter to indicates whether this error was handled or not

---
### `{signal} public void `[`draggableRegionChanged`](#class_q_cef_view_1ae11274817f627abf9d407e12dcd5c050)`(const QRegion & draggableRegion,const QRegion & nonDraggableRegion)` <a class="anchor" id="class_q_cef_view_1ae11274817f627abf9d407e12dcd5c050"></a>

Gets called on draggable region changed

#### Parameters
* `draggableRegion` The new draggable region

* `nonDraggableRegion` The new non-draggable region

---
### `{signal} public void `[`addressChanged`](#class_q_cef_view_1a39638bfc0eefac8e8fbeaa4d1047d7ee)`(int frameId,const QString & url)` <a class="anchor" id="class_q_cef_view_1a39638bfc0eefac8e8fbeaa4d1047d7ee"></a>

Gets called on the address changed

#### Parameters
* `frameId` The frame id

* `url` The address

---
### `{signal} public void `[`titleChanged`](#class_q_cef_view_1a48c82c208cab769a1baa7177bc58b030)`(const QString & title)` <a class="anchor" id="class_q_cef_view_1a48c82c208cab769a1baa7177bc58b030"></a>

Gets called on title changed

#### Parameters
* `title` The title

---
### `{signal} public void `[`fullscreenModeChanged`](#class_q_cef_view_1afa0fbb5b4c2c6c3592085e9b94dffc4a)`(bool fullscreen)` <a class="anchor" id="class_q_cef_view_1afa0fbb5b4c2c6c3592085e9b94dffc4a"></a>

Gets called on fullscreen mode changed

#### Parameters
* `fullscreen` The current fullscreen mode

---
### `{signal} public void `[`statusMessage`](#class_q_cef_view_1a86d10c28b8821a36723e3504fa0cc7e7)`(const QString & message)` <a class="anchor" id="class_q_cef_view_1a86d10c28b8821a36723e3504fa0cc7e7"></a>

Gets called on status message changed

#### Parameters
* `message` The status message

---
### `{signal} public void `[`consoleMessage`](#class_q_cef_view_1a2dae6946082712815273c2967d37762a)`(const QString & message,int level)` <a class="anchor" id="class_q_cef_view_1a2dae6946082712815273c2967d37762a"></a>

Gets called on console message from the web content

#### Parameters
* `message` The message

* `level` The level

---
### `{signal} public void `[`loadingProgressChanged`](#class_q_cef_view_1ac7377eeed6811bafca1e6887b64d62a5)`(double progress)` <a class="anchor" id="class_q_cef_view_1ac7377eeed6811bafca1e6887b64d62a5"></a>

Gets called on loading progress changed

#### Parameters
* `progress` Current progress

---
### `{signal} public void `[`cefQueryRequest`](#class_q_cef_view_1acbf62eea36993163c4b70b4df96738d8)`(int browserId,int frameId,const `[`QCefQuery`](QCefQuery.md#class_q_cef_query)` & query)` <a class="anchor" id="class_q_cef_view_1acbf62eea36993163c4b70b4df96738d8"></a>

Gets called on new [QCefQuery](QCefQuery.md#class_q_cef_query) request

#### Parameters
* `browserId` The browser id

* `frameId` The frame id

* `query` The query request

---
### `{signal} public void `[`invokeMethod`](#class_q_cef_view_1aa407f7491139a2d5331566c8346a58c8)`(int browserId,int frameId,const QString & method,const QVariantList & arguments)` <a class="anchor" id="class_q_cef_view_1aa407f7491139a2d5331566c8346a58c8"></a>

Gets called on invoke method request from web content(Javascript)

#### Parameters
* `browserId` The browser id

* `frameId` The frame id

* `method` The method name

* `arguments` The arguments list

---
### `private QScopedPointer< QCefViewPrivate > `[`d_ptr`](#class_q_cef_view_1a6882524bec20e1620311b3853750638f) <a class="anchor" id="class_q_cef_view_1a6882524bec20e1620311b3853750638f"></a>

