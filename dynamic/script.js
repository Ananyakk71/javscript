import {createButton} from "./widjet.js";

createButton('Feature 1', () => {
    alert('feature 1');
});
createButton('Feature 2', async ()=> {
    const obj = await import('./feature2.js');
    createButton('Start Disco', obj.changeBg);
    createButton('Stop Disco', obj.stopChangingbg);
});

function showHint(str) {
    if (str.length == 0) { 
      document.getElementById("txtHint").innerHTML = "";
      return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("txtHint").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "gethint.asp?q="+str);
    xhttp.send();
  }

 

