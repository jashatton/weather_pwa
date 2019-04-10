import React from 'react';
import { formatDate } from 'dates';

import moment from 'moment';

export const CityWeather = ({ location }) => {
  return (
    <React.Fragment>
      <div className="locaton">City: {location.city}, {location.country}</div>
      <div className="date">Date: {formatDate(location.timestamp)}</div>
      <div className="description">Conditions: {location.conditions[ 0 ].description}</div>
      <div className="current">
        <div className="visual">
          <img alt={location.conditions[ 0 ].description} className="icon" src={location.conditions[ 0 ].iconUrl}/>
          <div className="temperature">
            <span className="value">Temp: {location.temp.current}</span>
           <span className="scale">F&deg;</span></div>
        </div>
        <div className="description">
          <div className="humidity">{location.humidity}%</div>
          <div className="wind">
            <span className="value">{location.wind.speed}</span>
            <span className="scale"> mph </span>
            <span className="direction"></span>
          </div>
          <div className="sunrise">{moment.unix(location.sunrise).format("h:mm A")}</div>
          <div className="sunset">{moment.unix(location.sunset).format("h:mm A")}</div>
        </div>
      </div>
    </React.Fragment>
  );
};



