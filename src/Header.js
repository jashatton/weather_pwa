import React from 'react';

const style = {
  blueHeader: {
    backgroundColor: '#0070ff',
    color: '#ffffff',
  },
  blackHeader: {
    backgroundColor: '#000000',
    color: '#ffffff',
  }
};

export const Header = ({ onAddCityClick }) => (
  <header style={style.blueHeader} className="header">
    <h1 className="header__title">YAWA: just the weather</h1>
    <button id="butRefresh" style={style.header} className="headerButton" aria-label="Refresh"/>
    <button id="butAdd" style={style.header} className="headerButton" aria-label="Add" onClick={onAddCityClick}/>
  </header>
);


