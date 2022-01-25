---
sidebar_position: 1
---

# Building Instruction

## Prerequisites

### 1. CMake

QCefView project is managed with [CMake](https://cmake.org/), thus you need to install CMake first. The minimum supported CMake version is 3.19.1, but the latest version is recommended.

### 2. Qt

QCefView is based on Qt framework，both Qt 5.x or 6.x are supported. After installation, please add the environment variable **`QTDIR`** to point to the Qt location, for example:

On Windows:
```bat
set QTDIR=C:\Qt\6.2.2\msvc2019_64
```

On macOS:
```bash
export QTDIR=/usr/local/Cellar/qt5/5.4.1/clang_64
``` 

On Linux:
```bash
export QTDIR=/urs/share/Qt/6.2.2/gcc_64
``` 

## Build

Just check out the repo from [https://github.com/CefView/QCefView](https://github.com/CefView/QCefView), then init the submodule. This repo depends on the submodule [https://github.com/CefView/CefViewCore](https://github.com/CefView/CefViewCore). 

### Windows
```bash
# Generate VS projects
generate-win-proj.bat

# Build from cmake
cmake --build .build/Windows
```

Find the project file in folder .build /Windows, you can also open the project with Visual Studio and build it.

### macOS
```bash
# Generate Xcode project
./generate-mac-proj.sh

# Build from cmake 
cmake --build ./build/macOS
```

Find the project file in folder .build /macOS, you can also open the project with Xcode and build it.

### Linux 
```bash
# Generate Unix Make file project
./generate-linux-proj.sh

# Build from cmake 
cmake --build ./build/Linux
```

On Linux platform, Qt Creator is recommended as the IDE.