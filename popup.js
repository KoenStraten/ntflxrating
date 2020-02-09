// file wordt aangeroepen/geladen bij klikken van het logo
function callScript() {
  chrome.tabs.executeScript({
    file: 'content_script.js'
  }); 
}

document.getElementById("fetchReviews").addEventListener('click', callScript);