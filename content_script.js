'use strict';

var movieArray = document.getElementsByClassName("fallback-text");
var apikey = '&apikey=5a2f97a3';

for(let movie of movieArray){
    console.log(movie.parentNode.setAttribute( 'class', 'addRating' ));
    
    var url = 'https://www.omdbapi.com/?t=' + movie.innerText + apikey;
    
    fetch(url)
    .then(function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }
        
        response.json().then(function(data) {
            console.log(data);
            movie.innerText = data.imdbRating;
        });
    }).catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}