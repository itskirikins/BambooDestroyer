chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
  switch(message.type) {
    case "eat-bamboo":
      $("*").each(function() {
        $(this).html($(this).html().replace(/bamboo/gi, "<span style='opacity:0.0'>bamboo</span>"));
      });
    break;
  }
});
