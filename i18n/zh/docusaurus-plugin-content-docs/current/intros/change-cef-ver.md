---
sidebar_position: 2
title: 更换CEF版本
---

# 更换CEF版本

如果需要使用不同版本的CEF，可以参照以下步骤：

## 1. 选择CEF版本

可以从CEF Automated Builds网站[https://cef-builds.spotifycdn.com/index.html](https://cef-builds.spotifycdn.com/index.html)选择需要使用的CEF版本。

## 2. 修改QCefConfig.cmake文件

修改路径下的`CefView/CefViewCore/`[CefConfig.cmake](https://github.com/CefView/CefViewCore/blob/3ba46626d9739bd6266356828400ca1de41c1f20/CefConfig.cmake)文件中的CEF版本。

通常，只需要修改第一行中的指令
> set(CEF_SDK_VERSION "112.3.0+gb09c4ca+chromium-112.0.5615.165")

设置 **`CEF_SDK_VERSION`** 为要使用的目标版本。

> 注意!这里的格式为`112.3.0+gb09c4ca+chromium-112.0.5615.165`，非`cef_binary_112.3.0+gb09c4ca+chromium-112.0.5615.165_windows64`

## 3. 构建QCefView

按照上一节的内容构建编译QCefView项目即可。

> **⚠ WARNING: 如果选择的CEF目标版本较旧，或者较新（引入了破坏性的接口变更等），可能导致编译失败，此种情况则需要自行修改[CefViewCore](https://github.com/CefView/CefViewCore)的代码来进行适配。**
