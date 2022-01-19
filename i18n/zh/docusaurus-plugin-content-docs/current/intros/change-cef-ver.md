---
sidebar_position: 2
title: 更换CEF版本
---

# 更换CEF版本

如果需要使用不同版本的CEF版本，可以参照以下步骤：

## 1. 选择CEF版本

可以从CEF Automated Builds网站https://cef-builds.spotifycdn.com/index.html选择需要使用的CEF版本。

## 2. Modify QCefConfig.cmake

修改文件[CefConfig.cmake](https://github.com/CefView/CefViewCore/blob/3ba46626d9739bd6266356828400ca1de41c1f20/CefConfig.cmake)中的CEF下载连接。

通常，只需要修改第一行中的指令
> set(CEF_SDK_VERSION "cef_binary_89.0.12+g2b76680+chromium-89.0.4389.90")

设置 **`CEF_SDK_VERSION`** 为要使用的目标版本。

## 3. Build QCefView

按照上一节的内容构建编译QCefView项目即可。

> **⚠ WARNING: 如果选择的CEF目标版本较旧，或者较新（引入了破坏性的接口变更等），可能导致编译失败，此种情况则需要自行修改[CefViewCore](https://github.com/CefView/CefViewCore)的代码来进行适配。**