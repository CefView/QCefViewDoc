---
sidebar_position: 2
---

# 加载WebApp资源

QCefView提供4种加载Web资源的方式。

### 1. 加载在线Web内容

在QCefView的构造函数中直接传递在线Web内容的URL
```cpp
  // build settings for per QCefView
  QCefSetting setting;

  // create the QCefView widget and add it to the layout container
  QCefView* cefView = new QCefView("https://google.com", &setting, nullptr);
```

### 2. 通过本地文件路径加载

在QCefView的构造函数中直接传递本地Web资源文件的全路径，注意路径必须是以`file://`为schema的格式。
```cpp
  // build the path to the web resource
  QDir dir = QCoreApplication::applicationDirPath();
  QString webResourceDir = QString("file://") + QDir::toNativeSeparators(dir.filePath("webres/index.html"));

  // build settings for per QCefView
  QCefSetting setting;

  // create the QCefView widget and add it to the layout container
  QCefView* cefView = new QCefView(INDEX_URL, &setting, nullptr);
```
### 3. 添加本地文件目录到URL的映射

如果你的WebApp资源文件较多，并且在一个本地目录中，你可以通过如下方法添加一个本地文件目录到URL的映射：

`public void `[`addLocalFolderResource`](/docs/reference/QCefContext#class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454)`(const QString & path,const QString & url,int priority)`

例如WebApp经过编译后输出到`webres`目录中，其目录结构如下：
```bash
full\path\to\webres
                │   index.html
                ├───assets
                ├───docs
                ├───img
```

可以通过以下方法添加映射：
```cpp
 // add a local folder to URL map
  QCefContext::instance()->addLocalFolderResource(
      "full\\path\\to\\webres", 
      "https://domainname"              // This could be any URL you need
      );

  // build settings for per QCefView
  QCefSetting setting;

  // create the QCefView widget and add it to the layout container
  QCefView* cefView = new QCefView(
      "https://domainname/index.html", 
      &setting, 
      this
      );
```

映射添加之后，便可以通过URL拼接资源相对路径的方式访问所有资源。

### 4. 添加本地Zip文件到URL的映射

除了添加本地文件目录到URL的映射，还可以添加本地Zip文件到URL的映射，通过以下方法实现：

`public void `[`addArchiveResource`](/docs/reference/QCefContext#class_q_cef_context_1a007272d5df4016143f6b9e221a3b0eb1)`(const QString & path,const QString & url,const QString & password)`

例如以下结构的Zip文件
```bash
full\path\to\webres.zip
                │   index.html
                ├───assets
                ├───docs
                ├───img
```

通过以下代码添加映射：
```cpp
 // add a local zip file to URL map
 QCefContext::instance()->addArchiveResource(
     "full\\path\\to\\webres.zip", 
     "https://domainname",
     "password"                 // pass the password of the zip file if needed
     );

  // build settings for per QCefView
  QCefSetting setting;

  // create the QCefView widget and add it to the layout container
  QCefView* cefView = new QCefView(
      "https://domainname/index.html", 
      &setting, 
      this
      );
```

### 使用场景

如果你使用比较流行的前端框架（React，Vue或者其他框架）开发你的WebApp，那么上述方法3和4非常有用，特别是SPA WebApp。这些前端项目编译之后输出的静态资源结构比较复杂，所以可以通过添加映射的方式来加载。