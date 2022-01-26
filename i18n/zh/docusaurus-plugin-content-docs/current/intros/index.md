# 快速开始

## QCefView是什么？

QCefView是为Qt框架开发的一个封装集成了[Chromium Embedded Framework](https://bitbucket.org/chromiumembedded)库的Wdiget UI组件。使用QCefView可以充分发挥CEF丰富强大的Web能力，快速开发混合架构的应用程序。

- 使用Qt开发者熟悉的Forms，signal/slot来开发应用
- 方便直观的Javascript/C++互操作方式

## 为何选择QCefView而不用Electron？

从设计思路和最终形态来讲QCefView和Electron是完全不同的技术。

- QCefView只是一个为Qt框架开发的UI组件，Electron则是一个功能完备的应用开发框架
- QCefView是为Native系统开发者设计的，Electron对前端开发者更友好
- QCefView使用C++作为主要开发语言，Electron全部基于Javascript
- QCefView提供便捷直观的Javascript/C++互操作方式，Electron通过编写插件实现Web/Native互操作

## QCefView适合开发何种类型的应用？

如果你打算使用Web前端技术来开发你的应用UI，同时保持使用Native方式编写核心业务/功能逻辑，QCefView是最佳选择。

例如：

- 音乐/视频播放器
- 游戏平台
- 工具类应用
- 等等……

以上场景中的应用几乎都是基于内容的平台，他们都需要展示很多列表，表格或者有各种复杂特效的页面。基于此种目的，Web前端技术是目前的最好的选择，把UI当作Web前端App来开发，而核心的功能和逻辑仍然使用Native的方式来编写，然后通过QCefView整合，能极大的提升生产效率，并且一份UI代码适配所有主流桌面平台。

**如果你打算开发一款浏览器，QCefView并不是较好的选择，因为QCefView设计的目的是UI组件，并不提供作为浏览器的全部特性，该类需求应该使用原生CEF来实现较好。**

## 不喜欢Qt，有其他选择么？

如果你不喜欢使用Qt，你可以选择使用原生CEF来构建定制化的browser view组件，例如你可以将CEF与Cocoa框架进行集成，从而创建一个macOS平台原生的WebView，可以参考：[CocoaCefView](https://github.com/CefView/CocoaCefView)


