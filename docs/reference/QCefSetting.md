---
title: QCefSetting
---

# class `QCefSetting` <a id="class_q_cef_setting" class="anchor"></a>

Represents the settings for individual browser

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`QCefSetting`](#class_q_cef_setting_1afb8450a162ed9ce3f59a37491147db8d)`()` | Constructs the [QCefSetting](#class_q_cef_setting) instance
`public  `[`QCefSetting`](#class_q_cef_setting_1af650fcab674f8c33a996a2d8cd34eaef)`(const `[`QCefSetting`](#class_q_cef_setting)` & other)` | Constructs the [QCefSetting](#class_q_cef_setting) instance from existing one
`public `[`QCefSetting`](#class_q_cef_setting)` & `[`operator=`](#class_q_cef_setting_1a486f0c9edda93fb30c75608ac9b98ba2)`(const `[`QCefSetting`](#class_q_cef_setting)` & other)` | Assigns the existing [QCefSetting](#class_q_cef_setting) instance to current
`public  `[`~QCefSetting`](#class_q_cef_setting_1a589b16fe883213d0e330503c0ccab218)`()` | Destructs the instance
`public void `[`setStandardFontFamily`](#class_q_cef_setting_1a882bfa1507ecea7d13dafc432c541585)`(const QString value)` | Sets the standard font family
`public const QString `[`standardFontFamily`](#class_q_cef_setting_1aa7a0cfa4086251bdfc95c4ae72e52896)`() const` | Gets the standard font family
`public void `[`setFixedFontFamily`](#class_q_cef_setting_1af11ccd0529a79efee12a3e728d24e641)`(const QString & value)` | Sets the fixed font family
`public const QString `[`fixedFontFamily`](#class_q_cef_setting_1a239e1982f4ab4198a62f9c00ae17bcbb)`() const` | Gets the fixed font family
`public void `[`setSerifFontFamily`](#class_q_cef_setting_1a9eadb4d8d6567c78d80f09e1ace1dd30)`(const QString & value)` | Sets the serif font family
`public const QString `[`serifFontFamily`](#class_q_cef_setting_1a43ab6247cbbaa59652846eb84760c1fb)`() const` | Gets the fixed font family
`public void `[`setSansSerifFontFamily`](#class_q_cef_setting_1aa07d27c4a22dc2ec0d041c9deda1d71b)`(const QString & value)` | Sets the sans serif font family
`public const QString `[`sansSerifFontFamily`](#class_q_cef_setting_1a861fccc511473f01f74a5199d2660126)`() const` | Gets the sans serif font family
`public void `[`setCursiveFontFamily`](#class_q_cef_setting_1aef4eb96f03003eb774924fe418a7edf1)`(const QString & value)` | Sets the cursive font family
`public const QString `[`cursiveFontFamily`](#class_q_cef_setting_1a86526505941342ffbc96b6e5226ffcbe)`() const` | Gets the cursive font family
`public void `[`setFantasyFontFamily`](#class_q_cef_setting_1a831bed0440aed06894a85ee8dde74a05)`(const QString & value)` | Sets the fantasy font family
`public const QString `[`fantasyFontFamily`](#class_q_cef_setting_1a0acd7303ff77ae1eff9fa579fc96e97a)`() const` | Gets the fantasy font family
`public void `[`setDefaultEncoding`](#class_q_cef_setting_1a599a011dff8d11c8201036238016a77f)`(const QString & value)` | Sets the default encoding
`public const QString `[`defaultEncoding`](#class_q_cef_setting_1a2de89967072377f279b36e821bde18e1)`() const` | Gets the default encoding
`public void `[`setAcceptLanguageList`](#class_q_cef_setting_1af98c67b11610aa7d62cfae040086afcb)`(const QString & value)` | Sets the acceptable language list
`public const QString `[`acceptLanguageList`](#class_q_cef_setting_1aee323c86faebc36358a92c931c500478)`() const` | Gets the acceptable language list
`public void `[`setWindowlessFrameRate`](#class_q_cef_setting_1a4a5810da8e070288ff80c069f5b52f23)`(const int value)` | Sets the frame rate in window less mode
`public const QVariant `[`windowlessFrameRate`](#class_q_cef_setting_1adfc424688213e0e695b6b84681581135)`() const` | Gets the frame rate in window less mode
`public void `[`setDefaultFontSize`](#class_q_cef_setting_1a85b9cadc6df83a3addbaf567df791339)`(const int value)` | Sets the default font size
`public const QVariant `[`defaultFontSize`](#class_q_cef_setting_1a4a38db62a20b2e8e7a26029f0b928689)`() const` | Gets the default font size
`public void `[`setDefaultFixedFontSize`](#class_q_cef_setting_1a4dddf809104f676469fc03b266d7a2ff)`(const int value)` | Sets the default fixed font size
`public const QVariant `[`defaultFixedFontSize`](#class_q_cef_setting_1ab25a8bd4b9d5acb865c840b8c4320f5d)`() const` | Gets the default fixed font size
`public void `[`setMinimumFontSize`](#class_q_cef_setting_1a0c1733e2e173cb462f0ec21a613b628e)`(const int value)` | Sets the minimum font size
`public const QVariant `[`minimumFontSize`](#class_q_cef_setting_1a3b263c84f28ef76fc1dc4cd4dfad8e5d)`() const` | Gets the minimum font size
`public void `[`setMinimumLogicalFontSize`](#class_q_cef_setting_1aa6e22cc3cfa68ad13809b6766e9cafab)`(const int value)` | Sets the minimum logical font size
`public const QVariant `[`minimumLogicalFontSize`](#class_q_cef_setting_1a3f0801d8ecbc7fe86df805dc6db3aad9)`() const` | Gets the minimum logical font size
`public void `[`setRemoteFonts`](#class_q_cef_setting_1aba88a474960049cda01c7295e514eb8a)`(const bool value)` | Sets to enable or disable remote fonts
`public const QVariant `[`remoteFonts`](#class_q_cef_setting_1a6b503e82defe4c57a88936fb2cec2509)`() const` | Gets whether to enable or disable the remote fonts
`public void `[`setJavascript`](#class_q_cef_setting_1a884abf03a17dc3fa4343b578445219c0)`(const bool value)` | Sets to enable or disable Javascript
`public const QVariant `[`javascript`](#class_q_cef_setting_1abfa7cceca149b6311e7a28e6ae4e2853)`() const` | Gets whether to enable or disable Javascript
`public void `[`setJavascriptCloseWindows`](#class_q_cef_setting_1a7c3755e100310ab63a98cbd6b7c89a6b)`(const bool value)` | Sets to enable or disable the permission of closing window from Javascript
`public const QVariant `[`javascriptCloseWindows`](#class_q_cef_setting_1a8cab27275ce36cb0b1477a85b6694f3b)`() const` | Gets whether to enable or disable the permission of closing window from Javascript
`public void `[`setJavascriptAccessClipboard`](#class_q_cef_setting_1aff0a7e72f55a002f5731f4e202e45d63)`(const bool value)` | Sets to enable or disable the permission of accessing clipboard from Javascript
`public const QVariant `[`javascriptAccessClipboard`](#class_q_cef_setting_1aff511401ea2d0453583db4b642526dbd)`() const` | Gets whether to enable or disable the permission of accessing clipboard from Javascript
`public void `[`setJavascriptDomPaste`](#class_q_cef_setting_1a61c6207fc6fb05b71248fee8766d21a2)`(const bool value)` | Sets to enable or disable the permission of pasting DOM in Javascript
`public const QVariant `[`javascriptDomPaste`](#class_q_cef_setting_1a6696cc8fa0b4ea1ef14d71259cd4350d)`() const` | Gets whether to enable or disable the permission of pasting DOM in Javascript
`public void `[`setPlugins`](#class_q_cef_setting_1afd5813a87ece2924265a90544885e2c0)`(const bool value)` | Sets to enable or disable plugins
`public const QVariant `[`plugins`](#class_q_cef_setting_1a99c3a6c649171d42402af815f6628f03)`() const` | Gets whether to enable or disable plugins
`public void `[`setImageLoading`](#class_q_cef_setting_1a15457b991b298a722cbc9f9507d109fb)`(const bool value)` | Sets to enable or disable the permission of loading images
`public const QVariant `[`imageLoading`](#class_q_cef_setting_1aa06779c82a28a01bd862ac605356be40)`() const` | Gets whether to enable or disable the permission of loading images
`public void `[`setImageShrinkStandaloneToFit`](#class_q_cef_setting_1a562e4477613234a906b2d167473b0627)`(const bool value)` | Sets to enable or disable the shrinking image standalone to fit
`public const QVariant `[`imageShrinkStandaloneToFit`](#class_q_cef_setting_1a7374edce9be761b5d40edef80f42f7b9)`() const` | Gets whether to enable or disable the shrinking image standalone to fit
`public void `[`setTextAreaResize`](#class_q_cef_setting_1a159239d8d7d5b4f944db0c9f37b10509)`(const bool value)` | Sets to enable or disable the resizing of text area
`public const QVariant `[`textAreaResize`](#class_q_cef_setting_1a8d88588797f311f71c55073f95dafafe)`() const` | Gets whether to enable or disable the resizing of text area
`public void `[`setTabToLinks`](#class_q_cef_setting_1a8ccb815304eeadba9d679186472d4e40)`(const bool value)` | Sets to enable or disable tab to links
`public const QVariant `[`tabToLinks`](#class_q_cef_setting_1a9b81d1bcf47146dfc5eeeabeb583e627)`() const` | Gets whether to enable or disable tab to links
`public void `[`setLocalStorage`](#class_q_cef_setting_1afca6695cdffbb1734588c33ffff3aa3c)`(const bool value)` | Sets to enable or disable local storage
`public const QVariant `[`localStorage`](#class_q_cef_setting_1a4fffdf46c7617f7b116e2e836dbb48d0)`() const` | Gets whether to enable or disable local storage
`public void `[`setDatabases`](#class_q_cef_setting_1ad0680b646641dd568b7de8ae072670db)`(const bool value)` | Sets to enable or disable database
`public const QVariant `[`databases`](#class_q_cef_setting_1a94b2a957c8754619df7a37258a41c31d)`() const` | Gets whether to enable or disable database
`public void `[`setWebGL`](#class_q_cef_setting_1a984a074332bd07b78da2079d1d333209)`(const bool value)` | Sets to enable or disable webGL
`public const QVariant `[`webGL`](#class_q_cef_setting_1aca84c981db4fcc2cf6aa3ece7c44973c)`() const` | Gets whether to enable or disable webGL
`public void `[`setBackgroundColor`](#class_q_cef_setting_1a6dbd7b1da3a151294e8bf020a16687be)`(const QColor & value)` | Sets the background color
`public const QVariant `[`backgroundColor`](#class_q_cef_setting_1a9db276640c98e1d5d38290e06ae17d1a)`() const` | Gets the background color
 | 

## Members

---
### `public  `[`QCefSetting`](#class_q_cef_setting_1afb8450a162ed9ce3f59a37491147db8d)`()` <a id="class_q_cef_setting_1afb8450a162ed9ce3f59a37491147db8d" class="anchor"></a>

Constructs the [QCefSetting](#class_q_cef_setting) instance

---
### `public  `[`QCefSetting`](#class_q_cef_setting_1af650fcab674f8c33a996a2d8cd34eaef)`(const `[`QCefSetting`](#class_q_cef_setting)` & other)` <a id="class_q_cef_setting_1af650fcab674f8c33a996a2d8cd34eaef" class="anchor"></a>

Constructs the [QCefSetting](#class_q_cef_setting) instance from existing one

#### Parameters
* `other` The existing [QCefSetting](#class_q_cef_setting) instance

---
### `public `[`QCefSetting`](#class_q_cef_setting)` & `[`operator=`](#class_q_cef_setting_1a486f0c9edda93fb30c75608ac9b98ba2)`(const `[`QCefSetting`](#class_q_cef_setting)` & other)` <a id="class_q_cef_setting_1a486f0c9edda93fb30c75608ac9b98ba2" class="anchor"></a>

Assigns the existing [QCefSetting](#class_q_cef_setting) instance to current

#### Parameters
* `other`

---
### `public  `[`~QCefSetting`](#class_q_cef_setting_1a589b16fe883213d0e330503c0ccab218)`()` <a id="class_q_cef_setting_1a589b16fe883213d0e330503c0ccab218" class="anchor"></a>

Destructs the instance

---
### `public void `[`setStandardFontFamily`](#class_q_cef_setting_1a882bfa1507ecea7d13dafc432c541585)`(const QString value)` <a id="class_q_cef_setting_1a882bfa1507ecea7d13dafc432c541585" class="anchor"></a>

Sets the standard font family

#### Parameters
* `value` The font family

---
### `public const QString `[`standardFontFamily`](#class_q_cef_setting_1aa7a0cfa4086251bdfc95c4ae72e52896)`() const` <a id="class_q_cef_setting_1aa7a0cfa4086251bdfc95c4ae72e52896" class="anchor"></a>

Gets the standard font family

#### Returns
The font family

---
### `public void `[`setFixedFontFamily`](#class_q_cef_setting_1af11ccd0529a79efee12a3e728d24e641)`(const QString & value)` <a id="class_q_cef_setting_1af11ccd0529a79efee12a3e728d24e641" class="anchor"></a>

Sets the fixed font family

#### Parameters
* `value` The font family

---
### `public const QString `[`fixedFontFamily`](#class_q_cef_setting_1a239e1982f4ab4198a62f9c00ae17bcbb)`() const` <a id="class_q_cef_setting_1a239e1982f4ab4198a62f9c00ae17bcbb" class="anchor"></a>

Gets the fixed font family

#### Returns
The font family

---
### `public void `[`setSerifFontFamily`](#class_q_cef_setting_1a9eadb4d8d6567c78d80f09e1ace1dd30)`(const QString & value)` <a id="class_q_cef_setting_1a9eadb4d8d6567c78d80f09e1ace1dd30" class="anchor"></a>

Sets the serif font family

#### Parameters
* `value` The font family

---
### `public const QString `[`serifFontFamily`](#class_q_cef_setting_1a43ab6247cbbaa59652846eb84760c1fb)`() const` <a id="class_q_cef_setting_1a43ab6247cbbaa59652846eb84760c1fb" class="anchor"></a>

Gets the fixed font family

#### Returns
The font family

---
### `public void `[`setSansSerifFontFamily`](#class_q_cef_setting_1aa07d27c4a22dc2ec0d041c9deda1d71b)`(const QString & value)` <a id="class_q_cef_setting_1aa07d27c4a22dc2ec0d041c9deda1d71b" class="anchor"></a>

Sets the sans serif font family

#### Parameters
* `value` The font family

---
### `public const QString `[`sansSerifFontFamily`](#class_q_cef_setting_1a861fccc511473f01f74a5199d2660126)`() const` <a id="class_q_cef_setting_1a861fccc511473f01f74a5199d2660126" class="anchor"></a>

Gets the sans serif font family

#### Returns
The font family

---
### `public void `[`setCursiveFontFamily`](#class_q_cef_setting_1aef4eb96f03003eb774924fe418a7edf1)`(const QString & value)` <a id="class_q_cef_setting_1aef4eb96f03003eb774924fe418a7edf1" class="anchor"></a>

Sets the cursive font family

#### Parameters
* `value` The font family

---
### `public const QString `[`cursiveFontFamily`](#class_q_cef_setting_1a86526505941342ffbc96b6e5226ffcbe)`() const` <a id="class_q_cef_setting_1a86526505941342ffbc96b6e5226ffcbe" class="anchor"></a>

Gets the cursive font family

#### Returns
The font family

---
### `public void `[`setFantasyFontFamily`](#class_q_cef_setting_1a831bed0440aed06894a85ee8dde74a05)`(const QString & value)` <a id="class_q_cef_setting_1a831bed0440aed06894a85ee8dde74a05" class="anchor"></a>

Sets the fantasy font family

#### Parameters
* `value` The font family

---
### `public const QString `[`fantasyFontFamily`](#class_q_cef_setting_1a0acd7303ff77ae1eff9fa579fc96e97a)`() const` <a id="class_q_cef_setting_1a0acd7303ff77ae1eff9fa579fc96e97a" class="anchor"></a>

Gets the fantasy font family

#### Returns
The font family

---
### `public void `[`setDefaultEncoding`](#class_q_cef_setting_1a599a011dff8d11c8201036238016a77f)`(const QString & value)` <a id="class_q_cef_setting_1a599a011dff8d11c8201036238016a77f" class="anchor"></a>

Sets the default encoding

#### Parameters
* `value` The encoding name

---
### `public const QString `[`defaultEncoding`](#class_q_cef_setting_1a2de89967072377f279b36e821bde18e1)`() const` <a id="class_q_cef_setting_1a2de89967072377f279b36e821bde18e1" class="anchor"></a>

Gets the default encoding

#### Returns
The encoding name

---
### `public void `[`setAcceptLanguageList`](#class_q_cef_setting_1af98c67b11610aa7d62cfae040086afcb)`(const QString & value)` <a id="class_q_cef_setting_1af98c67b11610aa7d62cfae040086afcb" class="anchor"></a>

Sets the acceptable language list

#### Parameters
* `value` The acceptable languate list

---
### `public const QString `[`acceptLanguageList`](#class_q_cef_setting_1aee323c86faebc36358a92c931c500478)`() const` <a id="class_q_cef_setting_1aee323c86faebc36358a92c931c500478" class="anchor"></a>

Gets the acceptable language list

#### Returns
The acceptable languate list

---
### `public void `[`setWindowlessFrameRate`](#class_q_cef_setting_1a4a5810da8e070288ff80c069f5b52f23)`(const int value)` <a id="class_q_cef_setting_1a4a5810da8e070288ff80c069f5b52f23" class="anchor"></a>

Sets the frame rate in window less mode

#### Parameters
* `value` The frame rate

---
### `public const QVariant `[`windowlessFrameRate`](#class_q_cef_setting_1adfc424688213e0e695b6b84681581135)`() const` <a id="class_q_cef_setting_1adfc424688213e0e695b6b84681581135" class="anchor"></a>

Gets the frame rate in window less mode

#### Returns
The frame rate

---
### `public void `[`setDefaultFontSize`](#class_q_cef_setting_1a85b9cadc6df83a3addbaf567df791339)`(const int value)` <a id="class_q_cef_setting_1a85b9cadc6df83a3addbaf567df791339" class="anchor"></a>

Sets the default font size

#### Parameters
* `value` The font size

---
### `public const QVariant `[`defaultFontSize`](#class_q_cef_setting_1a4a38db62a20b2e8e7a26029f0b928689)`() const` <a id="class_q_cef_setting_1a4a38db62a20b2e8e7a26029f0b928689" class="anchor"></a>

Gets the default font size

#### Returns
The font size

---
### `public void `[`setDefaultFixedFontSize`](#class_q_cef_setting_1a4dddf809104f676469fc03b266d7a2ff)`(const int value)` <a id="class_q_cef_setting_1a4dddf809104f676469fc03b266d7a2ff" class="anchor"></a>

Sets the default fixed font size

#### Parameters
* `value` The font size

---
### `public const QVariant `[`defaultFixedFontSize`](#class_q_cef_setting_1ab25a8bd4b9d5acb865c840b8c4320f5d)`() const` <a id="class_q_cef_setting_1ab25a8bd4b9d5acb865c840b8c4320f5d" class="anchor"></a>

Gets the default fixed font size

#### Returns
The font size

---
### `public void `[`setMinimumFontSize`](#class_q_cef_setting_1a0c1733e2e173cb462f0ec21a613b628e)`(const int value)` <a id="class_q_cef_setting_1a0c1733e2e173cb462f0ec21a613b628e" class="anchor"></a>

Sets the minimum font size

#### Parameters
* `value` The font size

---
### `public const QVariant `[`minimumFontSize`](#class_q_cef_setting_1a3b263c84f28ef76fc1dc4cd4dfad8e5d)`() const` <a id="class_q_cef_setting_1a3b263c84f28ef76fc1dc4cd4dfad8e5d" class="anchor"></a>

Gets the minimum font size

#### Returns
The font size

---
### `public void `[`setMinimumLogicalFontSize`](#class_q_cef_setting_1aa6e22cc3cfa68ad13809b6766e9cafab)`(const int value)` <a id="class_q_cef_setting_1aa6e22cc3cfa68ad13809b6766e9cafab" class="anchor"></a>

Sets the minimum logical font size

#### Parameters
* `value` The font size

---
### `public const QVariant `[`minimumLogicalFontSize`](#class_q_cef_setting_1a3f0801d8ecbc7fe86df805dc6db3aad9)`() const` <a id="class_q_cef_setting_1a3f0801d8ecbc7fe86df805dc6db3aad9" class="anchor"></a>

Gets the minimum logical font size

#### Returns
The font size

---
### `public void `[`setRemoteFonts`](#class_q_cef_setting_1aba88a474960049cda01c7295e514eb8a)`(const bool value)` <a id="class_q_cef_setting_1aba88a474960049cda01c7295e514eb8a" class="anchor"></a>

Sets to enable or disable remote fonts

#### Parameters
* `value` True to enalbe; false to disable

---
### `public const QVariant `[`remoteFonts`](#class_q_cef_setting_1a6b503e82defe4c57a88936fb2cec2509)`() const` <a id="class_q_cef_setting_1a6b503e82defe4c57a88936fb2cec2509" class="anchor"></a>

Gets whether to enable or disable the remote fonts

#### Returns
True to enalbe; false to disable

---
### `public void `[`setJavascript`](#class_q_cef_setting_1a884abf03a17dc3fa4343b578445219c0)`(const bool value)` <a id="class_q_cef_setting_1a884abf03a17dc3fa4343b578445219c0" class="anchor"></a>

Sets to enable or disable Javascript

#### Parameters
* `value` True to enalbe; false to disable

---
### `public const QVariant `[`javascript`](#class_q_cef_setting_1abfa7cceca149b6311e7a28e6ae4e2853)`() const` <a id="class_q_cef_setting_1abfa7cceca149b6311e7a28e6ae4e2853" class="anchor"></a>

Gets whether to enable or disable Javascript

#### Returns
True to enalbe; false to disable

---
### `public void `[`setJavascriptCloseWindows`](#class_q_cef_setting_1a7c3755e100310ab63a98cbd6b7c89a6b)`(const bool value)` <a id="class_q_cef_setting_1a7c3755e100310ab63a98cbd6b7c89a6b" class="anchor"></a>

Sets to enable or disable the permission of closing window from Javascript

#### Parameters
* `value` True to enalbe; false to disable

---
### `public const QVariant `[`javascriptCloseWindows`](#class_q_cef_setting_1a8cab27275ce36cb0b1477a85b6694f3b)`() const` <a id="class_q_cef_setting_1a8cab27275ce36cb0b1477a85b6694f3b" class="anchor"></a>

Gets whether to enable or disable the permission of closing window from Javascript

#### Returns
True to enalbe; false to disable

---
### `public void `[`setJavascriptAccessClipboard`](#class_q_cef_setting_1aff0a7e72f55a002f5731f4e202e45d63)`(const bool value)` <a id="class_q_cef_setting_1aff0a7e72f55a002f5731f4e202e45d63" class="anchor"></a>

Sets to enable or disable the permission of accessing clipboard from Javascript

#### Parameters
* `value` True to enalbe; false to disable

---
### `public const QVariant `[`javascriptAccessClipboard`](#class_q_cef_setting_1aff511401ea2d0453583db4b642526dbd)`() const` <a id="class_q_cef_setting_1aff511401ea2d0453583db4b642526dbd" class="anchor"></a>

Gets whether to enable or disable the permission of accessing clipboard from Javascript

#### Returns
True to enalbe; false to disable

---
### `public void `[`setJavascriptDomPaste`](#class_q_cef_setting_1a61c6207fc6fb05b71248fee8766d21a2)`(const bool value)` <a id="class_q_cef_setting_1a61c6207fc6fb05b71248fee8766d21a2" class="anchor"></a>

Sets to enable or disable the permission of pasting DOM in Javascript

#### Parameters
* `value` True to enalbe; false to disable

---
### `public const QVariant `[`javascriptDomPaste`](#class_q_cef_setting_1a6696cc8fa0b4ea1ef14d71259cd4350d)`() const` <a id="class_q_cef_setting_1a6696cc8fa0b4ea1ef14d71259cd4350d" class="anchor"></a>

Gets whether to enable or disable the permission of pasting DOM in Javascript

#### Returns
True to enalbe; false to disable

---
### `public void `[`setPlugins`](#class_q_cef_setting_1afd5813a87ece2924265a90544885e2c0)`(const bool value)` <a id="class_q_cef_setting_1afd5813a87ece2924265a90544885e2c0" class="anchor"></a>

Sets to enable or disable plugins

#### Parameters
* `value` True to enalbe; false to disable

---
### `public const QVariant `[`plugins`](#class_q_cef_setting_1a99c3a6c649171d42402af815f6628f03)`() const` <a id="class_q_cef_setting_1a99c3a6c649171d42402af815f6628f03" class="anchor"></a>

Gets whether to enable or disable plugins

#### Returns
True to enalbe; false to disable

---
### `public void `[`setImageLoading`](#class_q_cef_setting_1a15457b991b298a722cbc9f9507d109fb)`(const bool value)` <a id="class_q_cef_setting_1a15457b991b298a722cbc9f9507d109fb" class="anchor"></a>

Sets to enable or disable the permission of loading images

#### Parameters
* `value` True to enalbe; false to disable

---
### `public const QVariant `[`imageLoading`](#class_q_cef_setting_1aa06779c82a28a01bd862ac605356be40)`() const` <a id="class_q_cef_setting_1aa06779c82a28a01bd862ac605356be40" class="anchor"></a>

Gets whether to enable or disable the permission of loading images

#### Returns
True to enalbe; false to disable

---
### `public void `[`setImageShrinkStandaloneToFit`](#class_q_cef_setting_1a562e4477613234a906b2d167473b0627)`(const bool value)` <a id="class_q_cef_setting_1a562e4477613234a906b2d167473b0627" class="anchor"></a>

Sets to enable or disable the shrinking image standalone to fit

#### Parameters
* `value` True to enalbe; false to disable

---
### `public const QVariant `[`imageShrinkStandaloneToFit`](#class_q_cef_setting_1a7374edce9be761b5d40edef80f42f7b9)`() const` <a id="class_q_cef_setting_1a7374edce9be761b5d40edef80f42f7b9" class="anchor"></a>

Gets whether to enable or disable the shrinking image standalone to fit

#### Returns
True to enalbe; false to disable

---
### `public void `[`setTextAreaResize`](#class_q_cef_setting_1a159239d8d7d5b4f944db0c9f37b10509)`(const bool value)` <a id="class_q_cef_setting_1a159239d8d7d5b4f944db0c9f37b10509" class="anchor"></a>

Sets to enable or disable the resizing of text area

#### Parameters
* `value` True to enalbe; false to disable

---
### `public const QVariant `[`textAreaResize`](#class_q_cef_setting_1a8d88588797f311f71c55073f95dafafe)`() const` <a id="class_q_cef_setting_1a8d88588797f311f71c55073f95dafafe" class="anchor"></a>

Gets whether to enable or disable the resizing of text area

#### Returns
True to enalbe; false to disable

---
### `public void `[`setTabToLinks`](#class_q_cef_setting_1a8ccb815304eeadba9d679186472d4e40)`(const bool value)` <a id="class_q_cef_setting_1a8ccb815304eeadba9d679186472d4e40" class="anchor"></a>

Sets to enable or disable tab to links

#### Parameters
* `value` True to enalbe; false to disable

---
### `public const QVariant `[`tabToLinks`](#class_q_cef_setting_1a9b81d1bcf47146dfc5eeeabeb583e627)`() const` <a id="class_q_cef_setting_1a9b81d1bcf47146dfc5eeeabeb583e627" class="anchor"></a>

Gets whether to enable or disable tab to links

#### Returns
True to enalbe; false to disable

---
### `public void `[`setLocalStorage`](#class_q_cef_setting_1afca6695cdffbb1734588c33ffff3aa3c)`(const bool value)` <a id="class_q_cef_setting_1afca6695cdffbb1734588c33ffff3aa3c" class="anchor"></a>

Sets to enable or disable local storage

#### Parameters
* `value` True to enalbe; false to disable

---
### `public const QVariant `[`localStorage`](#class_q_cef_setting_1a4fffdf46c7617f7b116e2e836dbb48d0)`() const` <a id="class_q_cef_setting_1a4fffdf46c7617f7b116e2e836dbb48d0" class="anchor"></a>

Gets whether to enable or disable local storage

#### Returns
True to enalbe; false to disable

---
### `public void `[`setDatabases`](#class_q_cef_setting_1ad0680b646641dd568b7de8ae072670db)`(const bool value)` <a id="class_q_cef_setting_1ad0680b646641dd568b7de8ae072670db" class="anchor"></a>

Sets to enable or disable database

#### Parameters
* `value` True to enalbe; false to disable

---
### `public const QVariant `[`databases`](#class_q_cef_setting_1a94b2a957c8754619df7a37258a41c31d)`() const` <a id="class_q_cef_setting_1a94b2a957c8754619df7a37258a41c31d" class="anchor"></a>

Gets whether to enable or disable database

#### Returns
True to enalbe; false to disable

---
### `public void `[`setWebGL`](#class_q_cef_setting_1a984a074332bd07b78da2079d1d333209)`(const bool value)` <a id="class_q_cef_setting_1a984a074332bd07b78da2079d1d333209" class="anchor"></a>

Sets to enable or disable webGL

#### Parameters
* `value` True to enalbe; false to disable

---
### `public const QVariant `[`webGL`](#class_q_cef_setting_1aca84c981db4fcc2cf6aa3ece7c44973c)`() const` <a id="class_q_cef_setting_1aca84c981db4fcc2cf6aa3ece7c44973c" class="anchor"></a>

Gets whether to enable or disable webGL

#### Returns
True to enalbe; false to disable

---
### `public void `[`setBackgroundColor`](#class_q_cef_setting_1a6dbd7b1da3a151294e8bf020a16687be)`(const QColor & value)` <a id="class_q_cef_setting_1a6dbd7b1da3a151294e8bf020a16687be" class="anchor"></a>

Sets the background color

#### Parameters
* `value` The color

This only works if the web page has no background color set. The alpha component value will be adjusted to 0 or 255, it means if you pass a value with alpha value in the range of [1, 255], it will be accepted as 255. The default value is inherited from [QCefConfig::backgroundColor()](QCefConfig.md#class_q_cef_config_1aa04db9637f47424834bbcdf05a8b640b)

---
### `public const QVariant `[`backgroundColor`](#class_q_cef_setting_1a9db276640c98e1d5d38290e06ae17d1a)`() const` <a id="class_q_cef_setting_1a9db276640c98e1d5d38290e06ae17d1a" class="anchor"></a>

Gets the background color

#### Returns
The color

---
###  <a id="class_q_cef_setting_1ab47508d9301964f7c77c49150d942813" class="anchor"></a>

