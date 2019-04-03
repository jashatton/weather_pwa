import React from 'react';

export const Header = ({ onAddCityClick }) => (
  <header style={{ backgroundColor: '#2898ff', color: 'rgba(10,9,41,0.94)' }} className="header">
    <h1 className="header__title">Weather PWA</h1>
    <button id="butRefresh" className="headerButton" aria-label="Refresh"/>
    <button id="butAdd" className="headerButton" aria-label="Add" onClick={onAddCityClick}/>
  </header>
);


