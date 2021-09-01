chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      function handleLastIframe() {
        const lastIframe = Array.from(
          document.getElementsByTagName('iframe')
        ).pop();
        lastIframe.style.height = 0;
        lastIframe.style.width = 0;
      }
      handleLastIframe();
    },
  });
});
