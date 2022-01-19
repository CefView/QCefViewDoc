export default {
  isInCefView: function () {
    return !!window.CefViewClient;
  },

  addEventListener: function (name, listener) {
    window.CefViewClient.addEventListener(name, listener);
  },

  removeEventListener: function (name, listener) {
    window.CefViewClient.removeEventListener(name, listener);
  },

  invokeMethod: function (name, ...args) {
    window.CefViewClient.invokeMethod(name, ...args);
  },

  cefQuery: function (query) {
    window.CefViewQuery(query);
  },

  cancelCefQuery: function (id) {
    window.CefViewQueryCancel(id);
  },
};
