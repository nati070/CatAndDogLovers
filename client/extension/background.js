chrome.runtime.setUninstallURL('https://uninstall.natinadav.com/');
chrome.runtime.onInstalled.addListener(({reason}) => {
    if (reason === 'install') {
        console.log(reason);
    }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
        console.log(request.msg)
        sendResponse({msg:"pong"})
  }
);


