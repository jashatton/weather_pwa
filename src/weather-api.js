import { initialForecast, initialWeather } from 'mock-weather';
import { logError } from 'logging';
import { httpGetByUrl, saveHttpGet, addLocation, getSavedUserLocations } from 'weather-db';
import axios from 'axios';

export async function fetchLocationWeather(key) {
  if (false) {
    return Promise.resolve(initialWeather[ key ])
      .then(response => toWeather(key, response));
  } else {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?id=${key}&units=imperial&appid=a61fdeae44bdd32e476df3a112e0b717`;
    return await axios.get(weatherUrl)
      .then(response => {
        saveHttpGet(weatherUrl, response);
        return toWeather(key, response.data);
      })
      .catch(error => {
        logError(error);
        return httpGetByUrl(weatherUrl).then(httpGet => httpGet ? toWeather(key, httpGet) : {
          locationId: key,
          location: {}
        });
      });
  }
}

export async function fetchLocationFiveDay(key) {
  if (false) {
    return Promise.resolve(initialForecast[ key ])
      .then(response => {
        return ({
          locationId: key,
          dailies: response.list ? response.list.map(forecast => toDaily(key, forecast)) : [],
        })
      })
  } else {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${key}&units=imperial&appid=a61fdeae44bdd32e476df3a112e0b717`;

    return await axios.get(forecastUrl)
      .then(response => {
        saveHttpGet(forecastUrl, response);
        return (response.data && response.data.list ?
          { locationId: key, forecast: response.data.list.map(forecast => toDaily(key, forecast)) } :
          { locationId: key, forecast: [] })
      })
      .catch(error => {
        logError(error);
        return httpGetByUrl(forecastUrl)
          .then(httpGet => (httpGet && httpGet.list ?
            { locationId: key, forecast: httpGet.list.map(forecast => toDaily(key, forecast)) } :
            { locationId: key, forecast: [] }));
      });
  }
}

export async function saveLocation(locationKey) {
  return addLocation(locationKey);
}

export async function getUserLocations() {
  return await getSavedUserLocations();
}

function toWeather(key, weatherJson) {
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
