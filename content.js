chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
  switch(message.type) {
    case "eat-bamboo":
      //code to run when button is pressed
      /*var divs = document.querySelectorAll("div");
      if(divs.length === 0) {
        alert("Therea re no divs");
      }
      else {
        for(var i = 0; i < divs.length; i++) {
          divs[i].style.backgroundColor = message.color;
        }
      }*/
      document.body.innerHTML = document.body.innerHTML.replace(new RegExp("bamboo", "gi"), "poop");

    break;
  }
});
