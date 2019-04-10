import Dexie from 'dexie';
import { logError } from 'logging';

const weatherDb = new Dexie('weather-db');

weatherDb.version(1).stores({
  http_gets: '++id, &url, data',
  user_locations: '++id, &locationKey'
});

export async function httpGetByUrl(url) {
  return await weatherDb.table('http_gets').where('url').equals(url)
    .first()
    .then(httpGets => httpGets.data)
    .catch(error => {
      logError(`Getting http get by url: ${url}, failed`, error);
    });
}

export async function saveHttpGet(url, response) {
  return await weatherDb.table('http_gets').where('url').equals(url)
    .first()
    .then((httpGet) => {
      const apiToSave = {
        url,
        method: response.method,
        data: response.data,
        status: response.status,
        statusText: response.statusText
      };

      if (httpGet) {
        weatherDb.table('http_gets').update(httpGet.id, apiToSave).catch(error => {
          logError(`Failed to update http_get for id: ${httpGet}`, error)
        });
      } else {
        weatherDb.table('http_gets').add(apiToSave).catch(error => {
          logError(`Failed to update http_get for url: ${apiToSave.url}`, error)
        });
      }

      return apiToSave;
    })
    .catch(error => {
      logError(`Failed to save http_get by url ${url}`, error);
    });
}

export async function addLocation(locationKey) {
  return await weatherDb.table('user_locations').add({ locationKey });
}

export async function getSavedUserLocations() {
  return await weatherDb.table('user_locations').toArray();
}
