---
title: QCefSetting
---

# class `QCefSetting` {#class_q_cef_setting}

表示单个浏览器的设置

## 总结

 成员                                                         | 描述                                              
 ------------------------------------------------------------ | ------------------------------------------------- 
 `public  `[`QCefSetting`](#class_q_cef_setting_1afb8450a162ed9ce3f59a37491147db8d)`()` | [QCefSetting](#class_q_cef_setting) 构造函数      
 `public  `[`QCefSetting`](#class_q_cef_setting_1af650fcab674f8c33a996a2d8cd34eaef)`(const `[`QCefSetting`](#class_q_cef_setting)` & other)` | [QCefSetting](#class_q_cef_setting) 拷贝构造函数  
 `public `[`QCefSetting`](#class_q_cef_setting)` & `[`operator=`](#class_q_cef_setting_1a486f0c9edda93fb30c75608ac9b98ba2)`(const `[`QCefSetting`](#class_q_cef_setting)` & other)` | [QCefSetting](#class_q_cef_setting) 拷贝赋值函数  
 `public  `[`~QCefSetting`](#class_q_cef_setting_1a589b16fe883213d0e330503c0ccab218)`()` | [QCefSetting](#class_q_cef_setting) 析构函数      
 `public void `[`setStandardFontFamily`](#class_q_cef_setting_1a882bfa1507ecea7d13dafc432c541585)`(const QString value)` | 设置标准字体族                                    
 `public const QString `[`standardFontFamily`](#class_q_cef_setting_1aa7a0cfa4086251bdfc95c4ae72e52896)`() const` | 获取标准字体族                                    
 `public void `[`setFixedFontFamily`](#class_q_cef_setting_1af11ccd0529a79efee12a3e728d24e641)`(const QString & value)` | 设置等宽字体族                                    
 `public const QString `[`fixedFontFamily`](#class_q_cef_setting_1a239e1982f4ab4198a62f9c00ae17bcbb)`() const` | 获取等宽字体族                                    
 `public void `[`setSerifFontFamily`](#class_q_cef_setting_1a9eadb4d8d6567c78d80f09e1ace1dd30)`(const QString & value)` | 设置衬线字体族                                    
 `public const QString `[`serifFontFamily`](#class_q_cef_setting_1a43ab6247cbbaa59652846eb84760c1fb)`() const` | 获取衬线字体族                                    
 `public void `[`setSansSerifFontFamily`](#class_q_cef_setting_1aa07d27c4a22dc2ec0d041c9deda1d71b)`(const QString & value)` | 设置无衬线字体族                                  
 `public const QString `[`sansSerifFontFamily`](#class_q_cef_setting_1a861fccc511473f01f74a5199d2660126)`() const` | 获取无衬线字体族                                  
 `public void `[`setCursiveFontFamily`](#class_q_cef_setting_1aef4eb96f03003eb774924fe418a7edf1)`(const QString & value)` | 设置手写字体族                                    
 `public const QString `[`cursiveFontFamily`](#class_q_cef_setting_1a86526505941342ffbc96b6e5226ffcbe)`() const` | 获取手写字体族                                    
 `public void `[`setFantasyFontFamily`](#class_q_cef_setting_1a831bed0440aed06894a85ee8dde74a05)`(const QString & value)` | 设置艺术字体族                                    
 `public const QString `[`fantasyFontFamily`](#class_q_cef_setting_1a0acd7303ff77ae1eff9fa579fc96e97a)`() const` | 获取艺术字体族                                    
 `public void `[`setDefaultEncoding`](#class_q_cef_setting_1a599a011dff8d11c8201036238016a77f)`(const QString & value)` | 设置默认编码                                      
 `public const QString `[`defaultEncoding`](#class_q_cef_setting_1a2de89967072377f279b36e821bde18e1)`() const` | 获取默认编码                                      
 `public void `[`setAcceptLanguageList`](#class_q_cef_setting_1af98c67b11610aa7d62cfae040086afcb)`(const QString & value)` | 设置可接受的语言列表                              
 `public const QString `[`acceptLanguageList`](#class_q_cef_setting_1aee323c86faebc36358a92c931c500478)`() const` | 获取可接受的语言列表                              
 `public void `[`setWindowlessFrameRate`](#class_q_cef_setting_1a4a5810da8e070288ff80c069f5b52f23)`(const int value)` | 设置 OSR 模式的帧率                               
 `public const QVariant `[`windowlessFrameRate`](#class_q_cef_setting_1adfc424688213e0e695b6b84681581135)`() const` | 获取 OSR 模式的帧率                               
 `public void `[`setDefaultFontSize`](#class_q_cef_setting_1a85b9cadc6df83a3addbaf567df791339)`(const int value)` | 设置默认字体大小                                  
 `public const QVariant `[`defaultFontSize`](#class_q_cef_setting_1a4a38db62a20b2e8e7a26029f0b928689)`() const` | 获取默认字体大小                                  
 `public void `[`setDefaultFixedFontSize`](#class_q_cef_setting_1a4dddf809104f676469fc03b266d7a2ff)`(const int value)` | 设置默认等宽字体大小                              
 `public const QVariant `[`defaultFixedFontSize`](#class_q_cef_setting_1ab25a8bd4b9d5acb865c840b8c4320f5d)`() const` | 获取默认等宽字体大小                              
 `public void `[`setMinimumFontSize`](#class_q_cef_setting_1a0c1733e2e173cb462f0ec21a613b628e)`(const int value)` | 设置最小字体大小                                  
 `public const QVariant `[`minimumFontSize`](#class_q_cef_setting_1a3b263c84f28ef76fc1dc4cd4dfad8e5d)`() const` | 获取最小字体大小                                  
 `public void `[`setMinimumLogicalFontSize`](#class_q_cef_setting_1aa6e22cc3cfa68ad13809b6766e9cafab)`(const int value)` | 设置最小逻辑字体大小                              
 `public const QVariant `[`minimumLogicalFontSize`](#class_q_cef_setting_1a3f0801d8ecbc7fe86df805dc6db3aad9)`() const` | 获取最小逻辑字体大小                              
 `public void `[`setRemoteFonts`](#class_q_cef_setting_1aba88a474960049cda01c7295e514eb8a)`(const bool value)` | 设置为启用或禁用远程字体                          
 `public const QVariant `[`remoteFonts`](#class_q_cef_setting_1a6b503e82defe4c57a88936fb2cec2509)`() const` | 获取是启用还是禁用远程字体                        
 `public void `[`setJavascript`](#class_q_cef_setting_1a884abf03a17dc3fa4343b578445219c0)`(const bool value)` | 设置为启用或禁用 Javascript                       
 `public const QVariant `[`javascript`](#class_q_cef_setting_1abfa7cceca149b6311e7a28e6ae4e2853)`() const` | 获取是启用还是禁用 Javascript                     
 `public void `[`setJavascriptCloseWindows`](#class_q_cef_setting_1a7c3755e100310ab63a98cbd6b7c89a6b)`(const bool value)` | 设置启用或禁用从 Javascript 关闭窗口的权限        
 `public const QVariant `[`javascriptCloseWindows`](#class_q_cef_setting_1a8cab27275ce36cb0b1477a85b6694f3b)`() const` | 获取是否启用或禁用从 Javascript 关闭窗口的权限    
 `public void `[`setJavascriptAccessClipboard`](#class_q_cef_setting_1aff0a7e72f55a002f5731f4e202e45d63)`(const bool value)` | 设置为启用或禁用从 Javascript 访问剪贴板的权限    
 `public const QVariant `[`javascriptAccessClipboard`](#class_q_cef_setting_1aff511401ea2d0453583db4b642526dbd)`() const` | 获取是否启用或禁用从 Javascript 访问剪贴板的权限  
 `public void `[`setJavascriptDomPaste`](#class_q_cef_setting_1a61c6207fc6fb05b71248fee8766d21a2)`(const bool value)` | 设置启用或禁用在 Javascript 中粘贴 DOM 的权限     
 `public const QVariant `[`javascriptDomPaste`](#class_q_cef_setting_1a6696cc8fa0b4ea1ef14d71259cd4350d)`() const` | 获取是否启用或禁用在 JavaScript 中粘贴 DOM 的权限 
 `public void `[`setPlugins`](#class_q_cef_setting_1afd5813a87ece2924265a90544885e2c0)`(const bool value)` | 设置为启用或禁用插件                              
 `public const QVariant `[`plugins`](#class_q_cef_setting_1a99c3a6c649171d42402af815f6628f03)`() const` | 获取是启用还是禁用插件                            
 `public void `[`setImageLoading`](#class_q_cef_setting_1a15457b991b298a722cbc9f9507d109fb)`(const bool value)` | 获取是启用还是禁用加载图像的权限                  
 `public const QVariant `[`imageLoading`](#class_q_cef_setting_1aa06779c82a28a01bd862ac605356be40)`() const` | 获取是启用还是禁用加载图像的权限                  
 `public void `[`setImageShrinkStandaloneToFit`](#class_q_cef_setting_1a562e4477613234a906b2d167473b0627)`(const bool value)` | 设置为启用或禁用独立缩小图像以适应                
 `public const QVariant `[`imageShrinkStandaloneToFit`](#class_q_cef_setting_1a7374edce9be761b5d40edef80f42f7b9)`() const` | 获取启用或禁用独立缩小图像以适应                  
 `public void `[`setTextAreaResize`](#class_q_cef_setting_1a159239d8d7d5b4f944db0c9f37b10509)`(const bool value)` | 设置为启用或禁用文本区域的大小调整                
 `public const QVariant `[`textAreaResize`](#class_q_cef_setting_1a8d88588797f311f71c55073f95dafafe)`() const` | 获取是启用还是禁用调整文本区域的大小              
 `public void `[`setTabToLinks`](#class_q_cef_setting_1a8ccb815304eeadba9d679186472d4e40)`(const bool value)` | 设置为启用或禁用选项卡到链接                      
 `public const QVariant `[`tabToLinks`](#class_q_cef_setting_1a9b81d1bcf47146dfc5eeeabeb583e627)`() const` | 获取是启用还是禁用指向链接的选项卡                
 `public void `[`setLocalStorage`](#class_q_cef_setting_1afca6695cdffbb1734588c33ffff3aa3c)`(const bool value)` | 设置为启用或禁用本地存储                          
 `public const QVariant `[`localStorage`](#class_q_cef_setting_1a4fffdf46c7617f7b116e2e836dbb48d0)`() const` | 获取是启用还是禁用本地存储                        
 `public void `[`setDatabases`](#class_q_cef_setting_1ad0680b646641dd568b7de8ae072670db)`(const bool value)` | 设置为启用或禁用数据库                            
 `public const QVariant `[`databases`](#class_q_cef_setting_1a94b2a957c8754619df7a37258a41c31d)`() const` | 获取是启用还是禁用数据库                          
 `public void `[`setWebGL`](#class_q_cef_setting_1a984a074332bd07b78da2079d1d333209)`(const bool value)` | 设置为启用或禁用 webGL                            
 `public const QVariant `[`webGL`](#class_q_cef_setting_1aca84c981db4fcc2cf6aa3ece7c44973c)`() const` | 获取是启用还是禁用 webGL                          
 `public void `[`setBackgroundColor`](#class_q_cef_setting_1a6dbd7b1da3a151294e8bf020a16687be)`(const QColor & value)` | 设置背景颜色                                      
 `public const QVariant `[`backgroundColor`](#class_q_cef_setting_1a9db276640c98e1d5d38290e06ae17d1a)`() const` | 获取背景色                                        
 `private QScopedPointer< QCefSettingPrivate > `[`d_ptr`](#class_q_cef_setting_1ab47508d9301964f7c77c49150d942813) |                                                   

## Members

---
### `public  `[`QCefSetting`](#class_q_cef_setting_1afb8450a162ed9ce3f59a37491147db8d)`()` {#class_q_cef_setting_1afb8450a162ed9ce3f59a37491147db8d}

[QCefSetting](#class_q_cef_setting) 构造函数

---
### `public  `[`QCefSetting`](#class_q_cef_setting_1af650fcab674f8c33a996a2d8cd34eaef)`(const `[`QCefSetting`](#class_q_cef_setting)` & other)` {#class_q_cef_setting_1af650fcab674f8c33a996a2d8cd34eaef}

[QCefSetting](#class_q_cef_setting) 拷贝构造函数

#### 参数
* `other` 另一个[QCefSetting](#class_q_cef_setting) 实例

---
### `public `[`QCefSetting`](#class_q_cef_setting)` & `[`operator=`](#class_q_cef_setting_1a486f0c9edda93fb30c75608ac9b98ba2)`(const `[`QCefSetting`](#class_q_cef_setting)` & other)` {#class_q_cef_setting_1a486f0c9edda93fb30c75608ac9b98ba2}

[QCefSetting](#class_q_cef_setting) 拷贝赋值函数

#### 参数
* `other` 另一个[QCefSetting](#class_q_cef_setting) 实例

---
### `public  `[`~QCefSetting`](#class_q_cef_setting_1a589b16fe883213d0e330503c0ccab218)`()` {#class_q_cef_setting_1a589b16fe883213d0e330503c0ccab218}

[QCefSetting](#class_q_cef_setting) 析构函数

---
### `public void `[`setStandardFontFamily`](#class_q_cef_setting_1a882bfa1507ecea7d13dafc432c541585)`(const QString value)` {#class_q_cef_setting_1a882bfa1507ecea7d13dafc432c541585}

设置标准字体族

#### 参数
* `value` 字体族

---
### `public const QString `[`standardFontFamily`](#class_q_cef_setting_1aa7a0cfa4086251bdfc95c4ae72e52896)`() const` {#class_q_cef_setting_1aa7a0cfa4086251bdfc95c4ae72e52896}

获取标准字体族

#### 返回值
字体族

---
### `public void `[`setFixedFontFamily`](#class_q_cef_setting_1af11ccd0529a79efee12a3e728d24e641)`(const QString & value)` {#class_q_cef_setting_1af11ccd0529a79efee12a3e728d24e641}

设置等宽字体族

#### 参数
* `value` 字体族

---
### `public const QString `[`fixedFontFamily`](#class_q_cef_setting_1a239e1982f4ab4198a62f9c00ae17bcbb)`() const` {#class_q_cef_setting_1a239e1982f4ab4198a62f9c00ae17bcbb}

获取等宽字体族

#### 返回值
字体族

---
### `public void `[`setSerifFontFamily`](#class_q_cef_setting_1a9eadb4d8d6567c78d80f09e1ace1dd30)`(const QString & value)` {#class_q_cef_setting_1a9eadb4d8d6567c78d80f09e1ace1dd30}

设置衬线字体族

#### 参数
* `value` 字体族

---
### `public const QString `[`serifFontFamily`](#class_q_cef_setting_1a43ab6247cbbaa59652846eb84760c1fb)`() const` {#class_q_cef_setting_1a43ab6247cbbaa59652846eb84760c1fb}

获取衬线字体族

#### 返回值
字体族

---
### `public void `[`setSansSerifFontFamily`](#class_q_cef_setting_1aa07d27c4a22dc2ec0d041c9deda1d71b)`(const QString & value)` {#class_q_cef_setting_1aa07d27c4a22dc2ec0d041c9deda1d71b}

设置无衬线字体族

#### 参数
* `value` 字体族

---
### `public const QString `[`sansSerifFontFamily`](#class_q_cef_setting_1a861fccc511473f01f74a5199d2660126)`() const` {#class_q_cef_setting_1a861fccc511473f01f74a5199d2660126}

获取无衬线字体族

#### 返回值
字体族

---
### `public void `[`setCursiveFontFamily`](#class_q_cef_setting_1aef4eb96f03003eb774924fe418a7edf1)`(const QString & value)` {#class_q_cef_setting_1aef4eb96f03003eb774924fe418a7edf1}

设置手写字体族

#### 参数
* `value` 字体族

---
### `public const QString `[`cursiveFontFamily`](#class_q_cef_setting_1a86526505941342ffbc96b6e5226ffcbe)`() const` {#class_q_cef_setting_1a86526505941342ffbc96b6e5226ffcbe}

获取手写字体族

#### 返回值
字体族

---
### `public void `[`setFantasyFontFamily`](#class_q_cef_setting_1a831bed0440aed06894a85ee8dde74a05)`(const QString & value)` {#class_q_cef_setting_1a831bed0440aed06894a85ee8dde74a05}

设置艺术字体族

#### 参数
* `value` 字体族

---
### `public const QString `[`fantasyFontFamily`](#class_q_cef_setting_1a0acd7303ff77ae1eff9fa579fc96e97a)`() const` {#class_q_cef_setting_1a0acd7303ff77ae1eff9fa579fc96e97a}

获取艺术字体族

#### 返回值
字体族

---
### `public void `[`setDefaultEncoding`](#class_q_cef_setting_1a599a011dff8d11c8201036238016a77f)`(const QString & value)` {#class_q_cef_setting_1a599a011dff8d11c8201036238016a77f}

设置默认编码

#### 参数
* `value` 编码名称

---
### `public const QString `[`defaultEncoding`](#class_q_cef_setting_1a2de89967072377f279b36e821bde18e1)`() const` {#class_q_cef_setting_1a2de89967072377f279b36e821bde18e1}

获取默认编码

#### 返回值
编码名称

---
### `public void `[`setAcceptLanguageList`](#class_q_cef_setting_1af98c67b11610aa7d62cfae040086afcb)`(const QString & value)` {#class_q_cef_setting_1af98c67b11610aa7d62cfae040086afcb}

设置可接受的语言列表

#### 参数
* `value` 可接受的语言列表

---
### `public const QString `[`acceptLanguageList`](#class_q_cef_setting_1aee323c86faebc36358a92c931c500478)`() const` {#class_q_cef_setting_1aee323c86faebc36358a92c931c500478}

获取可接受的语言列表

#### 返回值
可接受的语言列表

---
### `public void `[`setWindowlessFrameRate`](#class_q_cef_setting_1a4a5810da8e070288ff80c069f5b52f23)`(const int value)` {#class_q_cef_setting_1a4a5810da8e070288ff80c069f5b52f23}

设置 OSR 模式的帧率

#### 参数
* `value` 帧率

---
### `public const QVariant `[`windowlessFrameRate`](#class_q_cef_setting_1adfc424688213e0e695b6b84681581135)`() const` {#class_q_cef_setting_1adfc424688213e0e695b6b84681581135}

获取 OSR 模式的帧率

#### 返回值
帧率

---
### `public void `[`setDefaultFontSize`](#class_q_cef_setting_1a85b9cadc6df83a3addbaf567df791339)`(const int value)` {#class_q_cef_setting_1a85b9cadc6df83a3addbaf567df791339}

设置默认字体大小

#### 参数
* `value` 字体大小

---
### `public const QVariant `[`defaultFontSize`](#class_q_cef_setting_1a4a38db62a20b2e8e7a26029f0b928689)`() const` {#class_q_cef_setting_1a4a38db62a20b2e8e7a26029f0b928689}

获取默认字体大小

#### 返回值
字体大小

---
### `public void `[`setDefaultFixedFontSize`](#class_q_cef_setting_1a4dddf809104f676469fc03b266d7a2ff)`(const int value)` {#class_q_cef_setting_1a4dddf809104f676469fc03b266d7a2ff}

设置默认等宽字体大小

#### 参数
* `value` 字体大小

---
### `public const QVariant `[`defaultFixedFontSize`](#class_q_cef_setting_1ab25a8bd4b9d5acb865c840b8c4320f5d)`() const` {#class_q_cef_setting_1ab25a8bd4b9d5acb865c840b8c4320f5d}

获取默认等宽字体大小

#### 返回值
字体大小

---
### `public void `[`setMinimumFontSize`](#class_q_cef_setting_1a0c1733e2e173cb462f0ec21a613b628e)`(const int value)` {#class_q_cef_setting_1a0c1733e2e173cb462f0ec21a613b628e}

设置最小字体大小

#### 参数
* `value` 字体大小

---
### `public const QVariant `[`minimumFontSize`](#class_q_cef_setting_1a3b263c84f28ef76fc1dc4cd4dfad8e5d)`() const` {#class_q_cef_setting_1a3b263c84f28ef76fc1dc4cd4dfad8e5d}

获取最小字体大小

#### 返回值
字体大小

---
### `public void `[`setMinimumLogicalFontSize`](#class_q_cef_setting_1aa6e22cc3cfa68ad13809b6766e9cafab)`(const int value)` {#class_q_cef_setting_1aa6e22cc3cfa68ad13809b6766e9cafab}

设置最小逻辑字体大小

#### 参数
* `value` 字体大小

---
### `public const QVariant `[`minimumLogicalFontSize`](#class_q_cef_setting_1a3f0801d8ecbc7fe86df805dc6db3aad9)`() const` {#class_q_cef_setting_1a3f0801d8ecbc7fe86df805dc6db3aad9}

获取最小逻辑字体大小

#### 返回值
字体大小

---
### `public void `[`setRemoteFonts`](#class_q_cef_setting_1aba88a474960049cda01c7295e514eb8a)`(const bool value)` {#class_q_cef_setting_1aba88a474960049cda01c7295e514eb8a}

设置为启用或禁用远程字体

#### 参数
* `value` True 为启用; false为禁用

---
### `public const QVariant `[`remoteFonts`](#class_q_cef_setting_1a6b503e82defe4c57a88936fb2cec2509)`() const` {#class_q_cef_setting_1a6b503e82defe4c57a88936fb2cec2509}

获取是启用还是禁用远程字体

#### 返回值
True 为启用; false为禁用

---
### `public void `[`setJavascript`](#class_q_cef_setting_1a884abf03a17dc3fa4343b578445219c0)`(const bool value)` {#class_q_cef_setting_1a884abf03a17dc3fa4343b578445219c0}

设置为启用或禁用 Javascript

#### 参数
* `value` True 为启用; false为禁用

---
### `public const QVariant `[`javascript`](#class_q_cef_setting_1abfa7cceca149b6311e7a28e6ae4e2853)`() const` {#class_q_cef_setting_1abfa7cceca149b6311e7a28e6ae4e2853}

获取是启用还是禁用 Javascript

#### 返回值
True 为启用; false为禁用

---
### `public void `[`setJavascriptCloseWindows`](#class_q_cef_setting_1a7c3755e100310ab63a98cbd6b7c89a6b)`(const bool value)` {#class_q_cef_setting_1a7c3755e100310ab63a98cbd6b7c89a6b}

设置启用或禁用从 Javascript 关闭窗口的权限

#### 参数
* `value` True 为启用; false为禁用

---
### `public const QVariant `[`javascriptCloseWindows`](#class_q_cef_setting_1a8cab27275ce36cb0b1477a85b6694f3b)`() const` {#class_q_cef_setting_1a8cab27275ce36cb0b1477a85b6694f3b}

获取是否启用或禁用从 Javascript 关闭窗口的权限

#### 返回值
True 为启用; false为禁用

---
### `public void `[`setJavascriptAccessClipboard`](#class_q_cef_setting_1aff0a7e72f55a002f5731f4e202e45d63)`(const bool value)` {#class_q_cef_setting_1aff0a7e72f55a002f5731f4e202e45d63}

设置为启用或禁用从 Javascript 访问剪贴板的权限

#### 参数
* `value` True 为启用; false为禁用

---
### `public const QVariant `[`javascriptAccessClipboard`](#class_q_cef_setting_1aff511401ea2d0453583db4b642526dbd)`() const` {#class_q_cef_setting_1aff511401ea2d0453583db4b642526dbd}

获取是否启用或禁用从 Javascript 访问剪贴板的权限

#### 返回值
True 为启用; false为禁用

---
### `public void `[`setJavascriptDomPaste`](#class_q_cef_setting_1a61c6207fc6fb05b71248fee8766d21a2)`(const bool value)` {#class_q_cef_setting_1a61c6207fc6fb05b71248fee8766d21a2}

设置启用或禁用在 Javascript 中粘贴 DOM 的权限

#### 参数
* `value` True 为启用; false为禁用

---
### `public const QVariant `[`javascriptDomPaste`](#class_q_cef_setting_1a6696cc8fa0b4ea1ef14d71259cd4350d)`() const` {#class_q_cef_setting_1a6696cc8fa0b4ea1ef14d71259cd4350d}

获取是否启用或禁用在 JavaScript 中粘贴 DOM 的权限

#### 返回值
True 为启用; false为禁用

---
### `public void `[`setPlugins`](#class_q_cef_setting_1afd5813a87ece2924265a90544885e2c0)`(const bool value)` {#class_q_cef_setting_1afd5813a87ece2924265a90544885e2c0}

设置为启用或禁用插件

#### 参数
* `value` True 为启用; false为禁用

---
### `public const QVariant `[`plugins`](#class_q_cef_setting_1a99c3a6c649171d42402af815f6628f03)`() const` {#class_q_cef_setting_1a99c3a6c649171d42402af815f6628f03}

获取启用还是禁用插件

#### 返回值
True 为启用; false为禁用

---
### `public void `[`setImageLoading`](#class_q_cef_setting_1a15457b991b298a722cbc9f9507d109fb)`(const bool value)` {#class_q_cef_setting_1a15457b991b298a722cbc9f9507d109fb}

设置启用还是禁用加载图像的权限

#### 参数
* `value` True 为启用; false为禁用

---
### `public const QVariant `[`imageLoading`](#class_q_cef_setting_1aa06779c82a28a01bd862ac605356be40)`() const` {#class_q_cef_setting_1aa06779c82a28a01bd862ac605356be40}

获取启用还是禁用加载图像的权限

#### 返回值
True 为启用; false为禁用

---
### `public void `[`setImageShrinkStandaloneToFit`](#class_q_cef_setting_1a562e4477613234a906b2d167473b0627)`(const bool value)` {#class_q_cef_setting_1a562e4477613234a906b2d167473b0627}

设置为启用或禁用独立缩小图像以适应

#### 参数
* `value` True 为启用; false为禁用

---
### `public const QVariant `[`imageShrinkStandaloneToFit`](#class_q_cef_setting_1a7374edce9be761b5d40edef80f42f7b9)`() const` {#class_q_cef_setting_1a7374edce9be761b5d40edef80f42f7b9}

获取启用或禁用独立缩小图像以适应

#### 返回值
True 为启用; false为禁用

---
### `public void `[`setTextAreaResize`](#class_q_cef_setting_1a159239d8d7d5b4f944db0c9f37b10509)`(const bool value)` {#class_q_cef_setting_1a159239d8d7d5b4f944db0c9f37b10509}

设置为启用或禁用文本区域的大小调整

#### 参数
* `value` True 为启用; false为禁用

---
### `public const QVariant `[`textAreaResize`](#class_q_cef_setting_1a8d88588797f311f71c55073f95dafafe)`() const` {#class_q_cef_setting_1a8d88588797f311f71c55073f95dafafe}

获取是启用还是禁用调整文本区域的大小

#### 返回值
True 为启用; false为禁用

---
### `public void `[`setTabToLinks`](#class_q_cef_setting_1a8ccb815304eeadba9d679186472d4e40)`(const bool value)` {#class_q_cef_setting_1a8ccb815304eeadba9d679186472d4e40}

设置为启用或禁用选项卡到链接

#### 参数
* `value` True 为启用; false为禁用

---
### `public const QVariant `[`tabToLinks`](#class_q_cef_setting_1a9b81d1bcf47146dfc5eeeabeb583e627)`() const` {#class_q_cef_setting_1a9b81d1bcf47146dfc5eeeabeb583e627}

获取启用还是禁用指向链接的选项卡

#### 返回值
True 为启用; false为禁用

---
### `public void `[`setLocalStorage`](#class_q_cef_setting_1afca6695cdffbb1734588c33ffff3aa3c)`(const bool value)` {#class_q_cef_setting_1afca6695cdffbb1734588c33ffff3aa3c}

设置为启用或禁用本地存储

#### 参数
* `value` True 为启用; false为禁用

---
### `public const QVariant `[`localStorage`](#class_q_cef_setting_1a4fffdf46c7617f7b116e2e836dbb48d0)`() const` {#class_q_cef_setting_1a4fffdf46c7617f7b116e2e836dbb48d0}

获取启用还是禁用本地存储

#### 返回值
True 为启用; false为禁用

---
### `public void `[`setDatabases`](#class_q_cef_setting_1ad0680b646641dd568b7de8ae072670db)`(const bool value)` {#class_q_cef_setting_1ad0680b646641dd568b7de8ae072670db}

设置为启用或禁用数据库

#### 参数
* `value` True 为启用; false为禁用

---
### `public const QVariant `[`databases`](#class_q_cef_setting_1a94b2a957c8754619df7a37258a41c31d)`() const` {#class_q_cef_setting_1a94b2a957c8754619df7a37258a41c31d}

获取是启用还是禁用数据库

#### 返回值
True 为启用; false为禁用

---
### `public void `[`setWebGL`](#class_q_cef_setting_1a984a074332bd07b78da2079d1d333209)`(const bool value)` {#class_q_cef_setting_1a984a074332bd07b78da2079d1d333209}

设置为启用或禁用 webGL

#### 参数
* `value` True 为启用; false为禁用

---
### `public const QVariant `[`webGL`](#class_q_cef_setting_1aca84c981db4fcc2cf6aa3ece7c44973c)`() const` {#class_q_cef_setting_1aca84c981db4fcc2cf6aa3ece7c44973c}

获取启用还是禁用 webGLL

#### 返回值
True 为启用; false为禁用

---
### `public void `[`setBackgroundColor`](#class_q_cef_setting_1a6dbd7b1da3a151294e8bf020a16687be)`(const QColor & value)` {#class_q_cef_setting_1a6dbd7b1da3a151294e8bf020a16687be}

设置背景颜色

#### 参数
* `value` 颜色值

这仅在网页未设置背景颜色时才有效。alpha 分量值将调整为 0 或 255，这意味着如果您传递的 alpha 值在 [1， 255] 范围内，它将被接受为 255。默认值继承自 [QCefConfig::backgroundColor()](QCefConfig.md#class_q_cef_config_1aa04db9637f47424834bbcdf05a8b640b)

---
### `public const QVariant `[`backgroundColor`](#class_q_cef_setting_1a9db276640c98e1d5d38290e06ae17d1a)`() const` {#class_q_cef_setting_1a9db276640c98e1d5d38290e06ae17d1a}

获取背景色

#### 返回值
颜色值

---
### `private QScopedPointer< QCefSettingPrivate > `[`d_ptr`](#class_q_cef_setting_1ab47508d9301964f7c77c49150d942813) {#class_q_cef_setting_1ab47508d9301964f7c77c49150d942813}

