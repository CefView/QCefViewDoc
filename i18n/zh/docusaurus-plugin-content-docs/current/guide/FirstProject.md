---
sidebar_position: 1
---

# 第一个项目

使用Qt Creator或者其他支持的IDE创建一个GUI应用

## 初始化[`QCefContext`](/docs/reference/QCefContext)实例
使用QCefView的第一步必须初始化一个[`QCefContext`](/docs/reference/QCefContext)的实例，跟QApplication一样, 在应用程序的生命周期内必须有且仅有一个[`QCefContext`](/docs/reference/QCefContext)实例

```cpp
#include <QApplication>
#include <QCefContext.h>
#include "MainWindow.h"

int
main(int argc, char* argv[])
{
  // create QApplication instance
  QApplication a(argc, argv);

  // build QCefConfig
  QCefConfig config;
  // set user agent
  config.setUserAgent("QCefViewTest");
  // set log level
  config.setLogLevel(QCefConfig::LOGSEVERITY_DEFAULT);
  // set JSBridge object name (default value is QCefViewClient)
  config.setBridgeObjectName("CallBridge");
  // port for remote debugging (default is 0 and means to disable remote debugging)
  config.setRemoteDebuggingPort(9000);
  // set background color for all browsers
  // (QCefSetting.setBackgroundColor will overwrite this value for specified browser instance)
  config.setBackgroundColor(Qt::lightGray);

  // WindowlessRenderingEnabled is set to true by default,
  // set to false to disable the OSR mode
  config.setWindowlessRenderingEnabled(true);

  // add command line args, you can any cef supported switches or parameters
  config.addCommandLineSwitch("use-mock-keychain");
  // config.addCommandLineSwitch("disable-gpu");
  // config.addCommandLineSwitch("enable-media-stream");
  // config.addCommandLineSwitch("allow-file-access-from-files");
  // config.addCommandLineSwitch("disable-spell-checking");
  // config.addCommandLineSwitch("disable-site-isolation-trials");
  // config.addCommandLineSwitch("enable-aggressive-domstorage-flushing");
  config.addCommandLineSwitchWithValue("renderer-process-limit", "1");
  // config.addCommandLineSwitchWithValue("disable-features", "BlinkGenPropertyTrees,TranslateUI,site-per-process");

  // create QCefContext instance with config,
  // the lifecycle of cefContext must be the same as QApplication instance
  QCefContext cefContext(&a, argc, argv, &config);

  // application window
  MainWindow w;
  w.show();

  // flying
  return a.exec();
}
```

可以看到初始化[`QCefContext`](/docs/reference/QCefContext)实例的时候需要传入一个[`QCefConfig`](/docs/reference/QCefConfig)。你可以通过[`QCefConfig`](/docs/reference/QCefConfig)设置一些CEF的配置参数，例如可以设置日志级别，调试端口等。更多详细参数请参考API文档[`QCefConfig`](/docs/reference/QCefConfig)。

不要试图主动析构[`QCefContext`](/docs/reference/QCefContext)实列，该实例跟随Application的生命周期存在和销毁，如果提前销毁则会导致CEF内部状态错误。

## 创建QCefView实例

一旦初始化[`QCefContext`](/docs/reference/QCefContext)完成，就可以创建[`QCefView`](/docs/reference/QCefView)对象了。

```cpp
  // build the path to the web resource
  QDir dir = QCoreApplication::applicationDirPath();
#if defined(OS_MACOS)
  QString uri = QString("file://") + QDir::toNativeSeparators(dir.filePath("../Resources/QCefViewTestPage.html"));
#else
  QString uri = QString("file://") + QDir::toNativeSeparators(dir.filePath("QCefViewTestPage.html"));
#endif

  // build settings for per QCefView
  QCefSetting setting;
  // here we just set the default background to blue
  setting.setBackgroundColor(QColor::fromRgb(0, 0, 255));

  // create the QCefView widget and add it to the layout container
  cefViewWidget = new QCefView(uri, &setting, this);
  ui.cefContainer->layout()->addWidget(cefViewWidget);
  layout->addWidget(ui.cefContainer);
```

## 创建一个简单的Web页面

创建一个简单的Web页面，内容如下：
```html
<html>
  <head>
  </head>
  <body id="main" class="noselect">
    <h1 align="center" style="font-size: 12pt">Web Area</h1>
  </body>
</html>
```

## 运行应用

启动应用，可以看到如下界面：

![First Project](/img/guide/first-project.png)
