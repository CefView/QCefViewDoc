---
sidebar_position: 2
---

# Load WebApp Resource

To load the web resource, QCefView provide 4 methods to achieve it.

### 1. Load Online Web Resource

You can pass the full URL of the webpage to the constructor of QCefView.
```cpp
  // build settings for per QCefView
  QCefSetting setting;

  // create the QCefView widget and add it to the layout container
  QCefView* cefView = new QCefView("https://google.com", &setting, nullptr);
```

### 2. Load Local File With File Path

Pass the absolute file path of the web resource file to the constructor of QCefView. Note the file path must be started by "file://" schema.
```cpp
  // build the path to the web resource
  QDir dir = QCoreApplication::applicationDirPath();
  QString webResourceDir = QString("file://") + QDir::toNativeSeparators(dir.filePath("webres/index.html"));

  // build settings for per QCefView
  QCefSetting setting;

  // create the QCefView widget and add it to the layout container
  QCefView* cefView = new QCefView(INDEX_URL, &setting, nullptr);
```
### 3. Add Local Folder Mapping

If you need to load the entire WebApp output folder, you can choose to add a local folder mapping item with the following method:

`public void `[`addLocalFolderResource`](/docs/reference/QCefContext#class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454)`(const QString & path,const QString & url,int priority)`

For example, you build the WebApp project and get the output folder `webres`, the folder structure is as follows:
```bash
full\path\to\webres
                │   index.html
                ├───assets
                ├───docs
                ├───img
```

You can add a mapping item with the following code:
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

After added the mapping item, you can access all the resource with the URL root appended by the resource relative path.

### 4. Add Local Archive Mapping

The resource mapping can also be URL to archive file, add it with the following method:

`public void `[`addArchiveResource`](/docs/reference/QCefContext#class_q_cef_context_1a007272d5df4016143f6b9e221a3b0eb1)`(const QString & path,const QString & url,const QString & password)`

You need to keep the folder structure in the archive file, for example:
```bash
full\path\to\webres.zip
                │   index.html
                ├───assets
                ├───docs
                ├───img
```

You can add a mapping item with the following code:
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

### Use Cases

The above 3 & 4 are very useful when you develop your WebApp with the popular framework like React, Vue or some others, especially you are building SPA WebApp.