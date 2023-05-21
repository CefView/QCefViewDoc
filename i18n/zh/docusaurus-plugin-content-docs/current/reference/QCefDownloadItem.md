---
title: QCefDownloadItem
---

# class `QCefDownloadItem` {#class_q_cef_download_item}

表示下载项

## 总结

 成员                                                      | 描述                       
 ------------------------------------------------------------ | ---------------------------------- 
 `public  `[`~QCefDownloadItem`](#class_q_cef_download_item_1a913a2654dcd05ef8facefc515d831124)`()` | QCefDownloadItem 析构函数          
 `public void `[`start`](#class_q_cef_download_item_1a315592aa53a2bf7bc8aea717195f5b43)`(const QString & path, bool useDefaultDialog) const` | 开始下载                           
 `public void `[`pause`](#class_q_cef_download_item_1aaa31f59599e9311f0aee99a0a13e2568)`() const` | 暂停下载                           
 `public void `[`resume`](#class_q_cef_download_item_1aa2afc687e69c7c78f6c49e9a41a34823)`() const` | 恢复下载                           
 `public void `[`cancel`](#class_q_cef_download_item_1a723b2081749a447049efd04e768d9e57)`() const` | 取消下载                           
 `public bool `[`isStarted`](#class_q_cef_download_item_1a6febee1fe8a5f7d15e888a4352d50526)`() const` | 获取下载是否已开始                 
 `public bool `[`isInProgress`](#class_q_cef_download_item_1a22455702c989d4dcc08fb1d13659739d)`() const` | 获取下载是否正在进行               
 `public bool `[`isComplete`](#class_q_cef_download_item_1a67c86edf9e9cb742050e2521b55c86df)`() const` | 获取下载是否完成                   
 `public bool `[`isCanceled`](#class_q_cef_download_item_1ada41b0480a3e97d788086ea8c420a22c)`() const` | 获取下载是否已取消或中断           
 `public qint64 `[`currentSpeed`](#class_q_cef_download_item_1a5c9648906b02ce59aa6d82f03e468c1d)`() const` | 获取当前下载速度                   
 `public int `[`percentComplete`](#class_q_cef_download_item_1a18fafe4f375aa60e43ec7c5d855ab91e)`() const` | 获取完成百分比                     
 `public qint64 `[`totalBytes`](#class_q_cef_download_item_1ab1ff7414475451351e4d4ab50f723bee)`() const` | 获取总字节数                       
 `public qint64 `[`receivedBytes`](#class_q_cef_download_item_1a5d76f04bb41c5e4edad6d680b01fe63f)`() const` | 获取接收的字节数                   
 `public QDateTime `[`startTime`](#class_q_cef_download_item_1afe0d048a282cb605da910de1c5d82242)`() const` | 获取下载开始的时间                 
 `public QDateTime `[`endTime`](#class_q_cef_download_item_1a61b2bd3cdc2f35d2424ded4e8b3801fd)`() const` | 获取下载结束的时间                 
 `public QString `[`fullPath`](#class_q_cef_download_item_1a40227300f52cd34a67281eacf95bcc28)`() const` | 获取已下载或正在下载文件的完整路径 
 `public quint32 `[`id`](#class_q_cef_download_item_1aff911ad0aa21867cdfe56457293f4914)`() const` | 获取此下载的唯一标识符             
 `public QString `[`url`](#class_q_cef_download_item_1a253cf33b582e3994b65d5611ef277bbe)`() const` | 获取网址                           
 `public QString `[`originalUrl`](#class_q_cef_download_item_1a9f9bcb65952b50b4f24c4d55eff9b64e)`() const` | 在任何重定向之前获取原始 URL       
 `public QString `[`suggestedFileName`](#class_q_cef_download_item_1ac0dd9f8bea7ca594f04935d81cfb72a4)`() const` | 获取建议的文件名                   
 `public QString `[`contentDisposition`](#class_q_cef_download_item_1af97dad25e439c8b997d6689fe1c91bf8)`() const` | 获取内容配置                       
 `public QString `[`mimeType`](#class_q_cef_download_item_1afb8ec36477b64a222b0610c8518f8e31)`() const` | 获取 MIME 类型                     
 `private QScopedPointer< QCefDownloadItemPrivate > `[`d_ptr`](#class_q_cef_download_item_1a631e89a5388360954e21644f91371a15) |
 `private  `[`QCefDownloadItem`](#class_q_cef_download_item_1a2721c6c268fbe3b92ec7e3f5524b6d1a)`(`[`QCefDownloadItem`](#class_q_cef_download_item)` &&) = delete` |
 `private `[`QCefDownloadItem`](#class_q_cef_download_item)` & `[`operator=`](#class_q_cef_download_item_1a0486e85d7e5ccf2c182e504129c9e068)`(`[`QCefDownloadItem`](#class_q_cef_download_item)` &&) = delete` |
 `private  `[`QCefDownloadItem`](#class_q_cef_download_item_1a6db795a0e61816d85a4125aa67d98b76)`()` | QCefDownloadItem 构造函数          

## Members

---
### `public  `[`~QCefDownloadItem`](#class_q_cef_download_item_1a913a2654dcd05ef8facefc515d831124)`()` {#class_q_cef_download_item_1a913a2654dcd05ef8facefc515d831124}

QCefDownloadItem 析构函数

---
### `public void `[`start`](#class_q_cef_download_item_1a315592aa53a2bf7bc8aea717195f5b43)`(const QString & path, bool useDefaultDialog) const` {#class_q_cef_download_item_1a315592aa53a2bf7bc8aea717195f5b43}

开始下载

---
### `public void `[`pause`](#class_q_cef_download_item_1aaa31f59599e9311f0aee99a0a13e2568)`() const` {#class_q_cef_download_item_1aaa31f59599e9311f0aee99a0a13e2568}

暂停下载

---
### `public void `[`resume`](#class_q_cef_download_item_1aa2afc687e69c7c78f6c49e9a41a34823)`() const` {#class_q_cef_download_item_1aa2afc687e69c7c78f6c49e9a41a34823}

恢复下载

---
### `public void `[`cancel`](#class_q_cef_download_item_1a723b2081749a447049efd04e768d9e57)`() const` {#class_q_cef_download_item_1a723b2081749a447049efd04e768d9e57}

取消下载

---
### `public bool `[`isStarted`](#class_q_cef_download_item_1a6febee1fe8a5f7d15e888a4352d50526)`() const` {#class_q_cef_download_item_1a6febee1fe8a5f7d15e888a4352d50526}

获取下载是否已开始

#### 返回值

---
### `public bool `[`isInProgress`](#class_q_cef_download_item_1a22455702c989d4dcc08fb1d13659739d)`() const` {#class_q_cef_download_item_1a22455702c989d4dcc08fb1d13659739d}

获取下载是否正在进行

#### 返回值
如果下载正在进行为 true;否则为false

---
### `public bool `[`isComplete`](#class_q_cef_download_item_1a67c86edf9e9cb742050e2521b55c86df)`() const` {#class_q_cef_download_item_1a67c86edf9e9cb742050e2521b55c86df}

获取下载是否完成

#### 返回值
如果下载完成为 true;否则为false

---
### `public bool `[`isCanceled`](#class_q_cef_download_item_1ada41b0480a3e97d788086ea8c420a22c)`() const` {#class_q_cef_download_item_1ada41b0480a3e97d788086ea8c420a22c}

获取下载是否已取消或中断

#### 返回值
如果下载已被取消或中断为 true;否则为 false

---
### `public qint64 `[`currentSpeed`](#class_q_cef_download_item_1a5c9648906b02ce59aa6d82f03e468c1d)`() const` {#class_q_cef_download_item_1a5c9648906b02ce59aa6d82f03e468c1d}

获取当前下载速度

#### 返回值
以 bytes/s 为单位的简单速度估算

---
### `public int `[`percentComplete`](#class_q_cef_download_item_1a18fafe4f375aa60e43ec7c5d855ab91e)`() const` {#class_q_cef_download_item_1a18fafe4f375aa60e43ec7c5d855ab91e}

获取完成百分比

#### 返回值
粗略完成百分比或 -1（如果接收总大小未知）

---
### `public qint64 `[`totalBytes`](#class_q_cef_download_item_1ab1ff7414475451351e4d4ab50f723bee)`() const` {#class_q_cef_download_item_1ab1ff7414475451351e4d4ab50f723bee}

获取总字节数

#### 返回值
总字节数

---
### `public qint64 `[`receivedBytes`](#class_q_cef_download_item_1a5d76f04bb41c5e4edad6d680b01fe63f)`() const` {#class_q_cef_download_item_1a5d76f04bb41c5e4edad6d680b01fe63f}

获取接收的字节数

#### 返回值
接收的字节数

---
### `public QDateTime `[`startTime`](#class_q_cef_download_item_1afe0d048a282cb605da910de1c5d82242)`() const` {#class_q_cef_download_item_1afe0d048a282cb605da910de1c5d82242}

获取下载开始的时间

#### 返回值
下载开始的时间

---
### `public QDateTime `[`endTime`](#class_q_cef_download_item_1a61b2bd3cdc2f35d2424ded4e8b3801fd)`() const` {#class_q_cef_download_item_1a61b2bd3cdc2f35d2424ded4e8b3801fd}

获取下载结束的时间

#### 返回值
下载结束的时间

---
### `public QString `[`fullPath`](#class_q_cef_download_item_1a40227300f52cd34a67281eacf95bcc28)`() const` {#class_q_cef_download_item_1a40227300f52cd34a67281eacf95bcc28}

获取已下载或正在下载文件的完整路径

#### 返回值
已下载或正在下载文件的完整路径

---
### `public quint32 `[`id`](#class_q_cef_download_item_1aff911ad0aa21867cdfe56457293f4914)`() const` {#class_q_cef_download_item_1aff911ad0aa21867cdfe56457293f4914}

获取此下载的唯一标识符

#### 返回值
此下载的唯一标识符

---
### `public QString `[`url`](#class_q_cef_download_item_1a253cf33b582e3994b65d5611ef277bbe)`() const` {#class_q_cef_download_item_1a253cf33b582e3994b65d5611ef277bbe}

获取网址

#### 返回值
网址

---
### `public QString `[`originalUrl`](#class_q_cef_download_item_1a9f9bcb65952b50b4f24c4d55eff9b64e)`() const` {#class_q_cef_download_item_1a9f9bcb65952b50b4f24c4d55eff9b64e}

获取在任何重定向之前原始 URL

#### 返回值
在任何重定向之前原始 URL

---
### `public QString `[`suggestedFileName`](#class_q_cef_download_item_1ac0dd9f8bea7ca594f04935d81cfb72a4)`() const` {#class_q_cef_download_item_1ac0dd9f8bea7ca594f04935d81cfb72a4}

获取建议的文件名

#### 返回值
建议的文件名

---
### `public QString `[`contentDisposition`](#class_q_cef_download_item_1af97dad25e439c8b997d6689fe1c91bf8)`() const` {#class_q_cef_download_item_1af97dad25e439c8b997d6689fe1c91bf8}

获取内容配置

#### 返回值
内容配置

---
### `public QString `[`mimeType`](#class_q_cef_download_item_1afb8ec36477b64a222b0610c8518f8e31)`() const` {#class_q_cef_download_item_1afb8ec36477b64a222b0610c8518f8e31}

获取 MIME 类型

#### 返回值
MIME 类型

---
### `private QScopedPointer< QCefDownloadItemPrivate > `[`d_ptr`](#class_q_cef_download_item_1a631e89a5388360954e21644f91371a15) {#class_q_cef_download_item_1a631e89a5388360954e21644f91371a15}

---
### `private  `[`QCefDownloadItem`](#class_q_cef_download_item_1a2721c6c268fbe3b92ec7e3f5524b6d1a)`(`[`QCefDownloadItem`](#class_q_cef_download_item)` &&) = delete` {#class_q_cef_download_item_1a2721c6c268fbe3b92ec7e3f5524b6d1a}

---
### `private `[`QCefDownloadItem`](#class_q_cef_download_item)` & `[`operator=`](#class_q_cef_download_item_1a0486e85d7e5ccf2c182e504129c9e068)`(`[`QCefDownloadItem`](#class_q_cef_download_item)` &&) = delete` {#class_q_cef_download_item_1a0486e85d7e5ccf2c182e504129c9e068}

---
### `private  `[`QCefDownloadItem`](#class_q_cef_download_item_1a6db795a0e61816d85a4125aa67d98b76)`()` {#class_q_cef_download_item_1a6db795a0e61816d85a4125aa67d98b76}

QCefDownloadItem 构造函数

