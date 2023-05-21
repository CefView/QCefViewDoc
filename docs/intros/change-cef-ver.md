---
sidebar_position: 2
title: Change CEF version
---

# Change CEF version

If you want to change the version of CEF binary distribution, please follow the instructions:

## 1. Find Target Version

Find the target version you want from the CEF Automated Builds website: [https://cef-builds.spotifycdn.com/index.html](https://cef-builds.spotifycdn.com/index.html).

## 2. Modify QCefConfig.cmake

Change the CEF version in the `CefView/CefViewCore/` [CefConfig.cmake](https://github.com/CefView/CefViewCore/blob/3ba46626d9739bd6266356828400ca1de41c1f20/CefConfig.cmake) file.

Normally you just need to change the first line command:
> set(CEF_SDK_VERSION "112.3.0+gb09c4ca+chromium-112.0.5615.165")

set the **`CEF_SDK_VERSION`** to the target version you want.

> Note! The format here is `112.3.0+gb09c4ca+chromium-112.0.5615.165`，not `cef_binary_112.3.0+gb09c4ca+chromium-112.0.5615.165_windows64`

## 3. Build QCefView

Build QCefView project as the instructions described in previous section.

> **⚠ WARNING: If you choose a very early CEF version or a brand new one which introduces breaking changes, you may need to adapt the [CefViewCore](https://github.com/CefView/CefViewCore) repo to the target version manually.**