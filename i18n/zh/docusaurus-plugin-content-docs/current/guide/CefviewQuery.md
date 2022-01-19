---
sidebar_position: 3
---

# CefViewQuery 

[`window.CefViewQuery`](/docs/reference/WebAPIs#web_apis_CefViewQuery)`(query)`是另一种从Javascript中向C++中通信的机制，这种方式的通信是`异步`操作。更多详细介绍请参见API文档。

当从Javascript中调用该方法时，以下Qt signal会被触发：

`public void `[`cefQueryRequest`](/docs/reference/QCefView#class_q_cef_view_1acbf62eea36993163c4b70b4df96738d8)`(int browserId,int frameId,const `[`QCefQuery`](/docs/reference/QCefQuery#class_q_cef_query)` & query)`

以下内容将展示CefViewQuery的使用方法。

## 添加Javascript代码

添加如下Javascript代码：
```javascript
    function onCallBridgeQueryClicked() {
      var query = {
        request: document.getElementById("message").value,
        onSuccess: function (response) {
          alert(response);
        },
        onFailure: function (error_code, error_message) {
          alert(error_message);
        },
      };
      window.CefViewQuery(query);
    }
```

添加HTML代码：
```html
    <label> Test Case for QCefQuery </label>
    <br />
    <textarea id="message" style="width: 320px; height: 120px">
      this message will be processed by native code.
    </textarea>
    <br />
    <input type="button" value="Query" onclick="onCallBridgeQueryClicked()" />
```

## 添加C++代码

添加如下C++代码：
```cpp
MainWindow::MainWindow(QWidget* parent)
  : QMainWindow(parent)
{
  // ...

  // connect the cefQueryRequest to the slot
  connect(cefViewWidget,
          SIGNAL(cefQueryRequest(int, int, const QCefQuery&)),
          this,
          SLOT(onQCefQueryRequest(int, int, const QCefQuery&)));

  // ...
}

void
MainWindow::onQCefQueryRequest(int browserId, int frameId, const QCefQuery& query)
{
  QMetaObject::invokeMethod(
    this,
    [=]() {
      QString title("QCef Query Request");
      QString text = QString("Current Thread: QT_UI\r\n"
                             "Query: %1")
                       .arg(query.request());

      QMessageBox::information(this->window(), title, text);

      QString response = query.request().toUpper();
      query.setResponseResult(true, response);
      cefViewWidget->responseQCefQuery(query);
    },
    Qt::QueuedConnection);
}
```

## 运行应用

启动应用，可以看到如下界面：

![First Project](/img/guide/cefview-query-01.png)

点击Web区域的Query按钮，可以看到如下界面：

![First Project](/img/guide/cefview-query-02.png)