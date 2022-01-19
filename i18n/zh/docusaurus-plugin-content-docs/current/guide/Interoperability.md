---
sidebar_position: 2
---

# C++/Javascript互操作

QCefView提供C++/Javascript互操作的能力，因此开发者可以从C++中调用Javascript代码，反之亦然。

互操作能力是通过在QCefView所创建的所有Browser和Frame中插入桥接对象实现的。桥接对象提供一些方法用于原生代码和Web代码进行通信，更多详细介绍请参考[WebAPIs](/docs/reference/WebAPIs)。

> **桥接对象被挂载在window对象上，并且可以通过[`QCefConfig::setBridgeObjectName`](/docs/reference/QCefConfig#class_q_cef_config_1a03687393e227bc8747bdc9ffa7400d60)来设置桥接对象的名字。默认的对象名为`CefViewClient`**

## 从Javascript中调用C++

桥接对象提供一下方法来从Javascript中调用C++：

[`invokeMethod`](/docs/reference/WebAPIs#web_apis_invokeMethod)`(name, ...args)`,

当该方法在Javascript中调用后，下面的Qt signal将被触发：

`void `[`invokeMethod`](/docs/reference/QCefView#class_q_cef_view_1aa407f7491139a2d5331566c8346a58c8)`(int browserId,int frameId,const QString & method,const QVariantList & arguments)`

> **⚠ 注意: Javascript方法[`invokeMethod`](/docs/reference/WebAPIs#web_apis_invokeMethod)`(name, ...args)`是 `同步`操作，这意味着该方法的调用会直到对应的C++ Qt slot返回之后才返回。**

现在让我们编写一段代码来演示如何从Javascript中调用C++。

### 添加Javascript代码

添加如下代码在Web页面的\<script\>代码块中：
```javascript
    function onInvokeMethodClicked(name, ...arg) {
      // invoke C++ code
      window.CallBridge.invokeMethod(name, ...arg);
    }
```

添加如下HTML代码：
```html
    <label> Test Case for InvokeMethod </label>
    <br />
    <input
      type="button"
      value="Invoke Method"
      onclick="onInvokeMethodClicked('TestMethod', 1, false, 'arg3')"
    />
```

### 添加C++代码

然后添加如下C++代码用于处理调用请求：
```cpp
MainWindow::MainWindow(QWidget* parent)
  : QMainWindow(parent)
{
  // ...

  // connect the invokeMethod to the slot
  connect(cefViewWidget,
          SIGNAL(invokeMethod(int, int, const QString&, const QVariantList&)),
          this,
          SLOT(onInvokeMethod(int, int, const QString&, const QVariantList&)));
  // ...
}

void
MainWindow::onInvokeMethod(int browserId, int frameId, const QString& method, const QVariantList& arguments)
{
  // extract the arguments and dispatch the invocation to corresponding handler
  if (0 == method.compare("TestMethod")) {
    QMetaObject::invokeMethod(
      this,
      [=]() {
        QString title("QCef InvokeMethod Notify");
        QString text = QString("Current Thread: QT_UI\r\n"
                               "Method: %1\r\n"
                               "Arguments:\r\n")
                         .arg(method);

        for (int i = 0; i < arguments.size(); i++) {
          // clang-format off
          text.append(QString("%1 Type:%2, Value:%3\r\n")
              .arg(i)
              .arg(arguments[i].typeName())
              .arg(arguments[i].toString()));
          // clang-format on
        }

        QMessageBox::information(this->window(), title, text);
      },
      Qt::QueuedConnection);
  } else {
  }
}
```
### 运行应用

启动应用，可以看到如下界面：

![First Project](/img/guide/invoke-method-01.png)

点击Web区域中的按钮，可以看到如下界面：

![First Project](/img/guide/invoke-method-02.png)


## 从C++中调用Javascript

桥接对象提供如下方法支持从C++中调用Javascript：

- [`addEventListener`](/docs/reference/WebAPIs#web_apis_addEventListener)`(name, listener)` 

- [`removeEventListener`](/docs/reference/WebAPIs#web_apis_removeEventListener)`(name, listener)`

开发者可以在Javascript中添加任意多的事件监听器，然后在C++中通过以下方法触发这些事件：

- `public bool `[`triggerEvent`](/docs/reference/QCefView#class_q_cef_view_1ac47c23ffcd94bdffe2b6a81eaae077a2)`(const `[`QCefEvent`](/docs/reference/QCefEvent#class_q_cef_event)` & event)`

- `public bool `[`triggerEvent`](/docs/reference/QCefView#class_q_cef_view_1aaccdc475dc89f9ca4885c94e8f50421d)`(const `[`QCefEvent`](/docs/reference/QCefEvent#class_q_cef_event)` & event,int frameId)`

- `public bool `[`broadcastEvent`](/docs/reference/QCefView#class_q_cef_view_1ad5455e3a8cb0ffa1f9d7cb98307a6bb4)`(const `[`QCefEvent`](/docs/reference/QCefEvent#class_q_cef_event)` & event)` 

> **⚠ 注意: 以上三个方法的调用全部都是`异步`操作。**


编写代码。

### 添加Javascript代码

添加如下Javascript代码：
```javascript
    function onLoad() {
      // Add a event listener to handle the event named 'colorChange'
      Window.CallBridge.addEventListener(
        // event name
        "colorChange"   
        // event handler
        function (color) {
          // change the background color
          document.getElementById("main").style.backgroundColor = color;
        }
      );
    }
```

添加如下HTML代码：
```html
<body onload="onLoad()" id="main" class="noselect">
```

### 添加C++代码

添加C++代码用于触发事件，这里我们需要给UI增加一个原生的按钮，相关代码不在这里展示。
```cpp
void
MainWindow::onBtnChangeColorClicked()
{
  if (cefViewWidget) {
    // create a random color
    QColor color(QRandomGenerator::global()->generate());

    // create the cef event and set the arguments
    QCefEvent event("colorChange");
    event.arguments().append(QVariant::fromValue(color.name(QColor::HexArgb)));

    // broadcast the event to all frames in all browsers created by this QCefView widget
    cefViewWidget->broadcastEvent(event);
  }
}
```

### Run the Application

启动应用，可以看到如下界面：

![First Project](/img/guide/add-event-listener-01.png)

点击Native区域的按钮来触发Javascript事件处理器，可以看到如下界面：

![First Project](/img/guide/add-event-listener-02.png)
