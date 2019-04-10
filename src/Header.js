import React, { useEffect, useState } from 'react';

const style = {
  blueHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0070ff',
    color: '#ffffff',
  },
  blackHeader: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#000000',
    color: '#ffffff',
  },
  siteName: {
    fontWeight: 400,
    fontSize: 20,
    margin: 0,
    flex: 1
  },
  offline: {
    textAlign: 'center',
    color: 'yellow',
    flex: 4.5
  },
  disabled: {
    cursor: 'default',
    flex: 1
  },
  enabled: {
    cursor: 'pointer',
    flex: 1
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    flex: .5
  }
};

export const Header = ({ onAddCityClick, onRefreshClick }) => {
  const [ online, setOnline ] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);

    return () => {
      window.removeEventListener("online", handleNetworkChange);
      window.removeEventListener("offline", handleNetworkChange);
    }
  });

  const handleNetworkChange = (event) => {
    setOnline(navigator.onLine);
  };

  return (
    <header style={style.blackHeader} className="header">
      <h1 style={style.siteName} className="header__title">YAWA: just the weather</h1>
      {online ? <div style={style.offline}>&nbsp;</div> : <div style={style.offline}>Offline</div>}
      <div style={style.buttonGroup}>
        <button id="butRefresh" style={online ? style.enabled : style.disabled} className="headerButton"
                disabled={!online} onClick={onRefreshClick}/>
        <button id="butAdd" style={online ? style.enabled : style.disabled} className="headerButton"
                disabled={!online} onClick={onAddCityClick}/>
      </div>
    </header>
  );
};


