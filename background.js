//listening for event from popup
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  switch(request.type) {
    case "eat-bamboo":
      eatBamboo();
    break;
  }
  return true;
});

var eatBamboo = function() {
  chrome.tabs.getSelected(null, function(tab) {
    //sends message to content script - type of method needing to be called?
    chrome.tabs.sendMessage(tab.id, {type: "eat-bamboo", color: "#F00"});
  });
}
