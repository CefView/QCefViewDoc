---
title: QCefView
---

# class `QCefView` {#class_q_cef_view}

```
class QCefView
  : public QWidget
```

Represents the CEF browser view.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`QCefView`](#class_q_cef_view_1ad7f70e5b6a0984e14480391972debba5)`(const QString url, const `[`QCefSetting`](QCefSetting.md#class_q_cef_setting)` * setting, QWidget * parent, Qt::WindowFlags f)`                  | Constructs a [QCefView](#class_q_cef_view) instance.
`public  `[`QCefView`](#class_q_cef_view_1a84f33f3697e39588e9b76d2cd4847892)`(QWidget * parent, Qt::WindowFlags f)`                  | Constructs a [QCefView](#class_q_cef_view) instance.
`public  `[`~QCefView`](#class_q_cef_view_1a70903dca8ccd3e2776d68742531177fd)`()`                  | Destructs the [QCefView](#class_q_cef_view) instance.
`public void `[`addLocalFolderResource`](#class_q_cef_view_1a8c6286b279094a691832fc89b93c75f1)`(const QString & path, const QString & url, int priority)`                  | Adds a url mapping item with local web resource directory.
`public void `[`addArchiveResource`](#class_q_cef_view_1a503148f8ff5ca5b28d3f0e123bf5bf76)`(const QString & path, const QString & url, const QString & password, int priority)`                  | Adds a url mapping item with local archive (.zip) file which contains the web resource.
`public int `[`browserId`](#class_q_cef_view_1ae4aa1652bf9852ed744dd38487bbb748)`()`                  | Gets the browser id.
`public bool `[`isPopup`](#class_q_cef_view_1a532ffb1fb0090dd866454234d518619c)`()`                  | Gets whether the browser is created as popup browser.
`public void `[`navigateToString`](#class_q_cef_view_1ac3b8ec3b088422a67f93fc580047a1a0)`(const QString & content)`                  | Navigates to the content.
`public void `[`navigateToUrl`](#class_q_cef_view_1a4bf036d5a7d128d4c1487afaa0393d5b)`(const QString & url)`                  | Navigates to the URL.
`public bool `[`browserCanGoBack`](#class_q_cef_view_1a01100f7ab97f9f643e4f23af5cea9900)`()`                  | Checks whether the browser can go back.
`public bool `[`browserCanGoForward`](#class_q_cef_view_1ae1d6a6d94e02a54654463e5b0c491624)`()`                  | Checks whether the browser can go forward.
`public void `[`browserGoBack`](#class_q_cef_view_1aa82e1ceaa7f543f8d99d7d9cbf714382)`()`                  | Requires the browser to go back.
`public void `[`browserGoForward`](#class_q_cef_view_1a9ce96fbf25701594b8d65381661141db)`()`                  | Requires the browser to go forward.
`public bool `[`browserIsLoading`](#class_q_cef_view_1a12ca0bc0f4fc55dfc838769990d6a6d7)`()`                  | Checks whether the browser is loading.
`public void `[`browserReload`](#class_q_cef_view_1a45bc8cd7340ce410cf873d7296ffacf6)`()`                  | Requires the browser to reload.
`public void `[`browserStopLoad`](#class_q_cef_view_1afadd210f3c5cd95598b18aa158a9c16f)`()`                  | Requires the browser to stop load.
`public bool `[`triggerEvent`](#class_q_cef_view_1ac47c23ffcd94bdffe2b6a81eaae077a2)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event)`                  | Triggers the event for main frame.
`public bool `[`triggerEvent`](#class_q_cef_view_1ab6afab6f26fb1a1b4f3b25d2fe9c2f13)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event, qint64 frameId)`                  | Triggers the event for specified frame.
`public bool `[`broadcastEvent`](#class_q_cef_view_1ad5455e3a8cb0ffa1f9d7cb98307a6bb4)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event)`                  | Broad cast the event for all frames.
`public bool `[`responseQCefQuery`](#class_q_cef_view_1afc838dab54d2b083b05f0d98349b50cc)`(const `[`QCefQuery`](QCefQuery.md#class_q_cef_query)` & query)`                  | Response the [QCefQuery](QCefQuery.md#class_q_cef_query) request.
`public bool `[`executeJavascript`](#class_q_cef_view_1a79a5f1f466b1e8b96c89b24058194fe8)`(qint64 frameId, const QString & code, const QString & url)`                  | Executes javascript code in specified frame, this method does not report the result of the javascript. To get the result of the javascript execution use [executeJavascriptWithResult](#class_q_cef_view_1ad4f331cdfc2ca2ed0ab019d2c8857065)
`public bool `[`executeJavascriptWithResult`](#class_q_cef_view_1ad4f331cdfc2ca2ed0ab019d2c8857065)`(qint64 frameId, const QString & code, const QString & url, qint64 context)`                  | Executes javascript code in specified frame and the result will be reported through [reportJavascriptResult](#class_q_cef_view_1a3e5b637b042a2d17946a884f9bfc9bf0) signal.
`public bool `[`setPreference`](#class_q_cef_view_1a2b4b3da8874855bbe2d558081233d948)`(const QString & name, const QVariant & value, const QString & error)`                  | Sets the preference for this browser.
`public void `[`setDisablePopupContextMenu`](#class_q_cef_view_1acca71443b26dce09e81e3f937cedaa6b)`(bool disable)`                  | Sets whether to disable the context menu for popup browser.
`public bool `[`isPopupContextMenuDisabled`](#class_q_cef_view_1abb79735affb74166c0bed7f361ce1388)`()`                  | Gets whether to disable the context menu for popup browser.
`public bool `[`hasDevTools`](#class_q_cef_view_1a85fd904cbd3b91a72ce090cffb0119c8)`()`                  | Detects whether this browser has a devtools opened.
`public void `[`showDevTools`](#class_q_cef_view_1a61845e6e370a57be5f3662ba37cd7b29)`()`                  | Opens the devtools dialog.
`public void `[`closeDevTools`](#class_q_cef_view_1abdf0a68139fe9163ecd9b5a0cdeed6d7)`()`                  | Closes the devtools dialog.
`public void `[`setFocus`](#class_q_cef_view_1a61ad737cd2354021f8310f323f4f8ada)`(Qt::FocusReason reason)`                  | Please refer to QWidget::setFocus.
`public QVariant `[`inputMethodQuery`](#class_q_cef_view_1af25a011c126a9bb5dc3df99756a75368)`(Qt::InputMethodQuery query) const`                  | Please refer to QWidget::inputMethodQuery.
`protected virtual bool `[`onBeforePopup`](#class_q_cef_view_1a2889f3055a30625f39cecb697c15aa04)`(qint64 frameId, const QString & targetUrl, const QString & targetFrameName, `[`QCefView::CefWindowOpenDisposition`](#class_q_cef_view_1a9963d810f8aa71b45b1b10f0abbe8787)` targetDisposition, QRect & rect, `[`QCefSetting`](QCefSetting.md#class_q_cef_setting)` & settings)`                  | Gets called before the popup browser created.
`protected virtual void `[`onNewDownloadItem`](#class_q_cef_view_1a666e93d6e9f9be7444f9b898f77c8292)`(const QSharedPointer< `[`QCefDownloadItem`](QCefDownloadItem.md#class_q_cef_download_item)` > & item, const QString & suggestedName)`                  | Gets called on new download item was required. Keep reference to the download item and call [QCefDownloadItem::start](QCefDownloadItem.md#class_q_cef_download_item_1a315592aa53a2bf7bc8aea717195f5b43) method to allow and start the download, Ignore the download item to disallow the download.
`protected virtual void `[`onUpdateDownloadItem`](#class_q_cef_view_1a9833a1db8ef5864489f9462ef397cbb8)`(const QSharedPointer< `[`QCefDownloadItem`](QCefDownloadItem.md#class_q_cef_download_item)` > & item)`                  | Gets called on download item updated. To get this method called [QCefDownloadItem::start](QCefDownloadItem.md#class_q_cef_download_item_1a315592aa53a2bf7bc8aea717195f5b43) method must be called in newDownloadItem method.
`protected void `[`paintEvent`](#class_q_cef_view_1aa205502bb5238e6e2ce727046ed8a9b8)`(QPaintEvent * event)`                  | Please refer to QWidget::paintEvent.
`protected void `[`inputMethodEvent`](#class_q_cef_view_1a02d713f4a0545e85832b70ddced7e831)`(QInputMethodEvent * event)`                  | Please refer to QWidget::inputMethodEvent.
`protected void `[`showEvent`](#class_q_cef_view_1a08dcba31e0d2860270ab3cd8055a5c4e)`(QShowEvent * event)`                  | Please refer to QWidget::showEvent.
`protected void `[`hideEvent`](#class_q_cef_view_1af2432e14ac8d9156594c3941ff6b4d14)`(QHideEvent * event)`                  | Please refer to QWidget::hideEvent.
`protected void `[`focusInEvent`](#class_q_cef_view_1a05bf10e1e318cf9cc4ad742ad61c9706)`(QFocusEvent * event)`                  | Please refer to QWidget::focusInEvent.
`protected void `[`focusOutEvent`](#class_q_cef_view_1a414b4c9efe5edd10c324c1e35e12d07c)`(QFocusEvent * event)`                  | Please refer to QWidget::focusOutEvent.
`protected void `[`resizeEvent`](#class_q_cef_view_1a237797e9f77342d72c35a8017865988e)`(QResizeEvent * event)`                  | Please refer to QWidget::resizeEvent.
`protected void `[`keyPressEvent`](#class_q_cef_view_1a6aa89a0ce04dac5aa2c01545253ffc56)`(QKeyEvent * event)`                  | Please refer to QWidget::keyPressEvent.
`protected void `[`keyReleaseEvent`](#class_q_cef_view_1ab2d8e99188937bba13893ce6c54f9a3f)`(QKeyEvent * event)`                  | Please refer to QWidget::keyReleaseEvent.
`protected void `[`mouseMoveEvent`](#class_q_cef_view_1a3bd541e981d7dbad0deceb64df0d3a5b)`(QMouseEvent * event)`                  | Please refer to QWidget::mouseMoveEvent.
`protected void `[`mousePressEvent`](#class_q_cef_view_1aac476c39493a4e75e681b9e09f13e060)`(QMouseEvent * event)`                  | Please refer to QWidget::mousePressEvent.
`protected void `[`mouseReleaseEvent`](#class_q_cef_view_1a69306a82128ba3e525103eb132aae62c)`(QMouseEvent * event)`                  | Please refer to QWidget::mouseReleaseEvent.
`protected void `[`wheelEvent`](#class_q_cef_view_1a3395f62959288420a834c736933e7228)`(QWheelEvent * event)`                  | Please refer to QWidget::wheelEvent.
`protected void `[`contextMenuEvent`](#class_q_cef_view_1ac8a83d1f2fb0e771fb48007838b40d1f)`(QContextMenuEvent * event)`                  | Please refer to QWidget::contextMenuEvent.
`{signal} public void `[`loadingStateChanged`](#class_q_cef_view_1afb28155fd58760bd84cf45f634e054b5)`(int browserId, bool isLoading, bool canGoBack, bool canGoForward)`                  | Gets called on loading state changed.
`{signal} public void `[`loadStart`](#class_q_cef_view_1a5b04e73d0be37fbe1cc55340ee213042)`(int browserId, qint64 frameId, bool isMainFrame, int transitionType)`                  | Gets called on loading starts.
`{signal} public void `[`loadEnd`](#class_q_cef_view_1a5d64cbb95348336b85cb01f38de91e0a)`(int browserId, qint64 frameId, bool isMainFrame, int httpStatusCode)`                  | Gets called on loading ends.
`{signal} public void `[`loadError`](#class_q_cef_view_1a81ad0ea96d09d7ba705c4166502507e4)`(int browserId, qint64 frameId, bool isMainFrame, int errorCode, const QString & errorMsg, const QString & failedUrl)`                  | Gets called on loading failed due to error.
`{signal} public void `[`draggableRegionChanged`](#class_q_cef_view_1ae11274817f627abf9d407e12dcd5c050)`(const QRegion & draggableRegion, const QRegion & nonDraggableRegion)`                  | Gets called on draggable region changed.
`{signal} public void `[`addressChanged`](#class_q_cef_view_1a89ce3bc031d5dcd1115482118a6c4181)`(qint64 frameId, const QString & url)`                  | Gets called on the address changed.
`{signal} public void `[`titleChanged`](#class_q_cef_view_1a48c82c208cab769a1baa7177bc58b030)`(const QString & title)`                  | Gets called on title changed.
`{signal} public void `[`faviconURLChanged`](#class_q_cef_view_1a7b9e104469c1a4a203c2e1d7e9cfd2a7)`(const QStringList & urls)`                  | Gets called on favicon url changed.
`{signal} public void `[`faviconChanged`](#class_q_cef_view_1aa5d4a7098414f929a4ca7dd6b72d0893)`(const QIcon & icon)`                  | Gets called on favicon changed.
`{signal} public void `[`fullscreenModeChanged`](#class_q_cef_view_1afa0fbb5b4c2c6c3592085e9b94dffc4a)`(bool fullscreen)`                  | Gets called on fullscreen mode changed.
`{signal} public void `[`statusMessage`](#class_q_cef_view_1a86d10c28b8821a36723e3504fa0cc7e7)`(const QString & message)`                  | Gets called on status message changed.
`{signal} public void `[`consoleMessage`](#class_q_cef_view_1a2dae6946082712815273c2967d37762a)`(const QString & message, int level)`                  | Gets called on console message from the web content.
`{signal} public void `[`loadingProgressChanged`](#class_q_cef_view_1ac7377eeed6811bafca1e6887b64d62a5)`(double progress)`                  | Gets called on loading progress changed.
`{signal} public void `[`cefQueryRequest`](#class_q_cef_view_1a9085b5e19ee6eb1306ec29e40f09c6e3)`(int browserId, qint64 frameId, const `[`QCefQuery`](QCefQuery.md#class_q_cef_query)` & query)`                  | Gets called on new [QCefQuery](QCefQuery.md#class_q_cef_query) request.
`{signal} public void `[`invokeMethod`](#class_q_cef_view_1a221d07818d4f6766f72c68319fecc24e)`(int browserId, qint64 frameId, const QString & method, const QVariantList & arguments)`                  | Gets called on invoking method request from web content(Javascript)
`{signal} public void `[`reportJavascriptResult`](#class_q_cef_view_1a3e5b637b042a2d17946a884f9bfc9bf0)`(int browserId, qint64 frameId, qint64 context, const QVariant & result)`                  | Gets called on the result of the javascript executed with [executeJavascriptWithResult](#class_q_cef_view_1ad4f331cdfc2ca2ed0ab019d2c8857065) returned.
`{signal} public void `[`nativeBrowserCreated`](#class_q_cef_view_1a543b0eca797c5161d6325665d5ddd576)`(QWindow * window)`                  | Gets called after the native browser window created. This slot does not work for OSR mode.
`{signal} public void `[`popupCreated`](#class_q_cef_view_1ab008a40ecfdd9a616e31b401514ac1e3)`(`[`QCefView`](#class_q_cef_view)` * popup)`                  | Gets called right after the popup browser was created.
`{slot} public inline void `[`setFocus`](#class_q_cef_view_1a9b1b42857e38a9f5c6c810fd51593788)`()`                  | 
`enum `[`CefWindowOpenDisposition`](#class_q_cef_view_1a9963d810f8aa71b45b1b10f0abbe8787)                  | Represents the CEF popup windows open disposition.
`private QScopedPointer< QCefViewPrivate > `[`d_ptr`](#class_q_cef_view_1a6882524bec20e1620311b3853750638f)                  | 

## Members

---
### `public  `[`QCefView`](#class_q_cef_view_1ad7f70e5b6a0984e14480391972debba5)`(const QString url, const `[`QCefSetting`](QCefSetting.md#class_q_cef_setting)` * setting, QWidget * parent, Qt::WindowFlags f)` {#class_q_cef_view_1ad7f70e5b6a0984e14480391972debba5}

Constructs a [QCefView](#class_q_cef_view) instance.

#### Parameters
* `url` The target url

* `setting` The [QCefSetting](QCefSetting.md#class_q_cef_setting) instance

* `parent` The parent

* `f` The Qt WindowFlags

---
### `public  `[`QCefView`](#class_q_cef_view_1a84f33f3697e39588e9b76d2cd4847892)`(QWidget * parent, Qt::WindowFlags f)` {#class_q_cef_view_1a84f33f3697e39588e9b76d2cd4847892}

Constructs a [QCefView](#class_q_cef_view) instance.

#### Parameters
* `parent` The parent

* `f` The Qt WindowFlags

---
### `public  `[`~QCefView`](#class_q_cef_view_1a70903dca8ccd3e2776d68742531177fd)`()` {#class_q_cef_view_1a70903dca8ccd3e2776d68742531177fd}

Destructs the [QCefView](#class_q_cef_view) instance.

---
### `public void `[`addLocalFolderResource`](#class_q_cef_view_1a8c6286b279094a691832fc89b93c75f1)`(const QString & path, const QString & url, int priority)` {#class_q_cef_view_1a8c6286b279094a691832fc89b93c75f1}

Adds a url mapping item with local web resource directory.

#### Parameters
* `path` The path to the local resource directory

* `url` The url to be mapped to

* `priority` The priority

---
### `public void `[`addArchiveResource`](#class_q_cef_view_1a503148f8ff5ca5b28d3f0e123bf5bf76)`(const QString & path, const QString & url, const QString & password, int priority)` {#class_q_cef_view_1a503148f8ff5ca5b28d3f0e123bf5bf76}

Adds a url mapping item with local archive (.zip) file which contains the web resource.

#### Parameters
* `path` The path to the local archive file

* `url` The url to be mapped to

* `password` The password of the archive

* `priority` The priority

---
### `public int `[`browserId`](#class_q_cef_view_1ae4aa1652bf9852ed744dd38487bbb748)`()` {#class_q_cef_view_1ae4aa1652bf9852ed744dd38487bbb748}

Gets the browser id.

#### Returns
The browser id

---
### `public bool `[`isPopup`](#class_q_cef_view_1a532ffb1fb0090dd866454234d518619c)`()` {#class_q_cef_view_1a532ffb1fb0090dd866454234d518619c}

Gets whether the browser is created as popup browser.

#### Returns
True if it is popup browser; otherwise false

---
### `public void `[`navigateToString`](#class_q_cef_view_1ac3b8ec3b088422a67f93fc580047a1a0)`(const QString & content)` {#class_q_cef_view_1ac3b8ec3b088422a67f93fc580047a1a0}

Navigates to the content.

#### Parameters
* `content` The content

---
### `public void `[`navigateToUrl`](#class_q_cef_view_1a4bf036d5a7d128d4c1487afaa0393d5b)`(const QString & url)` {#class_q_cef_view_1a4bf036d5a7d128d4c1487afaa0393d5b}

Navigates to the URL.

#### Parameters
* `url` The url

---
### `public bool `[`browserCanGoBack`](#class_q_cef_view_1a01100f7ab97f9f643e4f23af5cea9900)`()` {#class_q_cef_view_1a01100f7ab97f9f643e4f23af5cea9900}

Checks whether the browser can go back.

#### Returns
True if can; otherwise false

---
### `public bool `[`browserCanGoForward`](#class_q_cef_view_1ae1d6a6d94e02a54654463e5b0c491624)`()` {#class_q_cef_view_1ae1d6a6d94e02a54654463e5b0c491624}

Checks whether the browser can go forward.

#### Returns
True if can; otherwise false

---
### `public void `[`browserGoBack`](#class_q_cef_view_1aa82e1ceaa7f543f8d99d7d9cbf714382)`()` {#class_q_cef_view_1aa82e1ceaa7f543f8d99d7d9cbf714382}

Requires the browser to go back.

---
### `public void `[`browserGoForward`](#class_q_cef_view_1a9ce96fbf25701594b8d65381661141db)`()` {#class_q_cef_view_1a9ce96fbf25701594b8d65381661141db}

Requires the browser to go forward.

---
### `public bool `[`browserIsLoading`](#class_q_cef_view_1a12ca0bc0f4fc55dfc838769990d6a6d7)`()` {#class_q_cef_view_1a12ca0bc0f4fc55dfc838769990d6a6d7}

Checks whether the browser is loading.

#### Returns
True if it is loading; otherwise false

---
### `public void `[`browserReload`](#class_q_cef_view_1a45bc8cd7340ce410cf873d7296ffacf6)`()` {#class_q_cef_view_1a45bc8cd7340ce410cf873d7296ffacf6}

Requires the browser to reload.

---
### `public void `[`browserStopLoad`](#class_q_cef_view_1afadd210f3c5cd95598b18aa158a9c16f)`()` {#class_q_cef_view_1afadd210f3c5cd95598b18aa158a9c16f}

Requires the browser to stop load.

---
### `public bool `[`triggerEvent`](#class_q_cef_view_1ac47c23ffcd94bdffe2b6a81eaae077a2)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event)` {#class_q_cef_view_1ac47c23ffcd94bdffe2b6a81eaae077a2}

Triggers the event for main frame.

#### Parameters
* `event` The [QCefEvent](QCefEvent.md#class_q_cef_event) instance

#### Returns
True on successful; otherwise false

---
### `public bool `[`triggerEvent`](#class_q_cef_view_1ab6afab6f26fb1a1b4f3b25d2fe9c2f13)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event, qint64 frameId)` {#class_q_cef_view_1ab6afab6f26fb1a1b4f3b25d2fe9c2f13}

Triggers the event for specified frame.

#### Parameters
* `event` The [QCefEvent](QCefEvent.md#class_q_cef_event) instance

* `frameId` The frame id

#### Returns
True on successful; otherwise false

---
### `public bool `[`broadcastEvent`](#class_q_cef_view_1ad5455e3a8cb0ffa1f9d7cb98307a6bb4)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event)` {#class_q_cef_view_1ad5455e3a8cb0ffa1f9d7cb98307a6bb4}

Broad cast the event for all frames.

#### Parameters
* `event` The [QCefEvent](QCefEvent.md#class_q_cef_event) instance

#### Returns
True on successful; otherwise false

---
### `public bool `[`responseQCefQuery`](#class_q_cef_view_1afc838dab54d2b083b05f0d98349b50cc)`(const `[`QCefQuery`](QCefQuery.md#class_q_cef_query)` & query)` {#class_q_cef_view_1afc838dab54d2b083b05f0d98349b50cc}

Response the [QCefQuery](QCefQuery.md#class_q_cef_query) request.

#### Parameters
* `query` The query instance

#### Returns
True on successful; otherwise false

---
### `public bool `[`executeJavascript`](#class_q_cef_view_1a79a5f1f466b1e8b96c89b24058194fe8)`(qint64 frameId, const QString & code, const QString & url)` {#class_q_cef_view_1a79a5f1f466b1e8b96c89b24058194fe8}

Executes javascript code in specified frame, this method does not report the result of the javascript. To get the result of the javascript execution use [executeJavascriptWithResult](#class_q_cef_view_1ad4f331cdfc2ca2ed0ab019d2c8857065)

#### Parameters
* `frameId` The frame id

* `code` The javascript code

* `url` The URL where the script in question can be found, if any. The renderer may request this URL to show the developer the source of the error 

#### Returns
True on successful; otherwise false

---
### `public bool `[`executeJavascriptWithResult`](#class_q_cef_view_1ad4f331cdfc2ca2ed0ab019d2c8857065)`(qint64 frameId, const QString & code, const QString & url, qint64 context)` {#class_q_cef_view_1ad4f331cdfc2ca2ed0ab019d2c8857065}

Executes javascript code in specified frame and the result will be reported through [reportJavascriptResult](#class_q_cef_view_1a3e5b637b042a2d17946a884f9bfc9bf0) signal.

#### Parameters
* `frameId` The frame id

* `code` The javascript code

* `url` The URL where the script in question can be found, if any. The renderer may request this URL to show the developer the source of the error 

* `context` The context used to identify the one execution

#### Returns
True on successful; otherwise false

---
### `public bool `[`setPreference`](#class_q_cef_view_1a2b4b3da8874855bbe2d558081233d948)`(const QString & name, const QVariant & value, const QString & error)` {#class_q_cef_view_1a2b4b3da8874855bbe2d558081233d948}

Sets the preference for this browser.

#### Parameters
* `name` The preference name

* `value` The preference value, if this value is QVariant::UnknownType or QVariant::Invalid, the preference will be restored to default value 

* `error` The error message populated on failure

---
### `public void `[`setDisablePopupContextMenu`](#class_q_cef_view_1acca71443b26dce09e81e3f937cedaa6b)`(bool disable)` {#class_q_cef_view_1acca71443b26dce09e81e3f937cedaa6b}

Sets whether to disable the context menu for popup browser.

#### Parameters
* `disable` True to disable; otherwise false

---
### `public bool `[`isPopupContextMenuDisabled`](#class_q_cef_view_1abb79735affb74166c0bed7f361ce1388)`()` {#class_q_cef_view_1abb79735affb74166c0bed7f361ce1388}

Gets whether to disable the context menu for popup browser.

#### Returns
True to disable; otherwise false

---
### `public bool `[`hasDevTools`](#class_q_cef_view_1a85fd904cbd3b91a72ce090cffb0119c8)`()` {#class_q_cef_view_1a85fd904cbd3b91a72ce090cffb0119c8}

Detects whether this browser has a devtools opened.

#### Returns
True if opend already; otherwise false

---
### `public void `[`showDevTools`](#class_q_cef_view_1a61845e6e370a57be5f3662ba37cd7b29)`()` {#class_q_cef_view_1a61845e6e370a57be5f3662ba37cd7b29}

Opens the devtools dialog.

---
### `public void `[`closeDevTools`](#class_q_cef_view_1abdf0a68139fe9163ecd9b5a0cdeed6d7)`()` {#class_q_cef_view_1abdf0a68139fe9163ecd9b5a0cdeed6d7}

Closes the devtools dialog.

---
### `public void `[`setFocus`](#class_q_cef_view_1a61ad737cd2354021f8310f323f4f8ada)`(Qt::FocusReason reason)` {#class_q_cef_view_1a61ad737cd2354021f8310f323f4f8ada}

Please refer to QWidget::setFocus.

---
### `public QVariant `[`inputMethodQuery`](#class_q_cef_view_1af25a011c126a9bb5dc3df99756a75368)`(Qt::InputMethodQuery query) const` {#class_q_cef_view_1af25a011c126a9bb5dc3df99756a75368}

Please refer to QWidget::inputMethodQuery.

---
### `protected virtual bool `[`onBeforePopup`](#class_q_cef_view_1a2889f3055a30625f39cecb697c15aa04)`(qint64 frameId, const QString & targetUrl, const QString & targetFrameName, `[`QCefView::CefWindowOpenDisposition`](#class_q_cef_view_1a9963d810f8aa71b45b1b10f0abbe8787)` targetDisposition, QRect & rect, `[`QCefSetting`](QCefSetting.md#class_q_cef_setting)` & settings)` {#class_q_cef_view_1a2889f3055a30625f39cecb697c15aa04}

Gets called before the popup browser created.

#### Parameters
* `frameId` The source frame id

* `targetUrl` The target URL

* `targetFrameName` The target name

* `targetDisposition` Target window open method

* `rect` Rect to be used for the popup

* `settings` Settings to be used for the popup

#### Returns
True to cancel the popup; false to allow

---
### `protected virtual void `[`onNewDownloadItem`](#class_q_cef_view_1a666e93d6e9f9be7444f9b898f77c8292)`(const QSharedPointer< `[`QCefDownloadItem`](QCefDownloadItem.md#class_q_cef_download_item)` > & item, const QString & suggestedName)` {#class_q_cef_view_1a666e93d6e9f9be7444f9b898f77c8292}

Gets called on new download item was required. Keep reference to the download item and call [QCefDownloadItem::start](QCefDownloadItem.md#class_q_cef_download_item_1a315592aa53a2bf7bc8aea717195f5b43) method to allow and start the download, Ignore the download item to disallow the download.

#### Parameters
* `item` The new download item

* `suggestedName` The new suggested name

---
### `protected virtual void `[`onUpdateDownloadItem`](#class_q_cef_view_1a9833a1db8ef5864489f9462ef397cbb8)`(const QSharedPointer< `[`QCefDownloadItem`](QCefDownloadItem.md#class_q_cef_download_item)` > & item)` {#class_q_cef_view_1a9833a1db8ef5864489f9462ef397cbb8}

Gets called on download item updated. To get this method called [QCefDownloadItem::start](QCefDownloadItem.md#class_q_cef_download_item_1a315592aa53a2bf7bc8aea717195f5b43) method must be called in newDownloadItem method.

#### Parameters
* `item` The download item

---
### `protected void `[`paintEvent`](#class_q_cef_view_1aa205502bb5238e6e2ce727046ed8a9b8)`(QPaintEvent * event)` {#class_q_cef_view_1aa205502bb5238e6e2ce727046ed8a9b8}

Please refer to QWidget::paintEvent.

---
### `protected void `[`inputMethodEvent`](#class_q_cef_view_1a02d713f4a0545e85832b70ddced7e831)`(QInputMethodEvent * event)` {#class_q_cef_view_1a02d713f4a0545e85832b70ddced7e831}

Please refer to QWidget::inputMethodEvent.

---
### `protected void `[`showEvent`](#class_q_cef_view_1a08dcba31e0d2860270ab3cd8055a5c4e)`(QShowEvent * event)` {#class_q_cef_view_1a08dcba31e0d2860270ab3cd8055a5c4e}

Please refer to QWidget::showEvent.

---
### `protected void `[`hideEvent`](#class_q_cef_view_1af2432e14ac8d9156594c3941ff6b4d14)`(QHideEvent * event)` {#class_q_cef_view_1af2432e14ac8d9156594c3941ff6b4d14}

Please refer to QWidget::hideEvent.

---
### `protected void `[`focusInEvent`](#class_q_cef_view_1a05bf10e1e318cf9cc4ad742ad61c9706)`(QFocusEvent * event)` {#class_q_cef_view_1a05bf10e1e318cf9cc4ad742ad61c9706}

Please refer to QWidget::focusInEvent.

---
### `protected void `[`focusOutEvent`](#class_q_cef_view_1a414b4c9efe5edd10c324c1e35e12d07c)`(QFocusEvent * event)` {#class_q_cef_view_1a414b4c9efe5edd10c324c1e35e12d07c}

Please refer to QWidget::focusOutEvent.

---
### `protected void `[`resizeEvent`](#class_q_cef_view_1a237797e9f77342d72c35a8017865988e)`(QResizeEvent * event)` {#class_q_cef_view_1a237797e9f77342d72c35a8017865988e}

Please refer to QWidget::resizeEvent.

---
### `protected void `[`keyPressEvent`](#class_q_cef_view_1a6aa89a0ce04dac5aa2c01545253ffc56)`(QKeyEvent * event)` {#class_q_cef_view_1a6aa89a0ce04dac5aa2c01545253ffc56}

Please refer to QWidget::keyPressEvent.

---
### `protected void `[`keyReleaseEvent`](#class_q_cef_view_1ab2d8e99188937bba13893ce6c54f9a3f)`(QKeyEvent * event)` {#class_q_cef_view_1ab2d8e99188937bba13893ce6c54f9a3f}

Please refer to QWidget::keyReleaseEvent.

---
### `protected void `[`mouseMoveEvent`](#class_q_cef_view_1a3bd541e981d7dbad0deceb64df0d3a5b)`(QMouseEvent * event)` {#class_q_cef_view_1a3bd541e981d7dbad0deceb64df0d3a5b}

Please refer to QWidget::mouseMoveEvent.

---
### `protected void `[`mousePressEvent`](#class_q_cef_view_1aac476c39493a4e75e681b9e09f13e060)`(QMouseEvent * event)` {#class_q_cef_view_1aac476c39493a4e75e681b9e09f13e060}

Please refer to QWidget::mousePressEvent.

---
### `protected void `[`mouseReleaseEvent`](#class_q_cef_view_1a69306a82128ba3e525103eb132aae62c)`(QMouseEvent * event)` {#class_q_cef_view_1a69306a82128ba3e525103eb132aae62c}

Please refer to QWidget::mouseReleaseEvent.

---
### `protected void `[`wheelEvent`](#class_q_cef_view_1a3395f62959288420a834c736933e7228)`(QWheelEvent * event)` {#class_q_cef_view_1a3395f62959288420a834c736933e7228}

Please refer to QWidget::wheelEvent.

---
### `protected void `[`contextMenuEvent`](#class_q_cef_view_1ac8a83d1f2fb0e771fb48007838b40d1f)`(QContextMenuEvent * event)` {#class_q_cef_view_1ac8a83d1f2fb0e771fb48007838b40d1f}

Please refer to QWidget::contextMenuEvent.

---
### `{signal} public void `[`loadingStateChanged`](#class_q_cef_view_1afb28155fd58760bd84cf45f634e054b5)`(int browserId, bool isLoading, bool canGoBack, bool canGoForward)` {#class_q_cef_view_1afb28155fd58760bd84cf45f634e054b5}

Gets called on loading state changed.

#### Parameters
* `browserId` Indicates the browser id

* `isLoading` Indicates the browser is loading

* `canGoBack` Indicates the browser can go back

* `canGoForward` Indicates the browser can go forward

---
### `{signal} public void `[`loadStart`](#class_q_cef_view_1a5b04e73d0be37fbe1cc55340ee213042)`(int browserId, qint64 frameId, bool isMainFrame, int transitionType)` {#class_q_cef_view_1a5b04e73d0be37fbe1cc55340ee213042}

Gets called on loading starts.

#### Parameters
* `browserId` Indicates the browser id

* `frameId` Indicates the frame id

* `isMainFrame` Indicates the whether this is the main frame

* `transitionType` transition type

---
### `{signal} public void `[`loadEnd`](#class_q_cef_view_1a5d64cbb95348336b85cb01f38de91e0a)`(int browserId, qint64 frameId, bool isMainFrame, int httpStatusCode)` {#class_q_cef_view_1a5d64cbb95348336b85cb01f38de91e0a}

Gets called on loading ends.

#### Parameters
* `browserId` Indicates the browser id

* `frameId` Indicates the frame id

* `isMainFrame` Indicates the whether this is the main frame

* `httpStatusCode` The HTTP status code

---
### `{signal} public void `[`loadError`](#class_q_cef_view_1a81ad0ea96d09d7ba705c4166502507e4)`(int browserId, qint64 frameId, bool isMainFrame, int errorCode, const QString & errorMsg, const QString & failedUrl)` {#class_q_cef_view_1a81ad0ea96d09d7ba705c4166502507e4}

Gets called on loading failed due to error.

#### Parameters
* `browserId` Indicates the browser id

* `frameId` Indicates the frame id

* `isMainFrame` Indicates the whether this is the main frame

* `errorCode` The error code

* `errorMsg` The error message

* `failedUrl` The url caused the failure

---
### `{signal} public void `[`draggableRegionChanged`](#class_q_cef_view_1ae11274817f627abf9d407e12dcd5c050)`(const QRegion & draggableRegion, const QRegion & nonDraggableRegion)` {#class_q_cef_view_1ae11274817f627abf9d407e12dcd5c050}

Gets called on draggable region changed.

#### Parameters
* `draggableRegion` The new draggable region

* `nonDraggableRegion` The new non-draggable region

---
### `{signal} public void `[`addressChanged`](#class_q_cef_view_1a89ce3bc031d5dcd1115482118a6c4181)`(qint64 frameId, const QString & url)` {#class_q_cef_view_1a89ce3bc031d5dcd1115482118a6c4181}

Gets called on the address changed.

#### Parameters
* `frameId` The frame id

* `url` The address

---
### `{signal} public void `[`titleChanged`](#class_q_cef_view_1a48c82c208cab769a1baa7177bc58b030)`(const QString & title)` {#class_q_cef_view_1a48c82c208cab769a1baa7177bc58b030}

Gets called on title changed.

#### Parameters
* `title` The title

---
### `{signal} public void `[`faviconURLChanged`](#class_q_cef_view_1a7b9e104469c1a4a203c2e1d7e9cfd2a7)`(const QStringList & urls)` {#class_q_cef_view_1a7b9e104469c1a4a203c2e1d7e9cfd2a7}

Gets called on favicon url changed.

#### Parameters
* `urls` The urls

---
### `{signal} public void `[`faviconChanged`](#class_q_cef_view_1aa5d4a7098414f929a4ca7dd6b72d0893)`(const QIcon & icon)` {#class_q_cef_view_1aa5d4a7098414f929a4ca7dd6b72d0893}

Gets called on favicon changed.

#### Parameters
* `icon` The icon

---
### `{signal} public void `[`fullscreenModeChanged`](#class_q_cef_view_1afa0fbb5b4c2c6c3592085e9b94dffc4a)`(bool fullscreen)` {#class_q_cef_view_1afa0fbb5b4c2c6c3592085e9b94dffc4a}

Gets called on fullscreen mode changed.

#### Parameters
* `fullscreen` The current fullscreen mode

---
### `{signal} public void `[`statusMessage`](#class_q_cef_view_1a86d10c28b8821a36723e3504fa0cc7e7)`(const QString & message)` {#class_q_cef_view_1a86d10c28b8821a36723e3504fa0cc7e7}

Gets called on status message changed.

#### Parameters
* `message` The status message

---
### `{signal} public void `[`consoleMessage`](#class_q_cef_view_1a2dae6946082712815273c2967d37762a)`(const QString & message, int level)` {#class_q_cef_view_1a2dae6946082712815273c2967d37762a}

Gets called on console message from the web content.

#### Parameters
* `message` The message

* `level` The level

---
### `{signal} public void `[`loadingProgressChanged`](#class_q_cef_view_1ac7377eeed6811bafca1e6887b64d62a5)`(double progress)` {#class_q_cef_view_1ac7377eeed6811bafca1e6887b64d62a5}

Gets called on loading progress changed.

#### Parameters
* `progress` Current progress

---
### `{signal} public void `[`cefQueryRequest`](#class_q_cef_view_1a9085b5e19ee6eb1306ec29e40f09c6e3)`(int browserId, qint64 frameId, const `[`QCefQuery`](QCefQuery.md#class_q_cef_query)` & query)` {#class_q_cef_view_1a9085b5e19ee6eb1306ec29e40f09c6e3}

Gets called on new [QCefQuery](QCefQuery.md#class_q_cef_query) request.

#### Parameters
* `browserId` The browser id

* `frameId` The frame id

* `query` The query request

---
### `{signal} public void `[`invokeMethod`](#class_q_cef_view_1a221d07818d4f6766f72c68319fecc24e)`(int browserId, qint64 frameId, const QString & method, const QVariantList & arguments)` {#class_q_cef_view_1a221d07818d4f6766f72c68319fecc24e}

Gets called on invoking method request from web content(Javascript)

#### Parameters
* `browserId` The browser id

* `frameId` The frame id

* `method` The method name

* `arguments` The arguments list

---
### `{signal} public void `[`reportJavascriptResult`](#class_q_cef_view_1a3e5b637b042a2d17946a884f9bfc9bf0)`(int browserId, qint64 frameId, qint64 context, const QVariant & result)` {#class_q_cef_view_1a3e5b637b042a2d17946a884f9bfc9bf0}

Gets called on the result of the javascript executed with [executeJavascriptWithResult](#class_q_cef_view_1ad4f331cdfc2ca2ed0ab019d2c8857065) returned.

#### Parameters
* `browserId` The browser id

* `frameId` The frame id

* `context` The context

* `result` The result

---
### `{signal} public void `[`nativeBrowserCreated`](#class_q_cef_view_1a543b0eca797c5161d6325665d5ddd576)`(QWindow * window)` {#class_q_cef_view_1a543b0eca797c5161d6325665d5ddd576}

Gets called after the native browser window created. This slot does not work for OSR mode.

#### Parameters
* `window` The native browser windows

---
### `{signal} public void `[`popupCreated`](#class_q_cef_view_1ab008a40ecfdd9a616e31b401514ac1e3)`(`[`QCefView`](#class_q_cef_view)` * popup)` {#class_q_cef_view_1ab008a40ecfdd9a616e31b401514ac1e3}

Gets called right after the popup browser was created.

#### Parameters
* `popup` The new created popup [QCefView](#class_q_cef_view) instance

The lifecycle of the popup browser is managed by the owner of the popup browser, thus do not try to hold the popup browser instance. If you need to implement browser tab, you should override the [onBeforePopup](#class_q_cef_view_1a2889f3055a30625f39cecb697c15aa04) method and create your own [QCefView](#class_q_cef_view) browser instance then you can manipulate the created one as whatever you want.

---
### `{slot} public inline void `[`setFocus`](#class_q_cef_view_1a9b1b42857e38a9f5c6c810fd51593788)`()` {#class_q_cef_view_1a9b1b42857e38a9f5c6c810fd51593788}

---
### `enum `[`CefWindowOpenDisposition`](#class_q_cef_view_1a9963d810f8aa71b45b1b10f0abbe8787) {#class_q_cef_view_1a9963d810f8aa71b45b1b10f0abbe8787}

Represents the CEF popup windows open disposition.

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CefWindowOpenDispositionUnknown            | 
CefWindowOpenDispositionCurrentTab            | 
CefWindowOpenDispositionSingletonTab            | 
CefWindowOpenDispositionNewForeGroundTab            | 
CefWindowOpenDispositionNewBackgroundTab            | 
CefWindowOpenDispositionNewPopup            | 
CefWindowOpenDispositionNewWindow            | 
CefWindowOpenDispositionSaveToDisk            | 
CefWindowOpenDispositionOffTheRecord            | 
CefWindowOpenDispositionIgnoreAction            | 

---
### `private QScopedPointer< QCefViewPrivate > `[`d_ptr`](#class_q_cef_view_1a6882524bec20e1620311b3853750638f) {#class_q_cef_view_1a6882524bec20e1620311b3853750638f}

