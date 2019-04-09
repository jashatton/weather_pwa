import Dexie from 'dexie';
import { logError } from 'logging';

const weatherDb = new Dexie('weather-db');

weatherDb.version(1).stores({
  http_gets: '++id, &url, data'
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
  console.log(`save http get: `, url, response);
  return await weatherDb.table('http_gets').where('url').equals(url)
    .first()
    .then((values) => {
      const apiToSave = {
        url,
        method: response.method,
        data: response.data,
        status: response.status,
        statusText: response.statusText
      };

      if (values.length === 1) {
        console.log('updating')
        weatherDb.table('http_gets').update(values[0].id, apiToSave).catch(error => {
          logError(`Failed to update http_get for id: ${values[0]}`, error)
        });
      } else if (values.length === 0) {
        console.log('adding')
        weatherDb.table('http_gets').add(apiToSave).catch(error => {
          logError(`Failed to update http_get for url: ${apiToSave.url}`, error)
        });
      } else {
        logError('Failed to save http_get', { message: 'When updating an http_get more records were retrieved than expected.' })
      }

      return apiToSave;
    })
    .catch(error => {
      logError(`Failed to save http_get by url ${url}`, error);
    });
}
