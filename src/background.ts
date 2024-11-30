// Background Script
// Here we will listen for the extension to be installed, updated, or uninstalled
// and handle the events accordingly.
chrome.runtime.onInstalled.addListener((details) => {
  console.log("onInstalled", details);
});

chrome.runtime.onStartup.addListener(() => {
  console.log("onStartup");
});

chrome.runtime.onSuspend.addListener(() => {
  console.log("onSuspend");
});

chrome.runtime.onSuspendCanceled.addListener(() => {
  console.log("onSuspendCanceled");
});

chrome.runtime.onUpdateAvailable.addListener(() => {
  console.log("onUpdateAvailable");
});

chrome.runtime.onConnect.addListener(() => {
  console.log("onConnect");
});

chrome.runtime.onMessage.addListener(() => {
  console.log("onMessage");
});

chrome.runtime.onMessageExternal.addListener(() => {
  console.log("onMessageExternal");
});

chrome.runtime.onRestartRequired.addListener(() => {
  console.log("onRestartRequired");
});

chrome.runtime.onInstalled.addListener(() => {
  console.log("onInstalled");
});

chrome.runtime.onBrowserUpdateAvailable.addListener(() => {
  console.log("onBrowserUpdateAvailable");
});

chrome.runtime.onConnectExternal.addListener(() => {
  console.log("onConnectExternal");
});

chrome.runtime.onUpdateAvailable.addListener(() => {
  console.log("onUpdateAvailable");
});
