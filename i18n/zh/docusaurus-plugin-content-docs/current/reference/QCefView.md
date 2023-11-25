---
title: QCefView
---

# class `QCefView` {#class_q_cef_view}

```
class QCefView
  : public QWidget
```

表示 CEF 浏览器视图

## 总结

 成员                                                         | 描述                                                         
 ------------------------------------------------------------ | ------------------------------------------------------------ 
 `public  `[`QCefView`](#class_q_cef_view_1a203cdf24f64a5582f7c79e2401e9d8ca)`(const QString & url, const `[`QCefSetting`](QCefSetting.md#class_q_cef_setting)` * setting, QWidget * parent, Qt::WindowFlags f)` | [QCefView](#class_q_cef_view) 有参构造函数                   
 `public  `[`QCefView`](#class_q_cef_view_1a11c38eefb7b152dbf73620cb23922df0)`(QWidget * parent, Qt::WindowFlags f)` | [QCefView](#class_q_cef_view) 有参构造函数                   
 `public  `[`~QCefView`](#class_q_cef_view_1a70903dca8ccd3e2776d68742531177fd)`()` | [QCefView](#class_q_cef_view) 析构函数                       
 `public void `[`addLocalFolderResource`](#class_q_cef_view_1a8c6286b279094a691832fc89b93c75f1)`(const QString & path, const QString & url, int priority)` | 添加具有本地 Web 资源目录的 url 映射项                       
 `public void `[`addArchiveResource`](#class_q_cef_view_1a503148f8ff5ca5b28d3f0e123bf5bf76)`(const QString & path, const QString & url, const QString & password, int priority)` | 使用包含 Web 资源的本地存档 （.zip） 文件添加 url 映射项     
 `public int `[`browserId`](#class_q_cef_view_1ae4aa1652bf9852ed744dd38487bbb748)`()` | 获取浏览器 ID                                                
 `public void `[`navigateToString`](#class_q_cef_view_1ac3b8ec3b088422a67f93fc580047a1a0)`(const QString & content)` | 导航到内容                                                   
 `public void `[`navigateToUrl`](#class_q_cef_view_1a4bf036d5a7d128d4c1487afaa0393d5b)`(const QString & url)` | 导航到网址                                                   
 `public bool `[`browserCanGoBack`](#class_q_cef_view_1a01100f7ab97f9f643e4f23af5cea9900)`()` | 检查浏览器是否可以返回                                       
 `public bool `[`browserCanGoForward`](#class_q_cef_view_1ae1d6a6d94e02a54654463e5b0c491624)`()` | 检查浏览器是否可以前进                                       
 `public void `[`browserGoBack`](#class_q_cef_view_1aa82e1ceaa7f543f8d99d7d9cbf714382)`()` | 要求浏览器返回                                               
 `public void `[`browserGoForward`](#class_q_cef_view_1a9ce96fbf25701594b8d65381661141db)`()` | 要求浏览器前进                                               
 `public bool `[`browserIsLoading`](#class_q_cef_view_1a12ca0bc0f4fc55dfc838769990d6a6d7)`()` | 检查浏览器是否正在加载                                       
 `public void `[`browserReload`](#class_q_cef_view_1a45bc8cd7340ce410cf873d7296ffacf6)`()` | 要求浏览器重新加载                                           
 `public void `[`browserStopLoad`](#class_q_cef_view_1afadd210f3c5cd95598b18aa158a9c16f)`()` | 要求浏览器停止加载                                           
 `public bool `[`triggerEvent`](#class_q_cef_view_1ac47c23ffcd94bdffe2b6a81eaae077a2)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event)` | 触发主框架的事件                                             
 `public bool `[`triggerEvent`](#class_q_cef_view_1ab6afab6f26fb1a1b4f3b25d2fe9c2f13)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event, qint64 frameId)` | 触发指定frame的事件                                          
 `public bool `[`broadcastEvent`](#class_q_cef_view_1ad5455e3a8cb0ffa1f9d7cb98307a6bb4)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event)` | 为所有frame广播事件                                          
 `public bool `[`responseQCefQuery`](#class_q_cef_view_1afc838dab54d2b083b05f0d98349b50cc)`(const `[`QCefQuery`](QCefQuery.md#class_q_cef_query)` & query)` | 响应 [QCefQuery](QCefQuery.md#class_q_cef_query) 请求        
 `public bool `[`executeJavascript`](#class_q_cef_view_1a79a5f1f466b1e8b96c89b24058194fe8)`(qint64 frameId, const QString & code, const QString & url)` | 在指定的frame中执行javascript代码，此方法不报告javascript的结果。要获取 javascript 执行的结果，请使用[executeJavascriptWithResult](#class_q_cef_view_1a7821e30519551df55c8e4a2373456b3b) 
 `public bool `[`executeJavascriptWithResult`](#class_q_cef_view_1a7821e30519551df55c8e4a2373456b3b)`(qint64 frameId, const QString & code, const QString & url, const QString & context)` | 在指定的frame中执行javascript代码，结果将通过[reportJavascriptResult](#class_q_cef_view_1aee8e52d6a036df33dda1ea1193b56962) 信号发送 
 `public bool `[`setPreference`](#class_q_cef_view_1a2b4b3da8874855bbe2d558081233d948)`(const QString & name, const QVariant & value, const QString & error)` | 设置此浏览器的首选项                                         
 `public void `[`setDisablePopupContextMenu`](#class_q_cef_view_1acca71443b26dce09e81e3f937cedaa6b)`(bool disable)` | 设置是否禁用弹出浏览器的上下文菜单                           
 `public bool `[`isPopupContextMenuDisabled`](#class_q_cef_view_1abb79735affb74166c0bed7f361ce1388)`()` | 获取是否禁用弹出浏览器的上下文菜单                           
 `public bool `[`hasDevTools`](#class_q_cef_view_1a85fd904cbd3b91a72ce090cffb0119c8)`()` | 检测此浏览器是否打开了devtools                               
 `public void `[`showDevTools`](#class_q_cef_view_1a61845e6e370a57be5f3662ba37cd7b29)`()` | 打开 devtools 对话框                                         
 `public void `[`closeDevTools`](#class_q_cef_view_1abdf0a68139fe9163ecd9b5a0cdeed6d7)`()` | 关闭 devtools 对话框                                         
 `public void `[`setEnableDragAndDrop`](#class_q_cef_view_1af73ef1d6f77a31b528c729cf7379abfb)`(bool enable)` | 设置是否启用拖拽                                             
 `public bool `[`isDragAndDropEnabled`](#class_q_cef_view_1a2a8a2ebaedb88ccd80536c66d878ff8a)`() const` | 获取是否启用拖拽                                             
 `public void `[`setFocus`](#class_q_cef_view_1a61ad737cd2354021f8310f323f4f8ada)`(Qt::FocusReason reason)` | 请参考 `QWidget::setFocus`                                   
 `public QVariant `[`inputMethodQuery`](#class_q_cef_view_1af25a011c126a9bb5dc3df99756a75368)`(Qt::InputMethodQuery query) const` | 请参考`QWidget::inputMethodQuery`                            
 `public void `[`render`](#class_q_cef_view_1ad098ad3ed18da915880f21df52817fa9)`(QPainter * painter)` | 将视图内容渲染到目标 painter                                 
 `protected virtual `[`QCefView`](#class_q_cef_view)` * `[`onNewBrowser`](#class_q_cef_view_1a0aa0b257b5383428569d46c39d4003a2)`(qint64 sourceFrameId, const QString & url, const QString & name, `[`QCefView::CefWindowOpenDisposition`](#class_q_cef_view_1a9963d810f8aa71b45b1b10f0abbe8787)` targetDisposition, QRect & rect, `[`QCefSetting`](QCefSetting.md#class_q_cef_setting)` & settings)` | 在创建新浏览器之前调用（仅适用于由非JavaScript创建的浏览器） 
 `protected virtual bool `[`onNewPopup`](#class_q_cef_view_1aff9055d5f9f773c2582c20b4bdf0cd33)`(qint64 frameId, const QString & targetUrl, QString & targetFrameName, `[`QCefView::CefWindowOpenDisposition`](#class_q_cef_view_1a9963d810f8aa71b45b1b10f0abbe8787)` targetDisposition, QRect & rect, `[`QCefSetting`](QCefSetting.md#class_q_cef_setting)` & settings, bool & disableJavascriptAccess)` | 在创建弹出式浏览器之前调用(仅用于由 JavaScript 创建的浏览器) 
 `protected virtual void `[`onNewDownloadItem`](#class_q_cef_view_1a666e93d6e9f9be7444f9b898f77c8292)`(const QSharedPointer< `[`QCefDownloadItem`](QCefDownloadItem.md#class_q_cef_download_item)` > & item, const QString & suggestedName)` | 需要对新下载项的调用。保留对下载项的引用并调用 [QCefDownloadItem::start](QCefDownloadItem.md#class_q_cef_download_item_1a315592aa53a2bf7bc8aea717195f5b43) 方法以允许并启动下载，忽略下载项以禁止下载 
 `protected virtual void `[`onUpdateDownloadItem`](#class_q_cef_view_1a9833a1db8ef5864489f9462ef397cbb8)`(const QSharedPointer< `[`QCefDownloadItem`](QCefDownloadItem.md#class_q_cef_download_item)` > & item)` | 在更新下载项时调用。 若要获取[QCefDownloadItem::start](QCefDownloadItem.md#class_q_cef_download_item_1a315592aa53a2bf7bc8aea717195f5b43)的方法，必须在 newDownloadItem 方法中调用 
 `protected virtual bool `[`onRequestCloseFromWeb`](#class_q_cef_view_1ad23057b6187876c84f883b1e7120456d)`()` | 在来自 web 的关闭请求时调用                                  
 `protected void `[`paintEvent`](#class_q_cef_view_1aa205502bb5238e6e2ce727046ed8a9b8)`(QPaintEvent * event)` | 请参考 `QWidget::paintEvent`                                 
 `protected void `[`inputMethodEvent`](#class_q_cef_view_1a02d713f4a0545e85832b70ddced7e831)`(QInputMethodEvent * event)` | 请参考 `QWidget::inputMethodEvent`                           
 `protected void `[`showEvent`](#class_q_cef_view_1a08dcba31e0d2860270ab3cd8055a5c4e)`(QShowEvent * event)` | 请参考 `QWidget::showEvent`                                  
 `protected void `[`hideEvent`](#class_q_cef_view_1af2432e14ac8d9156594c3941ff6b4d14)`(QHideEvent * event)` | 请参考 `QWidget::hideEvent`                                  
 `protected void `[`focusInEvent`](#class_q_cef_view_1a05bf10e1e318cf9cc4ad742ad61c9706)`(QFocusEvent * event)` | 请参考 `QWidget::focusInEvent`                               
 `protected void `[`focusOutEvent`](#class_q_cef_view_1a414b4c9efe5edd10c324c1e35e12d07c)`(QFocusEvent * event)` | 请参考 `QWidget::focusOutEvent`                              
 `protected void `[`resizeEvent`](#class_q_cef_view_1a237797e9f77342d72c35a8017865988e)`(QResizeEvent * event)` | 请参考 `QWidget::resizeEvent`                                
 `protected void `[`keyPressEvent`](#class_q_cef_view_1a6aa89a0ce04dac5aa2c01545253ffc56)`(QKeyEvent * event)` | 请参考 `QWidget::keyPressEvent`                              
 `protected void `[`keyReleaseEvent`](#class_q_cef_view_1ab2d8e99188937bba13893ce6c54f9a3f)`(QKeyEvent * event)` | 请参考 `QWidget::keyReleaseEvent`                            
 `protected void `[`mouseMoveEvent`](#class_q_cef_view_1a3bd541e981d7dbad0deceb64df0d3a5b)`(QMouseEvent * event)` | 请参考 `QWidget::mouseMoveEvent`                             
 `protected void `[`mousePressEvent`](#class_q_cef_view_1aac476c39493a4e75e681b9e09f13e060)`(QMouseEvent * event)` | 请参考 `QWidget::mousePressEvent`                            
 `protected void `[`mouseReleaseEvent`](#class_q_cef_view_1a69306a82128ba3e525103eb132aae62c)`(QMouseEvent * event)` | 请参考 `QWidget::mouseReleaseEvent`                          
 `protected void `[`wheelEvent`](#class_q_cef_view_1a3395f62959288420a834c736933e7228)`(QWheelEvent * event)` | 请参考 `QWidget::wheelEvent`                                 
 `protected void `[`contextMenuEvent`](#class_q_cef_view_1ac8a83d1f2fb0e771fb48007838b40d1f)`(QContextMenuEvent * event)` | 请参考 `QWidget::contextMenuEvent`                           
 `{signal} public void `[`loadingStateChanged`](#class_q_cef_view_1afb28155fd58760bd84cf45f634e054b5)`(int browserId, bool isLoading, bool canGoBack, bool canGoForward)` | 加载状态更改时调用                                           
 `{signal} public void `[`loadStart`](#class_q_cef_view_1a0165da07749c09130e0007a4ceff59ca)`(int browserId, qint64 frameId, bool isMainFrame, int transition_type)` | 在加载开始时被调用                                           
 `{signal} public void `[`loadEnd`](#class_q_cef_view_1a5d64cbb95348336b85cb01f38de91e0a)`(int browserId, qint64 frameId, bool isMainFrame, int httpStatusCode)` | 在加载结束时被调用                                           
 `{signal} public void `[`loadError`](#class_q_cef_view_1a81ad0ea96d09d7ba705c4166502507e4)`(int browserId, qint64 frameId, bool isMainFrame, int errorCode, const QString & errorMsg, const QString & failedUrl)` | 由于错误导致加载失败时被调用                                 
 `{signal} public void `[`draggableRegionChanged`](#class_q_cef_view_1ae11274817f627abf9d407e12dcd5c050)`(const QRegion & draggableRegion, const QRegion & nonDraggableRegion)` | 在可拖动区域更改时调用                                       
 `{signal} public void `[`addressChanged`](#class_q_cef_view_1a89ce3bc031d5dcd1115482118a6c4181)`(qint64 frameId, const QString & url)` | 在网址更改时被调用                                           
 `{signal} public void `[`titleChanged`](#class_q_cef_view_1a48c82c208cab769a1baa7177bc58b030)`(const QString & title)` | 网站标题更改时被调用                                         
 `{signal} public void `[`faviconURLChanged`](#class_q_cef_view_1a7b9e104469c1a4a203c2e1d7e9cfd2a7)`(const QStringList & urls)` | 网站图标地址更改时被调用                                     
 `{signal} public void `[`fullscreenModeChanged`](#class_q_cef_view_1afa0fbb5b4c2c6c3592085e9b94dffc4a)`(bool fullscreen)` | 在全屏模式更改时被调用                                       
 `{signal} public void `[`statusMessage`](#class_q_cef_view_1a86d10c28b8821a36723e3504fa0cc7e7)`(const QString & message)` | 状态消息更改时被调用                                         
 `{signal} public void `[`consoleMessage`](#class_q_cef_view_1a2dae6946082712815273c2967d37762a)`(const QString & message, int level)` | 从 Web 内容调用控制台消息                                    
 `{signal} public void `[`loadingProgressChanged`](#class_q_cef_view_1ac7377eeed6811bafca1e6887b64d62a5)`(double progress)` | 加载进度更改时调用                                           
 `{signal} public void `[`cefQueryRequest`](#class_q_cef_view_1a9085b5e19ee6eb1306ec29e40f09c6e3)`(int browserId, qint64 frameId, const `[`QCefQuery`](QCefQuery.md#class_q_cef_query)` & query)` | 在新的 [QCefQuery](QCefQuery.md#class_q_cef_query) 请求上被调用 
 `{signal} public void `[`invokeMethod`](#class_q_cef_view_1a221d07818d4f6766f72c68319fecc24e)`(int browserId, qint64 frameId, const QString & method, const QVariantList & arguments)` | 在从 Web 内容调用方法请求时调用（Javascript）                
 `{signal} public void `[`reportJavascriptResult`](#class_q_cef_view_1aee8e52d6a036df33dda1ea1193b56962)`(int browserId, qint64 frameId, const QString & context, const QVariant & result)` | 在返回  [executeJavascriptWithResult](#class_q_cef_view_1a7821e30519551df55c8e4a2373456b3b)  执行的 javascript 的结果时进行调用 
 `{signal} public void `[`nativeBrowserCreated`](#class_q_cef_view_1a543b0eca797c5161d6325665d5ddd576)`(QWindow * window)` | 在创建原生浏览器窗口后调用。不适用于 OSR 模式                
 `{slot} public inline void `[`setFocus`](#class_q_cef_view_1a9b1b42857e38a9f5c6c810fd51593788)`()` | 请参考`QWidget::setFocus`                                    
 `enum `[`CefWindowOpenDisposition`](#class_q_cef_view_1a9963d810f8aa71b45b1b10f0abbe8787) | 表示 CEF 弹出窗口的打开配置                                  
 `private QScopedPointer< QCefViewPrivate > `[`d_ptr`](#class_q_cef_view_1a6882524bec20e1620311b3853750638f) |                                                              

## Members

---
### `public  `[`QCefView`](#class_q_cef_view_1a203cdf24f64a5582f7c79e2401e9d8ca)`(const QString & url, const `[`QCefSetting`](QCefSetting.md#class_q_cef_setting)` * setting, QWidget * parent, Qt::WindowFlags f)` {#class_q_cef_view_1a203cdf24f64a5582f7c79e2401e9d8ca}

[QCefView](#class_q_cef_view) 有参构造函数

#### 参数
* `url` 目标网址

* `setting` [QCefSetting](QCefSetting.md#class_q_cef_setting) 实例

* `parent` 父对象

---
### `public  `[`QCefView`](#class_q_cef_view_1a11c38eefb7b152dbf73620cb23922df0)`(QWidget * parent, Qt::WindowFlags f)` {#class_q_cef_view_1a11c38eefb7b152dbf73620cb23922df0}

[QCefView](#class_q_cef_view) 有参构造函数

#### 参数
* `parent` 父对象

---
### `public  `[`~QCefView`](#class_q_cef_view_1a70903dca8ccd3e2776d68742531177fd)`()` {#class_q_cef_view_1a70903dca8ccd3e2776d68742531177fd}

[QCefView](#class_q_cef_view) 析构函数

---
### `public void `[`addLocalFolderResource`](#class_q_cef_view_1a8c6286b279094a691832fc89b93c75f1)`(const QString & path, const QString & url, int priority)` {#class_q_cef_view_1a8c6286b279094a691832fc89b93c75f1}

添加具有本地 Web 资源目录的 url 映射项

#### 参数
* `path` 本地资源目录的路径

* `url` 要映射到的网址

* `priority` 优先级

---
### `public void `[`addArchiveResource`](#class_q_cef_view_1a503148f8ff5ca5b28d3f0e123bf5bf76)`(const QString & path, const QString & url, const QString & password, int priority)` {#class_q_cef_view_1a503148f8ff5ca5b28d3f0e123bf5bf76}

使用包含 Web 资源的本地存档 （.zip） 文件添加 url 映射项

#### 参数
* `path` 本地存档文件的路径

* `url` 要映射到的网址

* `password` 存档的密码

* `priority` 优先级

---
### `public int `[`browserId`](#class_q_cef_view_1ae4aa1652bf9852ed744dd38487bbb748)`()` {#class_q_cef_view_1ae4aa1652bf9852ed744dd38487bbb748}

获取浏览器 ID

#### 返回值
浏览器 ID 标识

---
### `public void `[`navigateToString`](#class_q_cef_view_1ac3b8ec3b088422a67f93fc580047a1a0)`(const QString & content)` {#class_q_cef_view_1ac3b8ec3b088422a67f93fc580047a1a0}

导航到内容

#### 参数
* `content` 内容

---
### `public void `[`navigateToUrl`](#class_q_cef_view_1a4bf036d5a7d128d4c1487afaa0393d5b)`(const QString & url)` {#class_q_cef_view_1a4bf036d5a7d128d4c1487afaa0393d5b}

导航到网址

#### 参数
* `url` 网址

---
### `public bool `[`browserCanGoBack`](#class_q_cef_view_1a01100f7ab97f9f643e4f23af5cea9900)`()` {#class_q_cef_view_1a01100f7ab97f9f643e4f23af5cea9900}

检查浏览器是否可以返回

#### 返回值
如果可以，则为true;否则为false

---
### `public bool `[`browserCanGoForward`](#class_q_cef_view_1ae1d6a6d94e02a54654463e5b0c491624)`()` {#class_q_cef_view_1ae1d6a6d94e02a54654463e5b0c491624}

检查浏览器是否可以前进

#### 返回值
如果可以，则为true;否则为false

---
### `public void `[`browserGoBack`](#class_q_cef_view_1aa82e1ceaa7f543f8d99d7d9cbf714382)`()` {#class_q_cef_view_1aa82e1ceaa7f543f8d99d7d9cbf714382}

要求浏览器返回

---
### `public void `[`browserGoForward`](#class_q_cef_view_1a9ce96fbf25701594b8d65381661141db)`()` {#class_q_cef_view_1a9ce96fbf25701594b8d65381661141db}

要求浏览器前进

---
### `public bool `[`browserIsLoading`](#class_q_cef_view_1a12ca0bc0f4fc55dfc838769990d6a6d7)`()` {#class_q_cef_view_1a12ca0bc0f4fc55dfc838769990d6a6d7}

检查浏览器是否正在加载

#### 返回值
如果正在加载，则为 true;否则为false

---
### `public void `[`browserReload`](#class_q_cef_view_1a45bc8cd7340ce410cf873d7296ffacf6)`()` {#class_q_cef_view_1a45bc8cd7340ce410cf873d7296ffacf6}

要求浏览器重新加载

---
### `public void `[`browserStopLoad`](#class_q_cef_view_1afadd210f3c5cd95598b18aa158a9c16f)`()` {#class_q_cef_view_1afadd210f3c5cd95598b18aa158a9c16f}

要求浏览器停止加载

---
### `public bool `[`triggerEvent`](#class_q_cef_view_1ac47c23ffcd94bdffe2b6a81eaae077a2)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event)` {#class_q_cef_view_1ac47c23ffcd94bdffe2b6a81eaae077a2}

触发主框架的事件

#### 参数
* `event` [QCefEvent](QCefEvent.md#class_q_cef_event) 实例

#### 返回值
成功时为true;否则为false

---
### `public bool `[`triggerEvent`](#class_q_cef_view_1ab6afab6f26fb1a1b4f3b25d2fe9c2f13)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event, qint64 frameId)` {#class_q_cef_view_1ab6afab6f26fb1a1b4f3b25d2fe9c2f13}

触发指定frame的事件

#### 参数
* `event` [QCefEvent](QCefEvent.md#class_q_cef_event) 实例

* `frameId` frame ID

#### 返回值
成功时为true;否则为false

---
### `public bool `[`broadcastEvent`](#class_q_cef_view_1ad5455e3a8cb0ffa1f9d7cb98307a6bb4)`(const `[`QCefEvent`](QCefEvent.md#class_q_cef_event)` & event)` {#class_q_cef_view_1ad5455e3a8cb0ffa1f9d7cb98307a6bb4}

为所有frame广播事件

#### 参数
* `event` [QCefEvent](QCefEvent.md#class_q_cef_event) 实例

#### 返回值
成功时为true;否则为false

---
### `public bool `[`responseQCefQuery`](#class_q_cef_view_1afc838dab54d2b083b05f0d98349b50cc)`(const `[`QCefQuery`](QCefQuery.md#class_q_cef_query)` & query)` {#class_q_cef_view_1afc838dab54d2b083b05f0d98349b50cc}

响应 [QCefQuery](QCefQuery.md#class_q_cef_query) 请求

#### 参数
* `query` [QCefQuery](QCefQuery.md#class_q_cef_query) 实例

#### 返回值
成功时为true;否则为false

---
### `public bool `[`executeJavascript`](#class_q_cef_view_1a79a5f1f466b1e8b96c89b24058194fe8)`(qint64 frameId, const QString & code, const QString & url)` {#class_q_cef_view_1a79a5f1f466b1e8b96c89b24058194fe8}

在指定的frame中执行javascript代码，此方法不报告javascript的结果。要获取 javascript 执行的结果，请使用 [executeJavascriptWithResult](#class_q_cef_view_1a7821e30519551df55c8e4a2373456b3b)

#### 参数
* `frameId` frame ID

* `code` JavaScript代码

* `url` 可在其中找到相关脚本的 URL（如果有）。渲染器可能会请求此 URL 以向开发人员显示错误的来源

#### 返回值
成功时为true;否则为false

---
### `public bool `[`executeJavascriptWithResult`](#class_q_cef_view_1a7821e30519551df55c8e4a2373456b3b)`(qint64 frameId, const QString & code, const QString & url, const QString & context)` {#class_q_cef_view_1a7821e30519551df55c8e4a2373456b3b}

在指定的frame中执行javascript代码，结果将通过 [reportJavascriptResult](#class_q_cef_view_1aee8e52d6a036df33dda1ea1193b56962) 信号发送

#### 参数
* `frameId` frame ID

* `code` JavaScript 代码

* `url` 可在其中找到相关脚本的 URL（如果有）。渲染器可能会请求此 URL 以向开发人员显示错误的来源

* `context` 用于标识一个执行的上下文

#### 返回值
成功时为true;否则为false

---
### `public bool `[`setPreference`](#class_q_cef_view_1a2b4b3da8874855bbe2d558081233d948)`(const QString & name, const QVariant & value, const QString & error)` {#class_q_cef_view_1a2b4b3da8874855bbe2d558081233d948}

设置此浏览器的首选项

#### 参数
* `name` 首选项名称
* `value` 首选项值，如果此值为 `QVariant::UnknownType` 或者 `QVariant::Invalid`, 则首选项将恢复为默认值
* `error` 失败时填充的错误消息

#### 返回值
成功时为true;否则为false

---
### `public void `[`setDisablePopupContextMenu`](#class_q_cef_view_1acca71443b26dce09e81e3f937cedaa6b)`(bool disable)` {#class_q_cef_view_1acca71443b26dce09e81e3f937cedaa6b}

设置是否禁用弹出浏览器的上下文菜单

#### 参数
* `disable` True 表示禁用;false 表示启用

---
### `public bool `[`isPopupContextMenuDisabled`](#class_q_cef_view_1abb79735affb74166c0bed7f361ce1388)`()` {#class_q_cef_view_1abb79735affb74166c0bed7f361ce1388}

 获取是否禁用弹出浏览器的上下文菜单

#### 返回值
True 表示禁用;false 表示启用

---
### `public bool `[`hasDevTools`](#class_q_cef_view_1a85fd904cbd3b91a72ce090cffb0119c8)`()` {#class_q_cef_view_1a85fd904cbd3b91a72ce090cffb0119c8}

检测此浏览器是否打开了devtools

#### 返回值
如果已经打开，则为 true; 否则为 false

---
### `public void `[`showDevTools`](#class_q_cef_view_1a61845e6e370a57be5f3662ba37cd7b29)`()` {#class_q_cef_view_1a61845e6e370a57be5f3662ba37cd7b29}

打开 devtools 对话框

---
### `public void `[`closeDevTools`](#class_q_cef_view_1abdf0a68139fe9163ecd9b5a0cdeed6d7)`()` {#class_q_cef_view_1abdf0a68139fe9163ecd9b5a0cdeed6d7}

关闭 devtools 对话框

---
### `public void `[`setEnableDragAndDrop`](#class_q_cef_view_1af73ef1d6f77a31b528c729cf7379abfb)`(bool enable)` {#class_q_cef_view_1af73ef1d6f77a31b528c729cf7379abfb}

设置是否启用拖拽

#### 参数
* `enable` True 表示启用;false 表示禁用

不适用于OSR模式。注意这里有一个问题，当将文件拖动到非拖动区域时，将显示该文件的内容。你需要自己解决这个问题。

---
### `public bool `[`isDragAndDropEnabled`](#class_q_cef_view_1a2a8a2ebaedb88ccd80536c66d878ff8a)`() const` {#class_q_cef_view_1a2a8a2ebaedb88ccd80536c66d878ff8a}

获取是否启用拖拽

#### 返回值
True 表示启用;false 表示禁用

---
### `public void `[`setFocus`](#class_q_cef_view_1a61ad737cd2354021f8310f323f4f8ada)`(Qt::FocusReason reason)` {#class_q_cef_view_1a61ad737cd2354021f8310f323f4f8ada}

请参考 `QWidget::setFocus`

---
### `public QVariant `[`inputMethodQuery`](#class_q_cef_view_1af25a011c126a9bb5dc3df99756a75368)`(Qt::InputMethodQuery query) const` {#class_q_cef_view_1af25a011c126a9bb5dc3df99756a75368}

请参考 QWidget::inputMethodQuery

---
### `public void `[`render`](#class_q_cef_view_1ad098ad3ed18da915880f21df52817fa9)`(QPainter * painter)` {#class_q_cef_view_1ad098ad3ed18da915880f21df52817fa9}

将视图内容渲染到目标 painter

#### 参数
* `painter` 目标 painter

---
### `protected virtual `[`QCefView`](#class_q_cef_view)` * `[`onNewBrowser`](#class_q_cef_view_1a0aa0b257b5383428569d46c39d4003a2)`(qint64 sourceFrameId, const QString & url, const QString & name, `[`QCefView::CefWindowOpenDisposition`](#class_q_cef_view_1a9963d810f8aa71b45b1b10f0abbe8787)` targetDisposition, QRect & rect, `[`QCefSetting`](QCefSetting.md#class_q_cef_setting)` & settings)` {#class_q_cef_view_1a0aa0b257b5383428569d46c39d4003a2}

在创建新浏览器之前调用（仅适用于由非JavaScript创建的浏览器）

#### 参数
* `frameId` 源 frame ID

* `url` 目标网址

* `name` 目标名称

* `targetDisposition` 目标窗口打开方法

* `rect` 用于弹出窗口的矩形

* `settings` 用于弹出窗口的设置

#### 返回值
如果为 true，则取消弹出窗口;false表示允许

---
### `protected virtual bool `[`onNewPopup`](#class_q_cef_view_1aff9055d5f9f773c2582c20b4bdf0cd33)`(qint64 frameId, const QString & targetUrl, QString & targetFrameName, `[`QCefView::CefWindowOpenDisposition`](#class_q_cef_view_1a9963d810f8aa71b45b1b10f0abbe8787)` targetDisposition, QRect & rect, `[`QCefSetting`](QCefSetting.md#class_q_cef_setting)` & settings, bool & disableJavascriptAccess)` {#class_q_cef_view_1aff9055d5f9f773c2582c20b4bdf0cd33}

在创建弹出式浏览器之前调用(仅用于由 JavaScript 创建的浏览器)

#### 参数
* `frameId` 源 frame ID

* `targetUrl` 目标网址

* `targetFrameName` 目标名称

* `targetDisposition` 目标窗口打开方法

* `settings` 用于弹出窗口的设置

* `rect` 用于弹出窗口的矩形

#### 返回值
如果为 true，则取消弹出窗口;false表示允许

---
### `protected virtual void `[`onNewDownloadItem`](#class_q_cef_view_1a666e93d6e9f9be7444f9b898f77c8292)`(const QSharedPointer< `[`QCefDownloadItem`](QCefDownloadItem.md#class_q_cef_download_item)` > & item, const QString & suggestedName)` {#class_q_cef_view_1a666e93d6e9f9be7444f9b898f77c8292}

需要对新下载项的调用。保留对下载项的引用并调用 [QCefDownloadItem::start](QCefDownloadItem.md#class_q_cef_download_item_1a315592aa53a2bf7bc8aea717195f5b43) 方法以允许并启动下载，忽略下载项以禁止下载

#### 参数
* `item` 新的下载项目

* `suggestedName` 新的建议的名称

---
### `protected virtual void `[`onUpdateDownloadItem`](#class_q_cef_view_1a9833a1db8ef5864489f9462ef397cbb8)`(const QSharedPointer< `[`QCefDownloadItem`](QCefDownloadItem.md#class_q_cef_download_item)` > & item)` {#class_q_cef_view_1a9833a1db8ef5864489f9462ef397cbb8}

在更新下载项时调用。 若要获取 [QCefDownloadItem::start](QCefDownloadItem.md#class_q_cef_download_item_1a315592aa53a2bf7bc8aea717195f5b43) 的方法，必须在 newDownloadItem 方法中调用

#### 参数
* `item` 下载项目

---
### `protected virtual bool `[`onRequestCloseFromWeb`](#class_q_cef_view_1ad23057b6187876c84f883b1e7120456d)`()` {#class_q_cef_view_1ad23057b6187876c84f883b1e7120456d}

在来自 web 的关闭请求时调用

#### 返回值
True 表示允许关闭, false 取消关闭

---
### `protected void `[`paintEvent`](#class_q_cef_view_1aa205502bb5238e6e2ce727046ed8a9b8)`(QPaintEvent * event)` {#class_q_cef_view_1aa205502bb5238e6e2ce727046ed8a9b8}

请参考 QWidget::paintEvent

---
### `protected void `[`inputMethodEvent`](#class_q_cef_view_1a02d713f4a0545e85832b70ddced7e831)`(QInputMethodEvent * event)` {#class_q_cef_view_1a02d713f4a0545e85832b70ddced7e831}

请参考 QWidget::inputMethodEvent

---
### `protected void `[`showEvent`](#class_q_cef_view_1a08dcba31e0d2860270ab3cd8055a5c4e)`(QShowEvent * event)` {#class_q_cef_view_1a08dcba31e0d2860270ab3cd8055a5c4e}

请参考 QWidget::showEvent

---
### `protected void `[`hideEvent`](#class_q_cef_view_1af2432e14ac8d9156594c3941ff6b4d14)`(QHideEvent * event)` {#class_q_cef_view_1af2432e14ac8d9156594c3941ff6b4d14}

请参考 QWidget::hideEvent

---
### `protected void `[`focusInEvent`](#class_q_cef_view_1a05bf10e1e318cf9cc4ad742ad61c9706)`(QFocusEvent * event)` {#class_q_cef_view_1a05bf10e1e318cf9cc4ad742ad61c9706}

请参考 QWidget::focusInEvent

---
### `protected void `[`focusOutEvent`](#class_q_cef_view_1a414b4c9efe5edd10c324c1e35e12d07c)`(QFocusEvent * event)` {#class_q_cef_view_1a414b4c9efe5edd10c324c1e35e12d07c}

请参考 QWidget::focusOutEvent

---
### `protected void `[`resizeEvent`](#class_q_cef_view_1a237797e9f77342d72c35a8017865988e)`(QResizeEvent * event)` {#class_q_cef_view_1a237797e9f77342d72c35a8017865988e}

请参考 QWidget::resizeEvent

---
### `protected void `[`keyPressEvent`](#class_q_cef_view_1a6aa89a0ce04dac5aa2c01545253ffc56)`(QKeyEvent * event)` {#class_q_cef_view_1a6aa89a0ce04dac5aa2c01545253ffc56}

请参考 QWidget::keyPressEvent

---
### `protected void `[`keyReleaseEvent`](#class_q_cef_view_1ab2d8e99188937bba13893ce6c54f9a3f)`(QKeyEvent * event)` {#class_q_cef_view_1ab2d8e99188937bba13893ce6c54f9a3f}

请参考 QWidget::keyReleaseEvent

---
### `protected void `[`mouseMoveEvent`](#class_q_cef_view_1a3bd541e981d7dbad0deceb64df0d3a5b)`(QMouseEvent * event)` {#class_q_cef_view_1a3bd541e981d7dbad0deceb64df0d3a5b}

请参考 QWidget::mouseMoveEvent

---
### `protected void `[`mousePressEvent`](#class_q_cef_view_1aac476c39493a4e75e681b9e09f13e060)`(QMouseEvent * event)` {#class_q_cef_view_1aac476c39493a4e75e681b9e09f13e060}

请参考 QWidget::mousePressEvent

---
### `protected void `[`mouseReleaseEvent`](#class_q_cef_view_1a69306a82128ba3e525103eb132aae62c)`(QMouseEvent * event)` {#class_q_cef_view_1a69306a82128ba3e525103eb132aae62c}

请参考 QWidget::mouseReleaseEvent

---
### `protected void `[`wheelEvent`](#class_q_cef_view_1a3395f62959288420a834c736933e7228)`(QWheelEvent * event)` {#class_q_cef_view_1a3395f62959288420a834c736933e7228}

请参考 QWidget::wheelEvent

---
### `protected void `[`contextMenuEvent`](#class_q_cef_view_1ac8a83d1f2fb0e771fb48007838b40d1f)`(QContextMenuEvent * event)` {#class_q_cef_view_1ac8a83d1f2fb0e771fb48007838b40d1f}

请参考 QWidget::contextMenuEvent

---
### `{signal} public void `[`loadingStateChanged`](#class_q_cef_view_1afb28155fd58760bd84cf45f634e054b5)`(int browserId, bool isLoading, bool canGoBack, bool canGoForward)` {#class_q_cef_view_1afb28155fd58760bd84cf45f634e054b5}

加载状态更改时调用

#### 参数
* `browserId` 表示浏览器 ID

* `isLoading` 表示浏览器正在加载

* `canGoBack` 表示浏览器可以返回

* `canGoForward` 表示浏览器可以前进

---
### `{signal} public void `[`loadStart`](#class_q_cef_view_1a0165da07749c09130e0007a4ceff59ca)`(int browserId, qint64 frameId, bool isMainFrame, int transitionType)` {#class_q_cef_view_1a0165da07749c09130e0007a4ceff59ca}

在加载开始时被调用

#### 参数
* `browserId` 表示浏览器 ID

* `frameId` 表示frame ID

* `isMainFrame` 表示这是否是主frame

* `transition_type` 过渡类型

---
### `{signal} public void `[`loadEnd`](#class_q_cef_view_1a5d64cbb95348336b85cb01f38de91e0a)`(int browserId, qint64 frameId, bool isMainFrame, int httpStatusCode)` {#class_q_cef_view_1a5d64cbb95348336b85cb01f38de91e0a}

在加载结束时被调用

#### 参数
* `browserId` 表示浏览器 ID

* `frameId` 表示frame ID

* `isMainFrame` 表示这是否是主frame

* `httpStatusCode` HTTP 状态代码

---
### `{signal} public void `[`loadError`](#class_q_cef_view_1a81ad0ea96d09d7ba705c4166502507e4)`(int browserId, qint64 frameId, bool isMainFrame, int errorCode, const QString & errorMsg, const QString & failedUrl)` {#class_q_cef_view_1a81ad0ea96d09d7ba705c4166502507e4}

由于错误导致加载失败时被调用

#### 参数
* `browserId` 表示浏览器 ID

* `frameId` 表示frame ID

* `isMainFrame` 表示这是否是主frame

* `errorCode` 错误代码

* `errorMsg` 错误消息

* `failedUrl` 导致失败的网址

---
### `{signal} public void `[`draggableRegionChanged`](#class_q_cef_view_1ae11274817f627abf9d407e12dcd5c050)`(const QRegion & draggableRegion, const QRegion & nonDraggableRegion)` {#class_q_cef_view_1ae11274817f627abf9d407e12dcd5c050}

在可拖动区域更改时调用

#### 参数
* `draggableRegion` 新的可拖动区域

* `nonDraggableRegion` 新的不可拖动区域

---
### `{signal} public void `[`addressChanged`](#class_q_cef_view_1a89ce3bc031d5dcd1115482118a6c4181)`(qint64 frameId, const QString & url)` {#class_q_cef_view_1a89ce3bc031d5dcd1115482118a6c4181}

在网址更改时被调用

#### 参数
* `frameId` frame ID

* `url` 网址

---
### `{signal} public void `[`titleChanged`](#class_q_cef_view_1a48c82c208cab769a1baa7177bc58b030)`(const QString & title)` {#class_q_cef_view_1a48c82c208cab769a1baa7177bc58b030}

网站标题更改时被调用

#### 参数
* `title` 网站标题

---
### `{signal} public void `[`faviconURLChanged`](#class_q_cef_view_1a7b9e104469c1a4a203c2e1d7e9cfd2a7)`(const QStringList & urls)` {#class_q_cef_view_1a7b9e104469c1a4a203c2e1d7e9cfd2a7}

网站图标地址更改时被调用

#### 参数
* `urls` 图标地址

---
### `{signal} public void `[`fullscreenModeChanged`](#class_q_cef_view_1afa0fbb5b4c2c6c3592085e9b94dffc4a)`(bool fullscreen)` {#class_q_cef_view_1afa0fbb5b4c2c6c3592085e9b94dffc4a}

在全屏模式更改时被调用

#### 参数
* `fullscreen` 当前全屏模式

---
### `{signal} public void `[`statusMessage`](#class_q_cef_view_1a86d10c28b8821a36723e3504fa0cc7e7)`(const QString & message)` {#class_q_cef_view_1a86d10c28b8821a36723e3504fa0cc7e7}

状态消息更改时被调用

#### 参数
* `message` 状态信息

---
### `{signal} public void `[`consoleMessage`](#class_q_cef_view_1a2dae6946082712815273c2967d37762a)`(const QString & message, int level)` {#class_q_cef_view_1a2dae6946082712815273c2967d37762a}

从 Web 内容调用控制台消息

#### 参数
* `message` 消息

* `level` 级别

---
### `{signal} public void `[`loadingProgressChanged`](#class_q_cef_view_1ac7377eeed6811bafca1e6887b64d62a5)`(double progress)` {#class_q_cef_view_1ac7377eeed6811bafca1e6887b64d62a5}

加载进度更改时调用

#### 参数
* `progress` 当前进度

---
### `{signal} public void `[`cefQueryRequest`](#class_q_cef_view_1a9085b5e19ee6eb1306ec29e40f09c6e3)`(int browserId, qint64 frameId, const `[`QCefQuery`](QCefQuery.md#class_q_cef_query)` & query)` {#class_q_cef_view_1a9085b5e19ee6eb1306ec29e40f09c6e3}

在新的 [QCefQuery](QCefQuery.md#class_q_cef_query) 请求上被调用

#### 参数
* `browserId` 浏览器 ID

* `frameId` frame ID

* `query` 查询请求

---
### `{signal} public void `[`invokeMethod`](#class_q_cef_view_1a221d07818d4f6766f72c68319fecc24e)`(int browserId, qint64 frameId, const QString & method, const QVariantList & arguments)` {#class_q_cef_view_1a221d07818d4f6766f72c68319fecc24e}

在从 Web 内容调用方法请求时调用（Javascript）

#### 参数
* `browserId` 浏览器 ID

* `frameId` frame ID

* `method` 方法名称

* `arguments` 参数列表

---
### `{signal} public void `[`reportJavascriptResult`](#class_q_cef_view_1aee8e52d6a036df33dda1ea1193b56962)`(int browserId, qint64 frameId, const QString & context, const QVariant & result)` {#class_q_cef_view_1aee8e52d6a036df33dda1ea1193b56962}

对使用  [executeJavascriptWithResult](#class_q_cef_view_1a7821e30519551df55c8e4a2373456b3b) 执行的 javascript 的结果进行调用

#### 参数
* `browserId` 浏览器 ID

* `frameId` frame ID

* `context` 上下文

* `result` 结果

---
### `{signal} public void `[`nativeBrowserCreated`](#class_q_cef_view_1a543b0eca797c5161d6325665d5ddd576)`(QWindow * window)` {#class_q_cef_view_1a543b0eca797c5161d6325665d5ddd576}

在创建原生浏览器窗口后调用。不适用于 OSR 模式。

#### 参数
* `win` CEF 窗口

---
### `{slot} public inline void `[`setFocus`](#class_q_cef_view_1a9b1b42857e38a9f5c6c810fd51593788)`()` {#class_q_cef_view_1a9b1b42857e38a9f5c6c810fd51593788}

---
### `enum `[`CefWindowOpenDisposition`](#class_q_cef_view_1a9963d810f8aa71b45b1b10f0abbe8787) {#class_q_cef_view_1a9963d810f8aa71b45b1b10f0abbe8787}


表示 CEF 弹出窗口的打开配置枚举

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

