---
title: QCefConfig
---

# class `QCefConfig` {#class_q_cef_config}

表示CEF设置。有关更多详细信息，请参阅: [https://bitbucket.org/chromiumembedded/cef/wiki/GeneralUsage.md#markdown-header-cefsettings](https://bitbucket.org/chromiumembedded/cef/wiki/GeneralUsage.md#markdown-header-cefsettings)

## 总结

 成员                                                         | 描述                                            
 ------------------------------------------------------------ | ----------------------------------------------- 
 `public  `[`QCefConfig`](#class_q_cef_config_1a2a937276cdbf76f77d2bf70a766c6412)`()` | QCefConfig 构造函数                             
 `public  `[`QCefConfig`](#class_q_cef_config_1af90f0b9e087d39a6bd059701ee450516)`(const `[`QCefConfig`](#class_q_cef_config)` & other)` | QCefConfig 拷贝构造函数                         
 `public `[`QCefConfig`](#class_q_cef_config)` & `[`operator=`](#class_q_cef_config_1a2f78eccb1b7463db2c0b174aff5d0553)`(const `[`QCefConfig`](#class_q_cef_config)` & other)` | QCefConfig 拷贝赋值函数                         
 `public  `[`~QCefConfig`](#class_q_cef_config_1a67d06ef56affa82e943c7a5c73afee9a)`()` | QCefConfig 析构函数                             
 `public void `[`addCommandLineSwitch`](#class_q_cef_config_1a2873f9e8e8997db4060348418df16632)`(const QString & smitch)` | 将参数添加到用于初始化 CEF 的命令行参数         
 `public void `[`addCommandLineSwitchWithValue`](#class_q_cef_config_1a141daa8b02526d190e462cbcb38dbab5)`(const QString & smitch, const QString & v)` | 将带有值的参数添加到用于初始化 CEF 的命令行参数 
 `public void `[`setWindowlessRenderingEnabled`](#class_q_cef_config_1af6041bcae9fcf72ea47ffc47d62e5a96)`(const bool enabled)` | 设置启用/禁用 OSR 模式                          
 `public const QVariant `[`WindowlessRenderingEnabled`](#class_q_cef_config_1a1390692449458f6bd774d024e41ae945)`() const` | 获取 OSR 模式标志                               
 `public void `[`setBrowserSubProcessPath`](#class_q_cef_config_1a3fca1b7b72f37f800278c743b74f1b82)`(const QString & path)` | 设置浏览器子进程路径                            
 `public const QString `[`browserSubProcessPath`](#class_q_cef_config_1a2b15417d6066479256fc514721cd0474)`() const` | 获取浏览器子进程路径                            
 `public void `[`setResourceDirectoryPath`](#class_q_cef_config_1a0690fb1cb1a3cd87c44be340b6308f42)`(const QString & path)` | 设置资源目录路径                                
 `public const QString `[`resourceDirectoryPath`](#class_q_cef_config_1a45c8bed47089201d40124041b7499164)`() const` | 获取资源目录路径                                
 `public void `[`setLocalesDirectoryPath`](#class_q_cef_config_1a4af04a575ecd6b632a794c42144d03d8)`(const QString & path)` | 设置区域目录路径                                
 `public const QString `[`localesDirectoryPath`](#class_q_cef_config_1a3d43450cd3768ff1783596e48fcfe707)`() const` | 获取区域目录路径                                
 `public void `[`setLogLevel`](#class_q_cef_config_1a230ee52b4d64e0ea6f7ba5a4e9ac5f5e)`(const `[`LogLevel`](#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c)` lvl)` | 设置日志级别                                    
 `public const `[`QCefConfig::LogLevel`](#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c)` `[`logLevel`](#class_q_cef_config_1a8728d026571a97449e13e8502c34e5e5)`() const` | 获取日志级别                                    
 `public void `[`setLocale`](#class_q_cef_config_1af67e837996a1dd84af0866f76588ba4e)`(const QString & locale)` | 设置区域                                        
 `public const QString `[`locale`](#class_q_cef_config_1ac1d5ca26f596c9f3e7697da04e549414)`() const` | 获取区域                                        
 `public void `[`setUserAgent`](#class_q_cef_config_1a60009aad390599eb5857182a32de7f23)`(const QString & agent)` | 设置User-Agent                                      
 `public const QString `[`userAgent`](#class_q_cef_config_1ad95b55d57719d9fc1a3dc5abb5695016)`() const` | 获取User-Agent                                        
 `public void `[`setCachePath`](#class_q_cef_config_1aa8f73284ec9ed73dc2028b8c89e8e3c8)`(const QString & path)` | 设置缓存路径                                    
 `public const QString `[`cachePath`](#class_q_cef_config_1ab3a95ce139ce862abb4abb300c1cc1e3)`() const` | 获取缓存路径                                    
 `public void `[`setUserDataPath`](#class_q_cef_config_1a1026015e087a1abaebd81b6a7bf47852)`(const QString & path)` | 设置用户数据目录路径                            
 `public const QString `[`userDataPath`](#class_q_cef_config_1a317ff9d74e89dac404e20005c33b08e9)`() const` | 获取用户数据目录路径                            
 `public void `[`setBridgeObjectName`](#class_q_cef_config_1a03687393e227bc8747bdc9ffa7400d60)`(const QString & name)` | 设置 Bridge 对象名字                            
 `public const QString `[`bridgeObjectName`](#class_q_cef_config_1aab1ee01c7697e38b94b8edf961da4b35)`() const` | 获取 Bridge 对象名字                            
 `public void `[`setBackgroundColor`](#class_q_cef_config_1a2ef252883876dd17193212c52bd02fc0)`(const QColor & color)` | 设置网页的背景色                                
 `public const QVariant `[`backgroundColor`](#class_q_cef_config_1aa04db9637f47424834bbcdf05a8b640b)`() const` | 获取网页的背景色                                
 `public void `[`setAcceptLanguageList`](#class_q_cef_config_1a360c26dd512b9a4a3d6596c0590c370b)`(const QString & languages)` | 设置可接受的语言列表                            
 `public const QString `[`acceptLanguageList`](#class_q_cef_config_1a2828af9a2815ddeb1026e2f6a760d5e8)`() const` | 获取可接受的语言列表                            
 `public void `[`setPersistSessionCookies`](#class_q_cef_config_1a04c4f9aa52131df29c4eb6abd48cc2f0)`(bool enabled)` | 设置是否保留会话 Cookie                         
 `public const QVariant `[`persistSessionCookies`](#class_q_cef_config_1aa8b22bc6b4d9ef5c8aeccfc363ee1f9c)`() const` | 获取是否保留会话 Cookie                         
 `public void `[`setPersistUserPreferences`](#class_q_cef_config_1a6c5c7d498a6c003166071ac6e4e7e359)`(bool enabled)` | 设置是否保留用户首选项                          
 `public const QVariant `[`persistUserPreferences`](#class_q_cef_config_1a4749b6aa16660a15d753f5248985e25f)`() const` | 获取是否保留用户首选项                          
 `public void `[`setRemoteDebuggingPort`](#class_q_cef_config_1ac502d5e4b911c4e57d6fe4167be6d801)`(short port)` | 设置远程调试端口                                
 `public const QVariant `[`remoteDebuggingPort`](#class_q_cef_config_1aeaa7b37b83ee32a5ec50a1dec11d0c2e)`() const` | 获取远程调试端口                                
 `enum `[`LogLevel`](#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c) | 日志级别枚举                                    
 `private QScopedPointer< QCefConfigPrivate > `[`d_ptr`](#class_q_cef_config_1ab524eb236e2915eabee11aa49124a0fc) |                                                 

## Members

---
### `public  `[`QCefConfig`](#class_q_cef_config_1a2a937276cdbf76f77d2bf70a766c6412)`()` {#class_q_cef_config_1a2a937276cdbf76f77d2bf70a766c6412}

QCefConfig 构造函数

---
### `public  `[`QCefConfig`](#class_q_cef_config_1af90f0b9e087d39a6bd059701ee450516)`(const `[`QCefConfig`](#class_q_cef_config)` & other)` {#class_q_cef_config_1af90f0b9e087d39a6bd059701ee450516}

QCefConfig 拷贝构造函数

---
### `public `[`QCefConfig`](#class_q_cef_config)` & `[`operator=`](#class_q_cef_config_1a2f78eccb1b7463db2c0b174aff5d0553)`(const `[`QCefConfig`](#class_q_cef_config)` & other)` {#class_q_cef_config_1a2f78eccb1b7463db2c0b174aff5d0553}

QCefConfig 拷贝赋值函数

---
### `public  `[`~QCefConfig`](#class_q_cef_config_1a67d06ef56affa82e943c7a5c73afee9a)`()` {#class_q_cef_config_1a67d06ef56affa82e943c7a5c73afee9a}

QCefConfig 析构函数

---
### `public void `[`addCommandLineSwitch`](#class_q_cef_config_1a2873f9e8e8997db4060348418df16632)`(const QString & smitch)` {#class_q_cef_config_1a2873f9e8e8997db4060348418df16632}

将参数添加到用于初始化 CEF 的命令行参数 

#### 参数
* `smitch` 参数名

---
### `public void `[`addCommandLineSwitchWithValue`](#class_q_cef_config_1a141daa8b02526d190e462cbcb38dbab5)`(const QString & smitch, const QString & v)` {#class_q_cef_config_1a141daa8b02526d190e462cbcb38dbab5}

将带有值的参数添加到用于初始化 CEF 的命令行参数

#### 参数
* `smitch` 参数名

* `v` 参数值

---
### `public void `[`setWindowlessRenderingEnabled`](#class_q_cef_config_1af6041bcae9fcf72ea47ffc47d62e5a96)`(const bool enabled)` {#class_q_cef_config_1af6041bcae9fcf72ea47ffc47d62e5a96}

设置启用/禁用 OSR 模式

#### 参数
* `enabled` True为启用 OSR 模式, false 为禁用

---
### `public const QVariant `[`WindowlessRenderingEnabled`](#class_q_cef_config_1a1390692449458f6bd774d024e41ae945)`() const` {#class_q_cef_config_1a1390692449458f6bd774d024e41ae945}

获取 OSR 模式标志

#### 返回值
OSR 模式的启用/禁用的标志

---
### `public void `[`setBrowserSubProcessPath`](#class_q_cef_config_1a3fca1b7b72f37f800278c743b74f1b82)`(const QString & path)` {#class_q_cef_config_1a3fca1b7b72f37f800278c743b74f1b82}

设置浏览器子进程路径

#### 参数
* `path` 子进程可执行文件的路径

---
### `public const QString `[`browserSubProcessPath`](#class_q_cef_config_1a2b15417d6066479256fc514721cd0474)`() const` {#class_q_cef_config_1a2b15417d6066479256fc514721cd0474}

获取浏览器子进程路径

---
### `public void `[`setResourceDirectoryPath`](#class_q_cef_config_1a0690fb1cb1a3cd87c44be340b6308f42)`(const QString & path)` {#class_q_cef_config_1a0690fb1cb1a3cd87c44be340b6308f42}

设置资源目录路径

#### 参数
* `path` 资源目录路径

---
### `public const QString `[`resourceDirectoryPath`](#class_q_cef_config_1a45c8bed47089201d40124041b7499164)`() const` {#class_q_cef_config_1a45c8bed47089201d40124041b7499164}

获取资源目录路径

---
### `public void `[`setLocalesDirectoryPath`](#class_q_cef_config_1a4af04a575ecd6b632a794c42144d03d8)`(const QString & path)` {#class_q_cef_config_1a4af04a575ecd6b632a794c42144d03d8}

设置区域目录路径

#### 参数
* `path` 区域目录路径

---
### `public const QString `[`localesDirectoryPath`](#class_q_cef_config_1a3d43450cd3768ff1783596e48fcfe707)`() const` {#class_q_cef_config_1a3d43450cd3768ff1783596e48fcfe707}

获取区域目录路径

---
### `public void `[`setLogLevel`](#class_q_cef_config_1a230ee52b4d64e0ea6f7ba5a4e9ac5f5e)`(const `[`LogLevel`](#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c)` lvl)` {#class_q_cef_config_1a230ee52b4d64e0ea6f7ba5a4e9ac5f5e}

设置日志级别

#### 参数
* `lvl`

---
### `public const `[`QCefConfig::LogLevel`](#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c)` `[`logLevel`](#class_q_cef_config_1a8728d026571a97449e13e8502c34e5e5)`() const` {#class_q_cef_config_1a8728d026571a97449e13e8502c34e5e5}

获取日志级别

#### 返回值
当前日志级别

---
### `public void `[`setLocale`](#class_q_cef_config_1af67e837996a1dd84af0866f76588ba4e)`(const QString & locale)` {#class_q_cef_config_1af67e837996a1dd84af0866f76588ba4e}

设置区域

#### 参数
* `locale` 使用的区域设置。如果为空，将使用默认区域设置“en-US”。在 Linux 上会忽略此值，其中区域设置是使用环境变量解析确定的，优先级顺序为：LANGUAGE、LC_ALL、LC_MESSAGES 和 LANG。也可以使用“lang”命令行开关进行配置。

---
### `public const QString `[`locale`](#class_q_cef_config_1ac1d5ca26f596c9f3e7697da04e549414)`() const` {#class_q_cef_config_1ac1d5ca26f596c9f3e7697da04e549414}

获取区域

---
### `public void `[`setUserAgent`](#class_q_cef_config_1a60009aad390599eb5857182a32de7f23)`(const QString & agent)` {#class_q_cef_config_1a60009aad390599eb5857182a32de7f23}

设置User-Agent

#### 参数
* `agent` User-Agent

---
### `public const QString `[`userAgent`](#class_q_cef_config_1ad95b55d57719d9fc1a3dc5abb5695016)`() const` {#class_q_cef_config_1ad95b55d57719d9fc1a3dc5abb5695016}

获取User-Agent

---
### `public void `[`setCachePath`](#class_q_cef_config_1aa8f73284ec9ed73dc2028b8c89e8e3c8)`(const QString & path)` {#class_q_cef_config_1aa8f73284ec9ed73dc2028b8c89e8e3c8}

设置缓存路径

#### 参数
* `path` 缓存路径

---
### `public const QString `[`cachePath`](#class_q_cef_config_1ab3a95ce139ce862abb4abb300c1cc1e3)`() const` {#class_q_cef_config_1ab3a95ce139ce862abb4abb300c1cc1e3}

获取缓存路径

---
### `public void `[`setUserDataPath`](#class_q_cef_config_1a1026015e087a1abaebd81b6a7bf47852)`(const QString & path)` {#class_q_cef_config_1a1026015e087a1abaebd81b6a7bf47852}

设置用户数据目录路径

#### 参数
* `path` 用户数据目录路径

---
### `public const QString `[`userDataPath`](#class_q_cef_config_1a317ff9d74e89dac404e20005c33b08e9)`() const` {#class_q_cef_config_1a317ff9d74e89dac404e20005c33b08e9}

获取用户数据目录路径

---
### `public void `[`setBridgeObjectName`](#class_q_cef_config_1a03687393e227bc8747bdc9ffa7400d60)`(const QString & name)` {#class_q_cef_config_1a03687393e227bc8747bdc9ffa7400d60}

设置 Bridge 对象名字

#### 参数
* `name` Bridge 对象名

Bridge 对象表示一个 Javascript 对象，该对象将插入到所有浏览器和框架中。此对象被指定用于在 Web 内容中的 Javascript 和本机上下文 （C/C++） 代码之间进行通信。此对象被设置为窗口对象的属性。这意味着它可以通过在Javascript代码中调用window.bridgeObject来获得。

---
### `public const QString `[`bridgeObjectName`](#class_q_cef_config_1aab1ee01c7697e38b94b8edf961da4b35)`() const` {#class_q_cef_config_1aab1ee01c7697e38b94b8edf961da4b35}

获取 Bridge 对象名字

---
### `public void `[`setBackgroundColor`](#class_q_cef_config_1a2ef252883876dd17193212c52bd02fc0)`(const QColor & color)` {#class_q_cef_config_1a2ef252883876dd17193212c52bd02fc0}

设置网页的背景色

#### 参数
* `color` 设置的颜色

这仅在网页未设置背景颜色时才有效。alpha 分量值将调整为 0 或 255，这意味着如果您传递的 alpha 值在 [1， 255] 范围内，它将被接受为 255。默认值为 qRgba（255， 255，255， 255）

---
### `public const QVariant `[`backgroundColor`](#class_q_cef_config_1aa04db9637f47424834bbcdf05a8b640b)`() const` {#class_q_cef_config_1aa04db9637f47424834bbcdf05a8b640b}

获取网页的背景色

---
### `public void `[`setAcceptLanguageList`](#class_q_cef_config_1a360c26dd512b9a4a3d6596c0590c370b)`(const QString & languages)` {#class_q_cef_config_1a360c26dd512b9a4a3d6596c0590c370b}

设置可接受的语言列表

#### 参数
* `languages` 语言列表（逗号分隔）

---
### `public const QString `[`acceptLanguageList`](#class_q_cef_config_1a2828af9a2815ddeb1026e2f6a760d5e8)`() const` {#class_q_cef_config_1a2828af9a2815ddeb1026e2f6a760d5e8}

 获取可接受的语言列表

---
### `public void `[`setPersistSessionCookies`](#class_q_cef_config_1a04c4f9aa52131df29c4eb6abd48cc2f0)`(bool enabled)` {#class_q_cef_config_1a04c4f9aa52131df29c4eb6abd48cc2f0}

设置是否保留会话 Cookie

#### 参数
* `enabled` True为保留会话 Cookie

---
### `public const QVariant `[`persistSessionCookies`](#class_q_cef_config_1aa8b22bc6b4d9ef5c8aeccfc363ee1f9c)`() const` {#class_q_cef_config_1aa8b22bc6b4d9ef5c8aeccfc363ee1f9c}

获取是否保留会话 Cookie

---
### `public void `[`setPersistUserPreferences`](#class_q_cef_config_1a6c5c7d498a6c003166071ac6e4e7e359)`(bool enabled)` {#class_q_cef_config_1a6c5c7d498a6c003166071ac6e4e7e359}

设置是否保留用户首选项

#### 参数
* `enabled` True 为保留用户首选项

---
### `public const QVariant `[`persistUserPreferences`](#class_q_cef_config_1a4749b6aa16660a15d753f5248985e25f)`() const` {#class_q_cef_config_1a4749b6aa16660a15d753f5248985e25f}

 获取是否保留用户首选项

---
### `public void `[`setRemoteDebuggingPort`](#class_q_cef_config_1ac502d5e4b911c4e57d6fe4167be6d801)`(short port)` {#class_q_cef_config_1ac502d5e4b911c4e57d6fe4167be6d801}

设置远程调试端口

#### 参数：
* `port` 使用的端口

CEF 支持在 Chrome/Edge 中使用 Dev Tools 进行远程调试。如果设置了这个值，那么你可以通过访问[http://127.0.0.1:port ]( http://127.0.0.1:port )从 Chrome/Edge 来调试 web 应用程序

---
### `public const QVariant `[`remoteDebuggingPort`](#class_q_cef_config_1aeaa7b37b83ee32a5ec50a1dec11d0c2e)`() const` {#class_q_cef_config_1aeaa7b37b83ee32a5ec50a1dec11d0c2e}

获取远程调试端口

---
### `enum `[`LogLevel`](#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c) {#class_q_cef_config_1ae437cd58b60d3902bba07e75a48d9a7c}

日志级别

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LOGSEVERITY_DEFAULT            | Default logging (currently INFO logging)
LOGSEVERITY_VERBOSE            | Verbose logging.
LOGSEVERITY_DEBUG            | DEBUG logging.
LOGSEVERITY_INFO            | INFO logging.
LOGSEVERITY_WARNING            | WARNING logging.
LOGSEVERITY_ERROR            | ERROR logging.
LOGSEVERITY_FATAL            | FATAL logging.
LOGSEVERITY_DISABLE            | Disable logging to file for all messages, and to stderr for messages with severity less than FATAL.

---
### `private QScopedPointer< QCefConfigPrivate > `[`d_ptr`](#class_q_cef_config_1ab524eb236e2915eabee11aa49124a0fc) {#class_q_cef_config_1ab524eb236e2915eabee11aa49124a0fc}

