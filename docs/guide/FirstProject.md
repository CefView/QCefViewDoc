---
sidebar_position: 1
---

# First Project

Create a Qt GUI application with either Qt creator or other supported IDE.

## Initialize [`QCefContext`](/docs/reference/QCefContext) instance

To consume QCefView, the first step is to initialize an instance of [`QCefContext`](/docs/reference/QCefContext). This is like the QApplication, there must be only one instance of [`QCefContext`](/docs/reference/QCefContext) in the application lifecycle.
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

As you can see we need a [`QCefConfig`](/docs/reference/QCefConfig) to initialize the [`QCefContext`](/docs/reference/QCefContext). You could set some global parameters of CEF with [`QCefConfig`](/docs/reference/QCefConfig) instance, for example the log level, user agent name and debugging port. For more details please refer to the [`QCefConfig`](/docs/reference/QCefConfig) references.

Do not try to destruct the [`QCefContext`](/docs/reference/QCefContext) instance explicitly or you will break the lifecycle of the CEF stuff.

## Create QCefView Instance

Once you have initialize [`QCefContext`](/docs/reference/QCefContext), you can create [`QCefView`](/docs/reference/QCefView) instance.
```cpp
  // build settings for per QCefView
  QCefSetting setting;
  // here we just set the default background to blue
  setting.setBackgroundColor(QColor::fromRgb(0, 0, 255));

  // create the QCefView widget and add it to the layout container
  cefViewWidget = new QCefView(uri, &setting, this);
  ui.cefContainer->layout()->addWidget(cefViewWidget);
  layout->addWidget(ui.cefContainer);
```

## Create a simple web page

Create a simple web page with the following content:
```html
<html>
  <head>
  </head>
  <body id="main" class="noselect">
    <h1 align="center" style="font-size: 12pt">Web Area</h1>
  </body>
</html>
```

## Run the application 

Now lets run the application.

![First Project](/img/guide/first-project.png)