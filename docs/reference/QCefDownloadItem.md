---
title: QCefDownloadItem
---

# class `QCefDownloadItem` {#class_q_cef_download_item}

Represents the download item.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`~QCefDownloadItem`](#class_q_cef_download_item_1a913a2654dcd05ef8facefc515d831124)`()`                  | Destructs the download item instance.
`public void `[`start`](#class_q_cef_download_item_1a315592aa53a2bf7bc8aea717195f5b43)`(const QString & path, bool useDefaultDialog) const`                  | Starts to download the item.
`public void `[`pause`](#class_q_cef_download_item_1aaa31f59599e9311f0aee99a0a13e2568)`() const`                  | Pauses the download.
`public void `[`resume`](#class_q_cef_download_item_1aa2afc687e69c7c78f6c49e9a41a34823)`() const`                  | Resume the download.
`public void `[`cancel`](#class_q_cef_download_item_1a723b2081749a447049efd04e768d9e57)`() const`                  | Cancels the download.
`public bool `[`isStarted`](#class_q_cef_download_item_1a6febee1fe8a5f7d15e888a4352d50526)`() const`                  | Gets whether the download is started.
`public bool `[`isInProgress`](#class_q_cef_download_item_1a22455702c989d4dcc08fb1d13659739d)`() const`                  | Gets whether the download is in progress.
`public bool `[`isComplete`](#class_q_cef_download_item_1a67c86edf9e9cb742050e2521b55c86df)`() const`                  | Gets whether the download is complete.
`public bool `[`isCanceled`](#class_q_cef_download_item_1ada41b0480a3e97d788086ea8c420a22c)`() const`                  | Gets whether the download has been canceled or interrupted.
`public qint64 `[`currentSpeed`](#class_q_cef_download_item_1a5c9648906b02ce59aa6d82f03e468c1d)`() const`                  | Gets current download speed.
`public int `[`percentComplete`](#class_q_cef_download_item_1a18fafe4f375aa60e43ec7c5d855ab91e)`() const`                  | Gets the completion percentage.
`public qint64 `[`totalBytes`](#class_q_cef_download_item_1ab1ff7414475451351e4d4ab50f723bee)`() const`                  | Gets total number of bytes.
`public qint64 `[`receivedBytes`](#class_q_cef_download_item_1a5d76f04bb41c5e4edad6d680b01fe63f)`() const`                  | Gets number of received bytes.
`public QDateTime `[`startTime`](#class_q_cef_download_item_1afe0d048a282cb605da910de1c5d82242)`() const`                  | Gets the time that the download started.
`public QDateTime `[`endTime`](#class_q_cef_download_item_1a61b2bd3cdc2f35d2424ded4e8b3801fd)`() const`                  | Gets the time that the download ended.
`public QString `[`fullPath`](#class_q_cef_download_item_1a40227300f52cd34a67281eacf95bcc28)`() const`                  | Gets the full path to the downloaded or downloading file.
`public quint32 `[`id`](#class_q_cef_download_item_1aff911ad0aa21867cdfe56457293f4914)`() const`                  | Gets the unique identifier for this download.
`public QString `[`url`](#class_q_cef_download_item_1a253cf33b582e3994b65d5611ef277bbe)`() const`                  | Gets the URL.
`public QString `[`originalUrl`](#class_q_cef_download_item_1a9f9bcb65952b50b4f24c4d55eff9b64e)`() const`                  | Gets the original URL before any redirections.
`public QString `[`suggestedFileName`](#class_q_cef_download_item_1ac0dd9f8bea7ca594f04935d81cfb72a4)`() const`                  | Gets the suggested file name.
`public QString `[`contentDisposition`](#class_q_cef_download_item_1af97dad25e439c8b997d6689fe1c91bf8)`() const`                  | Gets the content disposition.
`public QString `[`mimeType`](#class_q_cef_download_item_1afb8ec36477b64a222b0610c8518f8e31)`() const`                  | Gets the mime type.
`private QScopedPointer< QCefDownloadItemPrivate > `[`d_ptr`](#class_q_cef_download_item_1a631e89a5388360954e21644f91371a15)                  | 
`private  `[`QCefDownloadItem`](#class_q_cef_download_item_1a2721c6c268fbe3b92ec7e3f5524b6d1a)`(`[`QCefDownloadItem`](#class_q_cef_download_item)` &&) = delete`                  | 
`private `[`QCefDownloadItem`](#class_q_cef_download_item)` & `[`operator=`](#class_q_cef_download_item_1a0486e85d7e5ccf2c182e504129c9e068)`(`[`QCefDownloadItem`](#class_q_cef_download_item)` &&) = delete`                  | 
`private  `[`QCefDownloadItem`](#class_q_cef_download_item_1a6db795a0e61816d85a4125aa67d98b76)`()`                  | Constructs a download item instance.

## Members

---
### `public  `[`~QCefDownloadItem`](#class_q_cef_download_item_1a913a2654dcd05ef8facefc515d831124)`()` {#class_q_cef_download_item_1a913a2654dcd05ef8facefc515d831124}

Destructs the download item instance.

---
### `public void `[`start`](#class_q_cef_download_item_1a315592aa53a2bf7bc8aea717195f5b43)`(const QString & path, bool useDefaultDialog) const` {#class_q_cef_download_item_1a315592aa53a2bf7bc8aea717195f5b43}

Starts to download the item.

#### Parameters
* `path` The full path name (must include file name) to save the downloaded item

* `useDefaultDialog` Whether to use the default 'Save As...' dialog or not

The 'path' parameter only works when 'useDefaultDialog' is set to false. If you set 'useDefaultDialog' to true then you cannot control the initial location of the opened 'Save As...' dialog, it is determined by CEF internal implementation.

---
### `public void `[`pause`](#class_q_cef_download_item_1aaa31f59599e9311f0aee99a0a13e2568)`() const` {#class_q_cef_download_item_1aaa31f59599e9311f0aee99a0a13e2568}

Pauses the download.

---
### `public void `[`resume`](#class_q_cef_download_item_1aa2afc687e69c7c78f6c49e9a41a34823)`() const` {#class_q_cef_download_item_1aa2afc687e69c7c78f6c49e9a41a34823}

Resume the download.

---
### `public void `[`cancel`](#class_q_cef_download_item_1a723b2081749a447049efd04e768d9e57)`() const` {#class_q_cef_download_item_1a723b2081749a447049efd04e768d9e57}

Cancels the download.

---
### `public bool `[`isStarted`](#class_q_cef_download_item_1a6febee1fe8a5f7d15e888a4352d50526)`() const` {#class_q_cef_download_item_1a6febee1fe8a5f7d15e888a4352d50526}

Gets whether the download is started.

#### Returns

---
### `public bool `[`isInProgress`](#class_q_cef_download_item_1a22455702c989d4dcc08fb1d13659739d)`() const` {#class_q_cef_download_item_1a22455702c989d4dcc08fb1d13659739d}

Gets whether the download is in progress.

#### Returns
True if the download is in progress; otherwise false

---
### `public bool `[`isComplete`](#class_q_cef_download_item_1a67c86edf9e9cb742050e2521b55c86df)`() const` {#class_q_cef_download_item_1a67c86edf9e9cb742050e2521b55c86df}

Gets whether the download is complete.

#### Returns
True if the download is complete; otherwise false

---
### `public bool `[`isCanceled`](#class_q_cef_download_item_1ada41b0480a3e97d788086ea8c420a22c)`() const` {#class_q_cef_download_item_1ada41b0480a3e97d788086ea8c420a22c}

Gets whether the download has been canceled or interrupted.

#### Returns
True if the download has been canceled or interrupted; otherwise false

---
### `public qint64 `[`currentSpeed`](#class_q_cef_download_item_1a5c9648906b02ce59aa6d82f03e468c1d)`() const` {#class_q_cef_download_item_1a5c9648906b02ce59aa6d82f03e468c1d}

Gets current download speed.

#### Returns
A simple speed estimate in bytes/s

---
### `public int `[`percentComplete`](#class_q_cef_download_item_1a18fafe4f375aa60e43ec7c5d855ab91e)`() const` {#class_q_cef_download_item_1a18fafe4f375aa60e43ec7c5d855ab91e}

Gets the completion percentage.

#### Returns
The rough percent complete or -1 if the receive total size is unknown

---
### `public qint64 `[`totalBytes`](#class_q_cef_download_item_1ab1ff7414475451351e4d4ab50f723bee)`() const` {#class_q_cef_download_item_1ab1ff7414475451351e4d4ab50f723bee}

Gets total number of bytes.

#### Returns
The total number of bytes

---
### `public qint64 `[`receivedBytes`](#class_q_cef_download_item_1a5d76f04bb41c5e4edad6d680b01fe63f)`() const` {#class_q_cef_download_item_1a5d76f04bb41c5e4edad6d680b01fe63f}

Gets number of received bytes.

#### Returns
The number of received bytes

---
### `public QDateTime `[`startTime`](#class_q_cef_download_item_1afe0d048a282cb605da910de1c5d82242)`() const` {#class_q_cef_download_item_1afe0d048a282cb605da910de1c5d82242}

Gets the time that the download started.

#### Returns
The time that the download started

---
### `public QDateTime `[`endTime`](#class_q_cef_download_item_1a61b2bd3cdc2f35d2424ded4e8b3801fd)`() const` {#class_q_cef_download_item_1a61b2bd3cdc2f35d2424ded4e8b3801fd}

Gets the time that the download ended.

#### Returns
The time that the download ended

---
### `public QString `[`fullPath`](#class_q_cef_download_item_1a40227300f52cd34a67281eacf95bcc28)`() const` {#class_q_cef_download_item_1a40227300f52cd34a67281eacf95bcc28}

Gets the full path to the downloaded or downloading file.

#### Returns
The full path to the downloaded or downloading file

---
### `public quint32 `[`id`](#class_q_cef_download_item_1aff911ad0aa21867cdfe56457293f4914)`() const` {#class_q_cef_download_item_1aff911ad0aa21867cdfe56457293f4914}

Gets the unique identifier for this download.

#### Returns
The unique identifier for this download

---
### `public QString `[`url`](#class_q_cef_download_item_1a253cf33b582e3994b65d5611ef277bbe)`() const` {#class_q_cef_download_item_1a253cf33b582e3994b65d5611ef277bbe}

Gets the URL.

#### Returns
The the URL

---
### `public QString `[`originalUrl`](#class_q_cef_download_item_1a9f9bcb65952b50b4f24c4d55eff9b64e)`() const` {#class_q_cef_download_item_1a9f9bcb65952b50b4f24c4d55eff9b64e}

Gets the original URL before any redirections.

#### Returns
The original URL before any redirections

---
### `public QString `[`suggestedFileName`](#class_q_cef_download_item_1ac0dd9f8bea7ca594f04935d81cfb72a4)`() const` {#class_q_cef_download_item_1ac0dd9f8bea7ca594f04935d81cfb72a4}

Gets the suggested file name.

#### Returns
The suggested file name

---
### `public QString `[`contentDisposition`](#class_q_cef_download_item_1af97dad25e439c8b997d6689fe1c91bf8)`() const` {#class_q_cef_download_item_1af97dad25e439c8b997d6689fe1c91bf8}

Gets the content disposition.

#### Returns
The the content disposition

---
### `public QString `[`mimeType`](#class_q_cef_download_item_1afb8ec36477b64a222b0610c8518f8e31)`() const` {#class_q_cef_download_item_1afb8ec36477b64a222b0610c8518f8e31}

Gets the mime type.

#### Returns
The mime type

---
### `private QScopedPointer< QCefDownloadItemPrivate > `[`d_ptr`](#class_q_cef_download_item_1a631e89a5388360954e21644f91371a15) {#class_q_cef_download_item_1a631e89a5388360954e21644f91371a15}

---
### `private  `[`QCefDownloadItem`](#class_q_cef_download_item_1a2721c6c268fbe3b92ec7e3f5524b6d1a)`(`[`QCefDownloadItem`](#class_q_cef_download_item)` &&) = delete` {#class_q_cef_download_item_1a2721c6c268fbe3b92ec7e3f5524b6d1a}

---
### `private `[`QCefDownloadItem`](#class_q_cef_download_item)` & `[`operator=`](#class_q_cef_download_item_1a0486e85d7e5ccf2c182e504129c9e068)`(`[`QCefDownloadItem`](#class_q_cef_download_item)` &&) = delete` {#class_q_cef_download_item_1a0486e85d7e5ccf2c182e504129c9e068}

---
### `private  `[`QCefDownloadItem`](#class_q_cef_download_item_1a6db795a0e61816d85a4125aa67d98b76)`()` {#class_q_cef_download_item_1a6db795a0e61816d85a4125aa67d98b76}

Constructs a download item instance.

