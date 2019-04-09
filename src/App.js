import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Header } from 'Header';
import { fetchLocationFiveDay, fetchLocationWeather } from 'weather-api';
import { AppContext, AppInitialState, AppReducer } from 'ContextProvider';
import { CityWeather } from 'CityWeather';
import { CityForecast } from 'CityForecast';
import { AddCityDialog } from 'AddCityDialog';

export const App = () => {
  const { state } = useContext(AppContext);
  const [ { weatherList, locations }, dispatch ] = useReducer(AppReducer, AppInitialState);

  useEffect(() => {
    fetchWeatherByLocations(locations);
  }, [ locations ]);

  const [ showAddDialog, setShowAddDialog ] = useState(false);
  // const { locations } = state;

  const handleCityAdded = (selectedLocation) => {
    setShowAddDialog(false);
    dispatch({ type: 'add-location', payload: selectedLocation });
  };

  const handleCityAddedCancel = () => {
    setShowAddDialog(false);
  };

  const handleShowAddCityClick = () => {
    setShowAddDialog(true);
  };

  const handleRefresh = () => {
    fetchWeatherByLocations(locations);
  };

  const fetchWeatherByLocations = (locations) => {
    locations.forEach(async location => {
      await fetchLocationWeather(location)
        .then(weather => {
          // console.log('weather', weather);
          dispatch({ type: 'fetched-weather', payload: weather })
        });
      await fetchLocationFiveDay(location)
        .then(forecast => {
          console.log('fetched forecast', forecast);
          dispatch({ type: 'fetched-forecast', payload: forecast })
        });
    });
  };

  return (
    <AppContext.Provider value={{ dispatch }}>
      <Header onAddCityClick={handleShowAddCityClick} onRefreshClick={handleRefresh}/>
      <div className="main">
        {
          weatherList ?
            weatherList.map(weather => {
              return (
                <div className="card weather-forecast">
                  {weather.location ? <CityWeather location={weather.location}/> : null}
                  {weather.forecast ? <CityForecast forecast={weather.forecast}/> : null}
                </div>
              )
            }) : <div> Clear skies ahead!</div>
        }
      </div>

      <AddCityDialog show={showAddDialog} onCityAdded={handleCityAdded} onCancel={handleCityAddedCancel}/>
    </AppContext.Provider>
  );
};

export default App;
