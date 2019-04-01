import React from 'react';

export const AppInitialState = {
  weatherList: [],
  locations: []
};

const AppContext = React.createContext(AppInitialState);

function reduceWeather(state = AppInitialState, action) {
  // console.log('action', action);
  const toUpdate = state.weatherList.find(weather => weather.locationId === action.payload.locationId);
  const locationWeather = state.weatherList.filter(weather => weather.locationId !== action.payload.locationId);

  const updatedWeather = {
    locationId: action.payload.locationId,
    ...toUpdate,
    location: { ...action.payload }
  };

  return {
    ...state,
    weatherList: [ ...locationWeather, updatedWeather ]
  };
}

function reduceForecast(state, action) {
  const toUpdate = state.weatherList.find(weather => weather.locationId === action.payload.locationId);
  const locationWeather = state.weatherList.filter(weather => weather.locationId !== action.payload.locationId);

  const updatedWeather = {
    locationId: action.payload.locationId,
    ...toUpdate,
    forecast: { ...action.payload },
  };

  return {
    ...state,
    weatherList: [ ...locationWeather, updatedWeather ]
  };
}

function reduceForAddLocation(state, action) {
  return {
    ...state,
    locations: [...state.locations, action.payload]
  }
}

export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'fetched-weather':
      return reduceWeather(state, action);
    case 'fetched-forecast':
      return reduceForecast(state, action);
    case 'add-location':
      return reduceForAddLocation(state, action);
    default:
      return state;
  }
};

export { AppContext };
