// Some sites inject iframes randomly that cover the entire page
function handleLastIframe() {
  const lastIframe = Array.from(document.getElementsByTagName('iframe'))?.pop();
  if (lastIframe) {
    lastIframe.style.height = 0;
    lastIframe.style.width = 0;
  }
}

handleLastIframe();
