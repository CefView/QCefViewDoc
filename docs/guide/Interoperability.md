---
sidebar_position: 3
---

# Interoperability

QCefView provides the capabilities of interoperability between native context and web context, thus the developer can call Javascript from C++ code easily, vice versa.

The approach of the interoperability was implemented by inserting a bridge object into the web context displayed in all the frames and browsers managed by QCefView. The bridge object provides methods for communicating with native code. For more details please refer to the API reference [WebAPIs](/docs/reference/WebAPIs)

> **The bridge object is mounted at window object, and the object name could be configured through the [`QCefConfig::setBridgeObjectName`](/docs/reference/QCefConfig#class_q_cef_config_1a03687393e227bc8747bdc9ffa7400d60). The default name is `CefViewClient`**

## Call C++ from Javascript

The bridge object provides the following method to invoke C++ code from Javascript

**⚠[DEPRECATED]**<br></br>~~[`invokeMethod`](/docs/reference/WebAPIs#web_apis_invokeMethod)`(name, ...args)`~~

[`invoke`](/docs/reference/WebAPIs#web_apis_invoke)`(name, ...args)`

When this method gets called from Javascript, the following Qt signal will be emitted

`void `[`invokeMethod`](/docs/reference/QCefView#class_q_cef_view_1aa407f7491139a2d5331566c8346a58c8)`(int browserId,int frameId,const QString & method,const QVariantList & arguments)`

> **⚠ NOTE: The Javascript method [`invoke`](/docs/reference/WebAPIs#web_apis_invoke)`(name, ...args)` is `ASYNCHRONOUS` operation, that means the calling from Javascript returns immediately regardless the execution of C++ Qt slot**

Now let's write a small piece of code to demonstrate the invocation from Javascript to C++.

### Add Javascript Code

First add Javascript code as follows into the \<script\> block
```javascript
    function onInvokeMethodClicked(name, ...arg) {
      // invoke C++ code
      window.CallBridge.invokeMethod(name, ...arg);
    }
```

and add the html code
```html
    <label> Test Case for InvokeMethod </label>
    <br />
    <input
      type="button"
      value="Invoke Method"
      onclick="onInvokeMethodClicked('TestMethod', 1, false, 'arg3')"
    />
```

### Add C++ Code

Then add code in C++ to handle the invocation
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
### Run the Application

Now let's run the application.

![First Project](/img/guide/invoke-method-01.png)

Click the button in web area to invoke the C++ code

![First Project](/img/guide/invoke-method-02.png)


## Call Javascript from C++

The bridge object provides the following methods to support calling from C++ code to Javascript

- [`addEventListener`](/docs/reference/WebAPIs#web_apis_addEventListener)`(name, listener)` 

- [`removeEventListener`](/docs/reference/WebAPIs#web_apis_removeEventListener)`(name, listener)`

The developers can add as many event listeners as they want in the Javascript context and trigger the events from C++ code with the following methods

- `public bool `[`triggerEvent`](/docs/reference/QCefView#class_q_cef_view_1ac47c23ffcd94bdffe2b6a81eaae077a2)`(const `[`QCefEvent`](/docs/reference/QCefEvent#class_q_cef_event)` & event)`

- `public bool `[`triggerEvent`](/docs/reference/QCefView#class_q_cef_view_1aaccdc475dc89f9ca4885c94e8f50421d)`(const `[`QCefEvent`](/docs/reference/QCefEvent#class_q_cef_event)` & event,int frameId)`

- `public bool `[`broadcastEvent`](/docs/reference/QCefView#class_q_cef_view_1ad5455e3a8cb0ffa1f9d7cb98307a6bb4)`(const `[`QCefEvent`](/docs/reference/QCefEvent#class_q_cef_event)` & event)` 

> **⚠ NOTE: All the 3 methods above are `ASYNCHRONOUS` operations**

Now let's code it

### Add Javascript Code

Add code to the javascript

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

Add code to the html
```html
<body onload="onLoad()" id="main" class="noselect">
```

### Add C++ Code

Add code to trigger the event be handled in Javascript, here we need to add a button in perform the triggering, we just show the button click action handler slot.

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

Now let's run the application.

![First Project](/img/guide/add-event-listener-01.png)

Click the button in native area to invoke the Javascript code

![First Project](/img/guide/add-event-listener-02.png)
