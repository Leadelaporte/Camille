let displayHours = document.getElementById('displayHours');
let displayMinutes = document.getElementById('displayMinutes');
let displaySeconds = document.getElementById('displaySeconds');

let currentTime = new Date();

displayHours.innerHTML = currentTime.getHours() + " hrs";
displayMinutes.innerHTML = currentTime.getMinutes() + " min";
displaySeconds.innerHTML = currentTime.getSeconds() + " sec";

displayDate.innerHTML = currentTime.getDate() + "/";
displayMonth.innerHTML = currentTime.getMonth() + "/";
displayYear.innerHTML = currentTime.getFullYear();

const APIKEY = 'd13cf80cbcf4869d611bb2f2c45896d1';

let url = `https://api.openweathermap.org/data/2.5/weather?q=Amiens&appid=${APIKEY}&units=metric&lang=fr`

fetch(url).then((response) =>
    response.json().then((data) => 
        console.log(data))
);
    