import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Header } from 'Header';
import { fetchLocationFiveDay, fetchLocationWeather, getUserLocations, saveLocation } from 'weather-api';
import { AppContext, AppInitialState, AppReducer } from 'ContextProvider';
import { CityWeather } from 'CityWeather';
import { CityForecast } from 'CityForecast';
import { AddCityDialog } from 'AddCityDialog';

export const App = () => {
  const { state } = useContext(AppContext);
  const [ { weatherList, selectedLocations }, dispatch ] = useReducer(AppReducer, AppInitialState);

  useEffect(() => {
    getUserLocations()
      .then(locations => {
        dispatch({ type: 'fetched-user-locations', payload: locations });
      });
  }, []);

  useEffect(() => {
    fetchWeatherByLocations(selectedLocations);
  }, [ selectedLocations ]);

  const [ showAddDialog, setShowAddDialog ] = useState(false);

  const handleCityAdded = (selectedLocation) => {
    setShowAddDialog(false);
    saveLocation(selectedLocation);

    dispatch({ type: 'add-location', payload: { locationKey: selectedLocation } });
  };

  const handleCityAddedCancel = () => {
    setShowAddDialog(false);
  };

  const handleShowAddCityClick = () => {
    setShowAddDialog(true);
  };

  const handleRefresh = () => {
    fetchWeatherByLocations(selectedLocations);
  };

  const fetchWeatherByLocations = (locations) => {
    locations.forEach(async location => {
      await fetchLocationWeather(location.locationKey)
        .then(weather => {
          dispatch({ type: 'fetched-weather', payload: weather })
        });
      await fetchLocationFiveDay(location.locationKey)
        .then(forecast => {
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
