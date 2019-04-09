import React from 'react';
import _ from 'lodash';
import moment from 'moment';

export const CityForecast = ({ forecast }) => {
  const daysMap = new Map();
  const sorted = _.sortBy(forecast, 'timestamp');

  sorted
    .forEach(daily => {
      const day = new moment.unix(daily.timestamp);
      console.log('day of week', day.day(), day.format());
      daysMap.set(day.day(), daily);
    });

  const setOfDays = Array.from(daysMap, ([key, value]) => value);

  console.log('set', setOfDays);
  return (
    <div className="future">
      {
        setOfDays.map((daily, index) => (
          <>
            <div className="oneday">
              <div className="date">{moment.unix(daily.timestamp).format('ddd')}</div>
              <img alt={daily.conditions[ 0 ].description} className="icon" src={daily.conditions[0].iconUrl}/>
              <div className="temp-high">
                <span className="value">{daily.temp.max} F&deg;</span>
              </div>
              <div className="temp-low">
                <span className="value">{daily.temp.min} F&deg;</span>
              </div>
            </div>
          </>
        ))
      }
    </div>
  )
};
