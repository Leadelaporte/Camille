const APIKEY ='d13cf80cbcf4869d611bb2f2c45896d1';

let apiCall = function(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url).then((response) => 
        response.json()).then((data) => {
        console.log(data);
        document.querySelector('#city').innerHTML = "<i class='fa-solid fa-location-dot'></i>" + data.name;
        document.querySelector('#temp').innerHTML = "<i class='fa-solid fa-temperature-half'></i>" + data.main.temp + '°';
        document.querySelector('#humidity').innerHTML = "<i class='fa-solid fa-droplet'></i>" + data.main.humidity + '%';
        document.querySelector('#wind').innerHTML = "<i class='fa-solid fa-wind'></i>" + data.wind.speed + 'km/h';
        })
    .catch(err => console.log('Erreur : ' + err));
    }

document.querySelector('form').addEventListener('submit',function(e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;

    apiCall(ville);
})

apiCall('Amiens');