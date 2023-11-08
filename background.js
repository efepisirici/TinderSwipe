chrome.runtime.onInstalled.addListener(() => {
  chrome.action.disable(); // Optionally disable the action icon initially
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  });
});
