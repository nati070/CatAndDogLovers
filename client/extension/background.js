chrome.runtime.setUninstallURL("https://uninstall.natinadav.com/");
chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === "install") {
    console.log(reason);
  }
});

const send = async () => {
  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });
    const response = await chrome.tabs.sendMessage(tab.id, { msg: "ping" });
    console.log(response);
  } catch {
    console.log("problem");
  }
};

chrome.alarms.create("demo-default-alarm", {
  delayInMinutes: 180,
  periodInMinutes: 180,
});

chrome.alarms.onAlarm.addListener(send);
