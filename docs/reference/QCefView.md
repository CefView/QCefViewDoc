---
title: QCefView
---

# class `QCefView` <a id="class_q_cef_view" class="anchor"></a>

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
`public bool `[`triggerEvent`](#class_q_cef_view_1a6010cae9651b5a6bbc5cc8893dfb8e35)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event,int64_t frameId)` | Triggers the event for specified frame
`public bool `[`broadcastEvent`](#class_q_cef_view_1ad5455e3a8cb0ffa1f9d7cb98307a6bb4)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event)` | Broad cast the event for all frames
`public bool `[`responseQCefQuery`](#class_q_cef_view_1afc838dab54d2b083b05f0d98349b50cc)`(const `[`QCefQuery`](QCefQuery.md#class_q_cef_query)` & query)` | Response the [QCefQuery](QCefQuery.md#class_q_cef_query) request
`public bool `[`executeJavascript`](#class_q_cef_view_1a8f711487764fc58f6219bff03a3290aa)`(int64_t frameId,const QString & code,const QString & url)` | Executes javascript code in specified frame, this method does not report the result of the javascript. To get the result of the javascript execution use [executeJavascriptWithResult](#class_q_cef_view_1a16a6ad1ed7c28fe8dfe18ec310b50c1e)
`public bool `[`executeJavascriptWithResult`](#class_q_cef_view_1a16a6ad1ed7c28fe8dfe18ec310b50c1e)`(int64_t frameId,const QString & code,const QString & url,int64_t context)` | Executes javascript code in specified frame and the result will be reported through [reportJavascriptResult](#class_q_cef_view_1a2da5836b810057180e8a0cc86a09be84) signal
`public bool `[`setPreference`](#class_q_cef_view_1a2b4b3da8874855bbe2d558081233d948)`(const QString & name,const QVariant & value,const QString & error)` | Sets the preference for this browser
`public QVariant `[`inputMethodQuery`](#class_q_cef_view_1af25a011c126a9bb5dc3df99756a75368)`(Qt::InputMethodQuery query) const` | Please refer to QWidget::inputMethodQuery
`protected void `[`paintEvent`](#class_q_cef_view_1aa205502bb5238e6e2ce727046ed8a9b8)`(QPaintEvent * event)` | Please refer to QWidget::paintEvent
`protected void `[`inputMethodEvent`](#class_q_cef_view_1a02d713f4a0545e85832b70ddced7e831)`(QInputMethodEvent * event)` | Please refer to QWidget::inputMethodEvent
`protected void `[`showEvent`](#class_q_cef_view_1a08dcba31e0d2860270ab3cd8055a5c4e)`(QShowEvent * event)` | Please refer to QWidget::showEvent
`protected void `[`hideEvent`](#class_q_cef_view_1af2432e14ac8d9156594c3941ff6b4d14)`(QHideEvent * event)` | Please refer to QWidget::hideEvent
`protected void `[`focusInEvent`](#class_q_cef_view_1a05bf10e1e318cf9cc4ad742ad61c9706)`(QFocusEvent * event)` | Please refer to QWidget::focusInEvent
`protected void `[`focusOutEvent`](#class_q_cef_view_1a414b4c9efe5edd10c324c1e35e12d07c)`(QFocusEvent * event)` | Please refer to QWidget::focusOutEvent
`protected void `[`resizeEvent`](#class_q_cef_view_1a237797e9f77342d72c35a8017865988e)`(QResizeEvent * event)` | Please refer to QWidget::resizeEvent
`protected void `[`mouseMoveEvent`](#class_q_cef_view_1a3bd541e981d7dbad0deceb64df0d3a5b)`(QMouseEvent * event)` | Please refer to QWidget::mouseMoveEvent
`protected void `[`mousePressEvent`](#class_q_cef_view_1aac476c39493a4e75e681b9e09f13e060)`(QMouseEvent * event)` | Please refer to QWidget::mousePressEvent
`protected void `[`mouseReleaseEvent`](#class_q_cef_view_1a69306a82128ba3e525103eb132aae62c)`(QMouseEvent * event)` | Please refer to QWidget::mouseReleaseEvent
`protected void `[`wheelEvent`](#class_q_cef_view_1a3395f62959288420a834c736933e7228)`(QWheelEvent * event)` | Please refer to QWidget::wheelEvent
`{signal} public void `[`loadingStateChanged`](#class_q_cef_view_1a3a7a88f6705481605cef678c111a6cf5)`(bool isLoading,bool canGoBack,bool canGoForward)` | Gets called on loading state changed
`{signal} public void `[`loadStart`](#class_q_cef_view_1a74964d85e3318a693e9d93a24176fb7c)`()` | Gets called on loading starts
`{signal} public void `[`loadEnd`](#class_q_cef_view_1ab09aca25ea627999b77c951c804c9a68)`(int httpStatusCode)` | Gets called on loading ends
`{signal} public void `[`loadError`](#class_q_cef_view_1a500199d0690238f89a71831cb7360459)`(int errorCode,const QString & errorMsg,const QString & failedUrl,bool & handled)` | Gets called on loading failed due to error
`{signal} public void `[`draggableRegionChanged`](#class_q_cef_view_1ae11274817f627abf9d407e12dcd5c050)`(const QRegion & draggableRegion,const QRegion & nonDraggableRegion)` | Gets called on draggable region changed
`{signal} public void `[`addressChanged`](#class_q_cef_view_1a48684575ae2149960a96f5852865852f)`(int64_t frameId,const QString & url)` | Gets called on the address changed
`{signal} public void `[`titleChanged`](#class_q_cef_view_1a48c82c208cab769a1baa7177bc58b030)`(const QString & title)` | Gets called on title changed
`{signal} public void `[`fullscreenModeChanged`](#class_q_cef_view_1afa0fbb5b4c2c6c3592085e9b94dffc4a)`(bool fullscreen)` | Gets called on fullscreen mode changed
`{signal} public void `[`statusMessage`](#class_q_cef_view_1a86d10c28b8821a36723e3504fa0cc7e7)`(const QString & message)` | Gets called on status message changed
`{signal} public void `[`consoleMessage`](#class_q_cef_view_1a2dae6946082712815273c2967d37762a)`(const QString & message,int level)` | Gets called on console message from the web content
`{signal} public void `[`loadingProgressChanged`](#class_q_cef_view_1ac7377eeed6811bafca1e6887b64d62a5)`(double progress)` | Gets called on loading progress changed
`{signal} public void `[`cefQueryRequest`](#class_q_cef_view_1abd1ab9ca8c22afb4030882f5fcec283f)`(int browserId,int64_t frameId,const `[`QCefQuery`](QCefQuery.md#class_q_cef_query)` & query)` | Gets called on new [QCefQuery](QCefQuery.md#class_q_cef_query) request
`{signal} public void `[`invokeMethod`](#class_q_cef_view_1a05c08a545ca6f1b52d8a4ff2c289814d)`(int browserId,int64_t frameId,const QString & method,const QVariantList & arguments)` | Gets called on invoking method request from web content(Javascript)
`{signal} public void `[`reportJavascriptResult`](#class_q_cef_view_1a2da5836b810057180e8a0cc86a09be84)`(int browserId,int64_t frameId,int64_t context,const QVariant & result)` | Gets called on the result of the javascript executed with [executeJavascriptWithResult](#class_q_cef_view_1a16a6ad1ed7c28fe8dfe18ec310b50c1e) returned
`{slot} public virtual bool `[`onBeforePopup`](#class_q_cef_view_1a99dc47ca5e7f38f8ce39f767747349e6)`(int64_t frameId,const QString & targetUrl,const QString & targetFrameName,`[`QCefView::WindowOpenDisposition`](#class_q_cef_view_1a9abb475b665abc98cf39d8bf5ae4e36d)` targetDisposition,`[`QCefSetting`](QCefSetting.md#class_q_cef_setting)` & settings,bool & DisableJavascriptAccess)` | Gets called before the popup browser created
`{slot} public virtual void `[`onPopupCreated`](#class_q_cef_view_1aac12eb50ad220fa9ca1cd674ac471a9c)`(QWindow * wnd)` | Gets called right after the popup browser was created
`enum `[`WindowOpenDisposition`](#class_q_cef_view_1a9abb475b665abc98cf39d8bf5ae4e36d) | 
 | 

## Members

---
### `public  `[`QCefView`](#class_q_cef_view_1aa0bf82c50f50f89aeee7afa3350110b1)`(const QString url,const `[`QCefSetting`](QCefSetting.md#class_q_cef_setting)` * setting,QWidget * parent)` <a id="class_q_cef_view_1aa0bf82c50f50f89aeee7afa3350110b1" class="anchor"></a>

Constructs a [QCefView](#class_q_cef_view) instance

#### Parameters
* `url` The target url

* `setting` The [QCefSetting](QCefSetting.md#class_q_cef_setting) instance

* `parent` The parent

---
### `public  `[`QCefView`](#class_q_cef_view_1a1b95ed3b73d10ee1580eea191d085c68)`(QWidget * parent)` <a id="class_q_cef_view_1a1b95ed3b73d10ee1580eea191d085c68" class="anchor"></a>

Constructs a [QCefView](#class_q_cef_view) instance

#### Parameters
* `parent` The parent

---
### `public  `[`~QCefView`](#class_q_cef_view_1a70903dca8ccd3e2776d68742531177fd)`()` <a id="class_q_cef_view_1a70903dca8ccd3e2776d68742531177fd" class="anchor"></a>

Destructs the [QCefView](#class_q_cef_view) instance

---
### `public int `[`browserId`](#class_q_cef_view_1ae4aa1652bf9852ed744dd38487bbb748)`()` <a id="class_q_cef_view_1ae4aa1652bf9852ed744dd38487bbb748" class="anchor"></a>

Gets the browser id

#### Returns
The browser id

---
### `public void `[`navigateToString`](#class_q_cef_view_1ac3b8ec3b088422a67f93fc580047a1a0)`(const QString & content)` <a id="class_q_cef_view_1ac3b8ec3b088422a67f93fc580047a1a0" class="anchor"></a>

Navigates to the content.

#### Parameters
* `content` The content

---
### `public void `[`navigateToUrl`](#class_q_cef_view_1a4bf036d5a7d128d4c1487afaa0393d5b)`(const QString & url)` <a id="class_q_cef_view_1a4bf036d5a7d128d4c1487afaa0393d5b" class="anchor"></a>

Navigates to the URL

#### Parameters
* `url` The url

---
### `public bool `[`browserCanGoBack`](#class_q_cef_view_1a01100f7ab97f9f643e4f23af5cea9900)`()` <a id="class_q_cef_view_1a01100f7ab97f9f643e4f23af5cea9900" class="anchor"></a>

Checks whether the browser can go back

#### Returns
True if can; otherwise false

---
### `public bool `[`browserCanGoForward`](#class_q_cef_view_1ae1d6a6d94e02a54654463e5b0c491624)`()` <a id="class_q_cef_view_1ae1d6a6d94e02a54654463e5b0c491624" class="anchor"></a>

Checks whether the browser can go forward

#### Returns
True if can; otherwise false

---
### `public void `[`browserGoBack`](#class_q_cef_view_1aa82e1ceaa7f543f8d99d7d9cbf714382)`()` <a id="class_q_cef_view_1aa82e1ceaa7f543f8d99d7d9cbf714382" class="anchor"></a>

Requires the browser to go back

---
### `public void `[`browserGoForward`](#class_q_cef_view_1a9ce96fbf25701594b8d65381661141db)`()` <a id="class_q_cef_view_1a9ce96fbf25701594b8d65381661141db" class="anchor"></a>

Requires the browser to go forward

---
### `public bool `[`browserIsLoading`](#class_q_cef_view_1a12ca0bc0f4fc55dfc838769990d6a6d7)`()` <a id="class_q_cef_view_1a12ca0bc0f4fc55dfc838769990d6a6d7" class="anchor"></a>

Checks whether the browser is loading

#### Returns
True if it is loading; otherwise false

---
### `public void `[`browserReload`](#class_q_cef_view_1a45bc8cd7340ce410cf873d7296ffacf6)`()` <a id="class_q_cef_view_1a45bc8cd7340ce410cf873d7296ffacf6" class="anchor"></a>

Requires the browser to reload

---
### `public void `[`browserStopLoad`](#class_q_cef_view_1afadd210f3c5cd95598b18aa158a9c16f)`()` <a id="class_q_cef_view_1afadd210f3c5cd95598b18aa158a9c16f" class="anchor"></a>

Requires the browser to stop load

---
### `public bool `[`triggerEvent`](#class_q_cef_view_1ac47c23ffcd94bdffe2b6a81eaae077a2)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event)` <a id="class_q_cef_view_1ac47c23ffcd94bdffe2b6a81eaae077a2" class="anchor"></a>

Triggers the event for main frame

#### Parameters
* `event` The [QCefEvent](QCefEvent.md#class_q_cef_event) instance

#### Returns
True on successful; otherwise false

---
### `public bool `[`triggerEvent`](#class_q_cef_view_1a6010cae9651b5a6bbc5cc8893dfb8e35)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event,int64_t frameId)` <a id="class_q_cef_view_1a6010cae9651b5a6bbc5cc8893dfb8e35" class="anchor"></a>

Triggers the event for specified frame

#### Parameters
* `event` The [QCefEvent](QCefEvent.md#class_q_cef_event) instance

* `frameId` The frame id

#### Returns
True on successful; otherwise false

---
### `public bool `[`broadcastEvent`](#class_q_cef_view_1ad5455e3a8cb0ffa1f9d7cb98307a6bb4)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event)` <a id="class_q_cef_view_1ad5455e3a8cb0ffa1f9d7cb98307a6bb4" class="anchor"></a>

Broad cast the event for all frames

#### Parameters
* `event` The [QCefEvent](QCefEvent.md#class_q_cef_event) instance

#### Returns
True on successful; otherwise false

---
### `public bool `[`responseQCefQuery`](#class_q_cef_view_1afc838dab54d2b083b05f0d98349b50cc)`(const `[`QCefQuery`](QCefQuery.md#class_q_cef_query)` & query)` <a id="class_q_cef_view_1afc838dab54d2b083b05f0d98349b50cc" class="anchor"></a>

Response the [QCefQuery](QCefQuery.md#class_q_cef_query) request

#### Parameters
* `query` The query instance

#### Returns
True on successful; otherwise false

---
### `public bool `[`executeJavascript`](#class_q_cef_view_1a8f711487764fc58f6219bff03a3290aa)`(int64_t frameId,const QString & code,const QString & url)` <a id="class_q_cef_view_1a8f711487764fc58f6219bff03a3290aa" class="anchor"></a>

Executes javascript code in specified frame, this method does not report the result of the javascript. To get the result of the javascript execution use [executeJavascriptWithResult](#class_q_cef_view_1a16a6ad1ed7c28fe8dfe18ec310b50c1e)

#### Parameters
* `frameId` The frame id

* `code` The javascript code

* `url` The URL where the script in question can be found, if any. The renderer may request this URL to show the developer the source of the error 

#### Returns
True on successful; otherwise false

---
### `public bool `[`executeJavascriptWithResult`](#class_q_cef_view_1a16a6ad1ed7c28fe8dfe18ec310b50c1e)`(int64_t frameId,const QString & code,const QString & url,int64_t context)` <a id="class_q_cef_view_1a16a6ad1ed7c28fe8dfe18ec310b50c1e" class="anchor"></a>

Executes javascript code in specified frame and the result will be reported through [reportJavascriptResult](#class_q_cef_view_1a2da5836b810057180e8a0cc86a09be84) signal

#### Parameters
* `frameId` The frame id

* `code` The javascript code

* `url` The URL where the script in question can be found, if any. The renderer may request this URL to show the developer the source of the error 

* `context` The context used to identify the one execution

#### Returns
True on successful; otherwise false

---
### `public bool `[`setPreference`](#class_q_cef_view_1a2b4b3da8874855bbe2d558081233d948)`(const QString & name,const QVariant & value,const QString & error)` <a id="class_q_cef_view_1a2b4b3da8874855bbe2d558081233d948" class="anchor"></a>

Sets the preference for this browser

#### Parameters
* `name` The preference name

* `value` The preference value, if this value is QVariant::UnknownType or QVariant::Invalid, the preference will be restored to default value 

* `error` The error message populated on failure

#### Returns
True on successful; otherwise false

---
### `public QVariant `[`inputMethodQuery`](#class_q_cef_view_1af25a011c126a9bb5dc3df99756a75368)`(Qt::InputMethodQuery query) const` <a id="class_q_cef_view_1af25a011c126a9bb5dc3df99756a75368" class="anchor"></a>

Please refer to QWidget::inputMethodQuery

---
### `protected void `[`paintEvent`](#class_q_cef_view_1aa205502bb5238e6e2ce727046ed8a9b8)`(QPaintEvent * event)` <a id="class_q_cef_view_1aa205502bb5238e6e2ce727046ed8a9b8" class="anchor"></a>

Please refer to QWidget::paintEvent

---
### `protected void `[`inputMethodEvent`](#class_q_cef_view_1a02d713f4a0545e85832b70ddced7e831)`(QInputMethodEvent * event)` <a id="class_q_cef_view_1a02d713f4a0545e85832b70ddced7e831" class="anchor"></a>

Please refer to QWidget::inputMethodEvent

---
### `protected void `[`showEvent`](#class_q_cef_view_1a08dcba31e0d2860270ab3cd8055a5c4e)`(QShowEvent * event)` <a id="class_q_cef_view_1a08dcba31e0d2860270ab3cd8055a5c4e" class="anchor"></a>

Please refer to QWidget::showEvent

---
### `protected void `[`hideEvent`](#class_q_cef_view_1af2432e14ac8d9156594c3941ff6b4d14)`(QHideEvent * event)` <a id="class_q_cef_view_1af2432e14ac8d9156594c3941ff6b4d14" class="anchor"></a>

Please refer to QWidget::hideEvent

---
### `protected void `[`focusInEvent`](#class_q_cef_view_1a05bf10e1e318cf9cc4ad742ad61c9706)`(QFocusEvent * event)` <a id="class_q_cef_view_1a05bf10e1e318cf9cc4ad742ad61c9706" class="anchor"></a>

Please refer to QWidget::focusInEvent

---
### `protected void `[`focusOutEvent`](#class_q_cef_view_1a414b4c9efe5edd10c324c1e35e12d07c)`(QFocusEvent * event)` <a id="class_q_cef_view_1a414b4c9efe5edd10c324c1e35e12d07c" class="anchor"></a>

Please refer to QWidget::focusOutEvent

---
### `protected void `[`resizeEvent`](#class_q_cef_view_1a237797e9f77342d72c35a8017865988e)`(QResizeEvent * event)` <a id="class_q_cef_view_1a237797e9f77342d72c35a8017865988e" class="anchor"></a>

Please refer to QWidget::resizeEvent

---
### `protected void `[`mouseMoveEvent`](#class_q_cef_view_1a3bd541e981d7dbad0deceb64df0d3a5b)`(QMouseEvent * event)` <a id="class_q_cef_view_1a3bd541e981d7dbad0deceb64df0d3a5b" class="anchor"></a>

Please refer to QWidget::mouseMoveEvent

---
### `protected void `[`mousePressEvent`](#class_q_cef_view_1aac476c39493a4e75e681b9e09f13e060)`(QMouseEvent * event)` <a id="class_q_cef_view_1aac476c39493a4e75e681b9e09f13e060" class="anchor"></a>

Please refer to QWidget::mousePressEvent

---
### `protected void `[`mouseReleaseEvent`](#class_q_cef_view_1a69306a82128ba3e525103eb132aae62c)`(QMouseEvent * event)` <a id="class_q_cef_view_1a69306a82128ba3e525103eb132aae62c" class="anchor"></a>

Please refer to QWidget::mouseReleaseEvent

---
### `protected void `[`wheelEvent`](#class_q_cef_view_1a3395f62959288420a834c736933e7228)`(QWheelEvent * event)` <a id="class_q_cef_view_1a3395f62959288420a834c736933e7228" class="anchor"></a>

Please refer to QWidget::wheelEvent

---
### `{signal} public void `[`loadingStateChanged`](#class_q_cef_view_1a3a7a88f6705481605cef678c111a6cf5)`(bool isLoading,bool canGoBack,bool canGoForward)` <a id="class_q_cef_view_1a3a7a88f6705481605cef678c111a6cf5" class="anchor"></a>

Gets called on loading state changed

#### Parameters
* `isLoading` Indicates the browser is loading

* `canGoBack` Indicates the browser can go back

* `canGoForward` Indicates the browser can go forward

---
### `{signal} public void `[`loadStart`](#class_q_cef_view_1a74964d85e3318a693e9d93a24176fb7c)`()` <a id="class_q_cef_view_1a74964d85e3318a693e9d93a24176fb7c" class="anchor"></a>

Gets called on loading starts

---
### `{signal} public void `[`loadEnd`](#class_q_cef_view_1ab09aca25ea627999b77c951c804c9a68)`(int httpStatusCode)` <a id="class_q_cef_view_1ab09aca25ea627999b77c951c804c9a68" class="anchor"></a>

Gets called on loading ends

#### Parameters
* `httpStatusCode`

---
### `{signal} public void `[`loadError`](#class_q_cef_view_1a500199d0690238f89a71831cb7360459)`(int errorCode,const QString & errorMsg,const QString & failedUrl,bool & handled)` <a id="class_q_cef_view_1a500199d0690238f89a71831cb7360459" class="anchor"></a>

Gets called on loading failed due to error

#### Parameters
* `errorCode` The error code

* `errorMsg` The error message

* `failedUrl` The url caused the failure

* `handled` Sets this parameter to indicates whether this error was handled or not

---
### `{signal} public void `[`draggableRegionChanged`](#class_q_cef_view_1ae11274817f627abf9d407e12dcd5c050)`(const QRegion & draggableRegion,const QRegion & nonDraggableRegion)` <a id="class_q_cef_view_1ae11274817f627abf9d407e12dcd5c050" class="anchor"></a>

Gets called on draggable region changed

#### Parameters
* `draggableRegion` The new draggable region

* `nonDraggableRegion` The new non-draggable region

---
### `{signal} public void `[`addressChanged`](#class_q_cef_view_1a48684575ae2149960a96f5852865852f)`(int64_t frameId,const QString & url)` <a id="class_q_cef_view_1a48684575ae2149960a96f5852865852f" class="anchor"></a>

Gets called on the address changed

#### Parameters
* `frameId` The frame id

* `url` The address

---
### `{signal} public void `[`titleChanged`](#class_q_cef_view_1a48c82c208cab769a1baa7177bc58b030)`(const QString & title)` <a id="class_q_cef_view_1a48c82c208cab769a1baa7177bc58b030" class="anchor"></a>

Gets called on title changed

#### Parameters
* `title` The title

---
### `{signal} public void `[`fullscreenModeChanged`](#class_q_cef_view_1afa0fbb5b4c2c6c3592085e9b94dffc4a)`(bool fullscreen)` <a id="class_q_cef_view_1afa0fbb5b4c2c6c3592085e9b94dffc4a" class="anchor"></a>

Gets called on fullscreen mode changed

#### Parameters
* `fullscreen` The current fullscreen mode

---
### `{signal} public void `[`statusMessage`](#class_q_cef_view_1a86d10c28b8821a36723e3504fa0cc7e7)`(const QString & message)` <a id="class_q_cef_view_1a86d10c28b8821a36723e3504fa0cc7e7" class="anchor"></a>

Gets called on status message changed

#### Parameters
* `message` The status message

---
### `{signal} public void `[`consoleMessage`](#class_q_cef_view_1a2dae6946082712815273c2967d37762a)`(const QString & message,int level)` <a id="class_q_cef_view_1a2dae6946082712815273c2967d37762a" class="anchor"></a>

Gets called on console message from the web content

#### Parameters
* `message` The message

* `level` The level

---
### `{signal} public void `[`loadingProgressChanged`](#class_q_cef_view_1ac7377eeed6811bafca1e6887b64d62a5)`(double progress)` <a id="class_q_cef_view_1ac7377eeed6811bafca1e6887b64d62a5" class="anchor"></a>

Gets called on loading progress changed

#### Parameters
* `progress` Current progress

---
### `{signal} public void `[`cefQueryRequest`](#class_q_cef_view_1abd1ab9ca8c22afb4030882f5fcec283f)`(int browserId,int64_t frameId,const `[`QCefQuery`](QCefQuery.md#class_q_cef_query)` & query)` <a id="class_q_cef_view_1abd1ab9ca8c22afb4030882f5fcec283f" class="anchor"></a>

Gets called on new [QCefQuery](QCefQuery.md#class_q_cef_query) request

#### Parameters
* `browserId` The browser id

* `frameId` The frame id

* `query` The query request

---
### `{signal} public void `[`invokeMethod`](#class_q_cef_view_1a05c08a545ca6f1b52d8a4ff2c289814d)`(int browserId,int64_t frameId,const QString & method,const QVariantList & arguments)` <a id="class_q_cef_view_1a05c08a545ca6f1b52d8a4ff2c289814d" class="anchor"></a>

Gets called on invoking method request from web content(Javascript)

#### Parameters
* `browserId` The browser id

* `frameId` The frame id

* `method` The method name

* `arguments` The arguments list

---
### `{signal} public void `[`reportJavascriptResult`](#class_q_cef_view_1a2da5836b810057180e8a0cc86a09be84)`(int browserId,int64_t frameId,int64_t context,const QVariant & result)` <a id="class_q_cef_view_1a2da5836b810057180e8a0cc86a09be84" class="anchor"></a>

Gets called on the result of the javascript executed with [executeJavascriptWithResult](#class_q_cef_view_1a16a6ad1ed7c28fe8dfe18ec310b50c1e) returned

#### Parameters
* `browserId` The browser id

* `frameId` The frame id

* `context` The context

* `result` The result

---
### `{slot} public virtual bool `[`onBeforePopup`](#class_q_cef_view_1a99dc47ca5e7f38f8ce39f767747349e6)`(int64_t frameId,const QString & targetUrl,const QString & targetFrameName,`[`QCefView::WindowOpenDisposition`](#class_q_cef_view_1a9abb475b665abc98cf39d8bf5ae4e36d)` targetDisposition,`[`QCefSetting`](QCefSetting.md#class_q_cef_setting)` & settings,bool & DisableJavascriptAccess)` <a id="class_q_cef_view_1a99dc47ca5e7f38f8ce39f767747349e6" class="anchor"></a>

Gets called before the popup browser created

#### Parameters
* `frameId` The source frame id

* `targetUrl` The target URL

* `targetFrameName` The target name

* `targetDisposition` Target window open method

* `settings` Settings to be used for the popup

* `DisableJavascriptAccess` Disable the access to Javascript

#### Returns
True to cancel the popup; false to allow

---
### `{slot} public virtual void `[`onPopupCreated`](#class_q_cef_view_1aac12eb50ad220fa9ca1cd674ac471a9c)`(QWindow * wnd)` <a id="class_q_cef_view_1aac12eb50ad220fa9ca1cd674ac471a9c" class="anchor"></a>

Gets called right after the popup browser was created

#### Parameters
* `wnd` The host window of new created browser

---
### `enum `[`WindowOpenDisposition`](#class_q_cef_view_1a9abb475b665abc98cf39d8bf5ae4e36d) <a id="class_q_cef_view_1a9abb475b665abc98cf39d8bf5ae4e36d" class="anchor"></a>

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
WOD_UNKNOWN            | 
WOD_CURRENT_TAB            | 
WOD_SINGLETON_TAB            | 
WOD_NEW_FOREGROUND_TAB            | 
WOD_NEW_BACKGROUND_TAB            | 
WOD_NEW_POPUP            | 
WOD_NEW_WINDOW            | 
WOD_SAVE_TO_DISK            | 
WOD_OFF_THE_RECORD            | 
WOD_IGNORE_ACTION            | 

---
###  <a id="class_q_cef_view_1a6882524bec20e1620311b3853750638f" class="anchor"></a>

