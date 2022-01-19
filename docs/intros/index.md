# Getting Started

## What's QCefView?

QCefView is a Qt Widget integrated with [Chromium Embedded Framework](https://bitbucket.org/chromiumembedded). With QCefView you could build your application to leverage the powerful capabilities of CEF easily.

- Write the application with familiar Qt forms, signals and slots
- straightforward interoperability between Web(Javascript) and Native(C++)

## Why use QCefView rather than Electron?

QCefView is totally different thing with Electron. 

- QCefView is just a component of Qt framework for UI development while Electron is a comprehensive framework for application development
- QCefView is designed for Native language developers while Electron is more friendly to Frontend developers 
- QCefView takes C++ as the primary development language while Electron is based on Javascript
- QCefView provides straightforward interoperability between Web and Native while Electron needs to write plugins

## What kinds of application is QCefView good at?

QCefView is good choice if you want to write the UI with Web Frontend technology and the core functions with native languages. 

For example:

- Movie/Music Player
- Game platforms
- Utility applications
- etc.

In the above scenarios, the applications are almost all context based. They need to display some lists, tables or complex pages with cool effect, for these purpose, web frontend technology is really good solution. Just write the UI as WebApp, host it with QCefView (QCefView is like a WebApp container), and keep your hard-core business logic as native developed component, then combine them with the interoperability provide by QCefView.

**If you aimed to develop a web browser application, QCefView is not the choice for you. Because QCefView was designed to be an UI component not the browser, thus QCefView disabled some features which are required by a browser. For this purpose, you may prefer the original CEF library.**

## Do not want Qt, any better choice?

If you don't like Qt you can build the customized CEF view with the original CEF library, for example you can integrate CEF with Cocoa framework like this project [CocoaCefView](https://github.com/CefView/CocoaCefView).

