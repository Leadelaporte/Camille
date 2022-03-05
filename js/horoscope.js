fetch("https://daily-horoscope3.p.rapidapi.com/api/1.0/get_daily_horoscope.php", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-host": "daily-horoscope3.p.rapidapi.com",
		"x-rapidapi-key": "4894b6be06msh6b706ae7be8a27fp177d41jsn46a3ab765929"
	},
	"body": {
		"sign": "aquarius",
		"date": "1996-02-11",
		"api_key": "Your Api Key",
		"timezone": "5.5"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});