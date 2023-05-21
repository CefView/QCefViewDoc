---
sidebar_position: 1
---

# 编译方法

## 环境配置

### 1. CMake

QCefView通过[CMake](https://cmake.org/)管理项目构建，所以请先安装CMake。最低要求版本为3.19.1，推荐使用最新版本。

### 2. Qt

QCefView是基于Qt框架的，同时支持Qt 5.x和6.x版本。安装Qt之后请确保设置了**QTDIR**环境变量，使其指向Qt工具链目录，例如：

Windows平台：
```bat
set QTDIR=C:\Qt\6.2.2\msvc2019_64
```

macOS平台：
```bash
export QTDIR=/usr/local/Cellar/qt5/5.4.1/clang_64
``` 

Linux平台：
```bash
export QTDIR=/usr/share/Qt/6.2.2/gcc_64
``` 

## 编译构建


从[https://github.com/CefView/QCefView](https://github.com/CefView/QCefView)检出最新代码，不要忘记初始化submodule。该项目依赖子模块：[https://github.com/CefView/CefViewCore](https://github.com/CefView/CefViewCore)。

你可以使用以下 git 命令下载仓库代码：

```
git clone --recursive https://github.com/CefView/QCefView.git
```
### Windows
```bash
# Generate VS projects
generate-win-x86_64.bat

# Build from cmake
cmake --build .build/windows.x86_64
```

生成项目之后也可以在目录`.build/Windows`中找到Visual Studio项目文件，使用Visual Studio打开和编译。

### macOS
```bash
# Generate Xcode project
./generate-mac-x86_64.sh

# Build from cmake 
cmake --build ./build/macos.x86_64
```

生成项目之后也可以在目录`.build/macOS`中找到Xcode项目文件，使用Xcode打开和编译。

### Linux 
```bash
# Generate Unix Make file project
./generate-linux-x86_64.sh

# Build from cmake 
cmake --build ./build/linux.x86_64
```

Linux平台推荐使用Qt Creator作为IDE。
