document.getElementById('clickElement').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: clickElementMultipleTimes,
      args: [10000] // Number of times to click
    });
  });
});
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function clickElementMultipleTimes(clicks) {
  const selector = '.Bgi\\(\\$g-ds-background-like\\)\\3A a .D\\(b\\)';
  const element = document.querySelector(selector);
  if (element) {
    for (let i = 0; i < clicks; i++) {
      element.click();
    }
  } else {
    delay(1000);
    }
}
