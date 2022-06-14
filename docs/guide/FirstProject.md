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

int main(int argc, char* argv[])
{
  // build the application instance
  QApplication a(argc, argv);

  // build QCefConfig
  QCefConfig config;
  config.setUserAgent("QCefViewTest");
  config.setLogLevel(QCefConfig::LOGSEVERITY_DEFAULT);
  config.setBridgeObjectName("CallBridge");
  config.setRemoteDebuggingPort(9000);
  config.setBackgroundColor(QColor::fromRgba(qRgba(255, 0, 0, 255)));

  // add command line args
  config.addCommandLineSwitch("enable-media-stream");
  config.addCommandLineSwitch("use-mock-keychain");
  config.addCommandLineSwitch("allow-file-access-from-files");
  config.addCommandLineSwitch("disable-spell-checking");
  config.addCommandLineSwitch("disable-site-isolation-trials");
  config.addCommandLineSwitch("enable-aggressive-domstorage-flushing");
  config.addCommandLineSwitchWithValue("renderer-process-limit", "1");
  config.addCommandLineSwitchWithValue("disable-features", "BlinkGenPropertyTrees,TranslateUI,site-per-process");

  // initialize QCefContext instance with config
  QCefContext cefContext(&a, argc, argv, &config);

  MainWindow w;
  w.show();

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