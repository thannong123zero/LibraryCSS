const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://mfnavhistory.p.rapidapi.com/",
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
		"X-RapidAPI-Host": "mfnavhistory.p.rapidapi.com"
	},
	"processData": false,
	"data": {
		"scode": 102000,
		"date": "2015-06-30"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});