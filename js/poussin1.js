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


    