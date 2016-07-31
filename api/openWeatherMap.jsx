var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial';

//JSON response from openweathermap.org
var data_from_openweather = {
    "data": {
        "coord": {"lon": 77.22, "lat": 28.67},
        "weather": [{"id": 701, "main": "Mist", "description": "mist", "icon": "50d"}],
        "base": "stations",
        "main": {"temp": 86, "pressure": 1003, "humidity": 79, "temp_min": 86, "temp_max": 86},
        "visibility": 2200,
        "wind": {"speed": 5.82, "deg": 40},
        "clouds": {"all": 75},
        "dt": 1469946600,
        "sys": {"type": 1, "id": 7809, "message": 0.0303, "country": "IN", "sunrise": 1469923930, "sunset": 1469972546},
        "id": 1273294,
        "name": "Delhi",
        "cod": 200
    },
    "status": 200,
    "statusText": "OK",
    "headers": {"content-type": "application/json; charset=utf-8"},
    "config": {
        "transformRequest": {},
        "transformResponse": {},
        "headers": {"Accept": "application/json, text/plain, */*"},
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "method": "get",
        "url": "http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial&q=delhi"
    }
};

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        //the special symbol `` is not quotes, instead used for template strings. Through which concatenation is easier
        // by passing each js variable as ${jsvariable} ...FLOWER BRACKET and not function brace
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}

