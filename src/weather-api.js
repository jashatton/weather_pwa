import { initialForecast, initialWeather } from 'mock-weather';

export function fetchLocationWeather(key) {
  if (true) {
    return Promise.resolve(initialWeather[ key ])
      .then(response => toWeather(key, response));
  } else {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?id=${key}&units=imperial&appid=a61fdeae44bdd32e476df3a112e0b717`;
    return fetch(weatherUrl)
      .then(response => {
        const responseJson = response.json();
        return toWeather(key, responseJson)
      })
      .catch(error => console.log(error));
  }
}

export function fetchLocationFiveDay(key) {
  if (true) {
    return Promise.resolve(initialForecast[ key ])
      .then(response => {
        console.log('forecastresponse', response.list);
        return ({
          locationId: key,
          dailies: response.list ? response.list.map(forecast => toDaily(key, forecast)) : [],
        })
      })
  } else {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${key}&units=imperial&appid=a61fdeae44bdd32e476df3a112e0b717`;

    return fetch(forecastUrl)
      .then(response => {
        const forecastJson = response.json();
        return (forecastJson.list ? forecastJson.list.map(forecast => toDaily(key, forecast)) : [])
      })
      .catch(error => console.log(error));
  }
}

function toWeather(key, weatherJson) {
  // console.log('weatherJson', weatherJson);
  return {
    locationId: key,
    city: weatherJson.name,
    country: weatherJson.sys.country,
    geolocation: {
      longitude: weatherJson.coord.lon,
      latitude: weatherJson.coord.lat
    },
    conditions: weatherJson.weather.map(condition => ({
      condition: condition.main,
      description: condition.description,
      iconUrl: `http://openweathermap.org/img/w/${condition.icon}.png`
    })),
    temp: {
      current: weatherJson.main.temp,
      min: weatherJson.main.temp_min,
      max: weatherJson.main.temp_max,
    },
    pressure: weatherJson.main.pressure,
    humidity: weatherJson.main.humidity,
    wind: {
      ...weatherJson.wind
    },
    timestamp: weatherJson.dt,
    sunrise: weatherJson.sys.sunrise,
    sunset: weatherJson.sys.sunset,
  };


}

function toDaily(key, forecastJson) {
  // console.log('forecast', forecastJson);
  return forecastJson ? ({
    locationId: key,
    timestamp: forecastJson.dt,
    temp: {
      current: forecastJson.main.temp,
      min: forecastJson.main.temp_min,
      max: forecastJson.main.temp_max,
    },
    pressure: forecastJson.main.pressure,
    humidity: forecastJson.main.humidity,
    wind: {
      ...forecastJson.wind
    },
    conditions: forecastJson.weather.map(condition => ({
      condition: condition.main,
      description: condition.description,
      iconUrl: `http://openweathermap.org/img/w/${condition.icon}.png`
    }))
  }) : null;
}

// if ('caches' in window) {
//   /*
//    * Check if the service worker has already cached this city's weather
//    * data. If the service worker has the data, then display the cached
//    * data while the app fetches the latest data.
//    */
//   caches.match(weatherUrl).then(function (response) {
//     if (response) {
//       response.json().then(function updateFromCache(json) {
//         const results = {
//           key: json.id,
//           label: json.name,
//           created: json.dt
//         };
//         app.updateWeatherCard(results, json);
//       });
//     }
//   });
// }


// caching five day forecast
// if ('caches' in window) {
//   /*
//    * Check if the service worker has already cached this city's weather
//    * data. If the service worker has the data, then display the cached
//    * data while the app fetches the latest data.
//    */
//   caches.match(forecastUrl).then(function (response) {
//     if (response) {
//       response.json().then(function updateFromCache(json) {
//         const results = {
//           key: json.id,
//           label: json.name,
//           created: json.dt
//         };
//         app.updateForecastCard(results, json);
//       });
//     }
//   });
// }
