---
title: QCefContext
---

# class `QCefContext` {#class_q_cef_context}

```
class QCefContext
  : public QObject
```

表示 CEF 上下文

## 总结

 成员                                                         | 描述                                                         
 ------------------------------------------------------------ | ------------------------------------------------------------ 
 `public  `[`QCefContext`](#class_q_cef_context_1aa2b8af8d2d806ba8b5110e868d314c8c)`(QCoreApplication * app, int argc, char ** argv, const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * config)` | QCefContext 构造函数                                         
 `public  `[`~QCefContext`](#class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d)`()` | QCefContext 析构函数                                         
 `public void `[`addLocalFolderResource`](#class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454)`(const QString & path, const QString & url, int priority)` | 添加具有本地 Web 资源目录的 url 映射项。这适用于随后创建的所有实例 
 `public void `[`addArchiveResource`](#class_q_cef_context_1aba9c70a84379190d151bdc4b634367e6)`(const QString & path, const QString & url, const QString & password, int priority)` | 使用包含 Web 资源的本地存档 （.zip） 文件添加 url 映射项。这适用于随后创建的所有实例 
 `public bool `[`addCookie`](#class_q_cef_context_1a6d2e90de7fb5fcf2b7e7a6581d26e62c)`(const QString & name, const QString & value, const QString & domain, const QString & url)` | 将 Cookie 添加到 CEF 上下文，可从使用此上下文创建的所有浏览器访问此 Cookie 
 `public const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * `[`cefConfig`](#class_q_cef_context_1acfd6416ebc0a8df5cf8961dadeff960e)`() const` | 获取 [QCefConfig](QCefConfig.md#class_q_cef_config)          
 `protected bool `[`init`](#class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6)`(const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * config)` | 初始化 CEF 上下文                                            
 `protected void `[`uninit`](#class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b)`()` | 取消初始化 CEF 上下文                                        
 `private QScopedPointer< QCefContextPrivate > `[`d_ptr`](#class_q_cef_context_1a502cdbb18c3abae014e6b8ee42948645) |                                                              
 `public static `[`QCefContext`](#class_q_cef_context)` * `[`instance`](#class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b)`()` | 获取唯一的默认实例                                           

## Members

---
### `public  `[`QCefContext`](#class_q_cef_context_1aa2b8af8d2d806ba8b5110e868d314c8c)`(QCoreApplication * app, int argc, char ** argv, const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * config)` {#class_q_cef_context_1aa2b8af8d2d806ba8b5110e868d314c8c}

QCefContext 构造函数

#### 参数
* `app` QCoreApplication 实例

* `argc` main() 参数 argc

* `argv` main() 参数 argv

* `config` [QCefConfig](QCefConfig.md#class_q_cef_config) 实例

---
### `public  `[`~QCefContext`](#class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d)`()` {#class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d}

QCefContext 析构函数

---
### `public void `[`addLocalFolderResource`](#class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454)`(const QString & path, const QString & url, int priority)` {#class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454}

添加具有本地 Web 资源目录的 url 映射项。这适用于随后创建的所有实例

#### 参数
* `path` 本地资源目录的路径

* `url` 要映射到的网址

* `priority` 优先级

---
### `public void `[`addArchiveResource`](#class_q_cef_context_1aba9c70a84379190d151bdc4b634367e6)`(const QString & path, const QString & url, const QString & password, int priority)` {#class_q_cef_context_1aba9c70a84379190d151bdc4b634367e6}

使用包含 Web 资源的本地存档 （.zip） 文件添加 url 映射项。这适用于随后创建的所有实例

#### 参数
* `path` 本地存档文件的路径

* `url` 要映射到的网址

* `password` 存档的密码

* `priority` 优先级

---
### `public bool `[`addCookie`](#class_q_cef_context_1a6d2e90de7fb5fcf2b7e7a6581d26e62c)`(const QString & name, const QString & value, const QString & domain, const QString & url)` {#class_q_cef_context_1a6d2e90de7fb5fcf2b7e7a6581d26e62c}

将 Cookie 添加到 CEF 上下文，可从使用此上下文创建的所有浏览器访问此 Cookie

#### 参数
* `name`  cookie 项名称

* `value` cookie 项值

* `domain` 适用的域名

* `url` 适用的网址

#### 返回值
True 为成功; 其他为 false

---
### `public const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * `[`cefConfig`](#class_q_cef_context_1acfd6416ebc0a8df5cf8961dadeff960e)`() const` {#class_q_cef_context_1acfd6416ebc0a8df5cf8961dadeff960e}

获取 [QCefConfig](QCefConfig.md#class_q_cef_config)

#### 返回值
[QCefConfig](QCefConfig.md#class_q_cef_config) 实例

---
### `protected bool `[`init`](#class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6)`(const `[`QCefConfig`](QCefConfig.md#class_q_cef_config)` * config)` {#class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6}

初始化 CEF 上下文

#### 参数
* `config` [QCefConfig](QCefConfig.md#class_q_cef_config) 实例

#### 返回值
True 为成功; 其他为 false

---
### `protected void `[`uninit`](#class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b)`()` {#class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b}

取消初始化 CEF 上下文

---
### `private QScopedPointer< QCefContextPrivate > `[`d_ptr`](#class_q_cef_context_1a502cdbb18c3abae014e6b8ee42948645) {#class_q_cef_context_1a502cdbb18c3abae014e6b8ee42948645}

---
### `public static `[`QCefContext`](#class_q_cef_context)` * `[`instance`](#class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b)`()` {#class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b}

获取唯一的默认实例

#### 返回值
默认实例

