import React from 'react';

export const Header = ({ onAddCityClick }) => (
  <header className="header">
    <h1 className="header__title">Weather PWA</h1>
    <button id="butRefresh" className="headerButton" aria-label="Refresh"/>
    <button id="butAdd" className="headerButton" aria-label="Add" onClick={onAddCityClick}/>
  </header>
);


