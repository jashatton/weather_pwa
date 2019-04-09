import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import initWorkboxRefresh from '@loopmode/cra-workbox-refresh';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

function renderRefreshUI(registration, {}) {
  const button = document.createElement("button");
  button.textContent = "Updates available";
  button.className = 'update-refresh';

  button.addEventListener("click", function() {
    if (!registration.waiting) {
      // Just to ensure registration.waiting is available before
      // calling postMessage()
      return;
    }
    button.disabled = true;
    registration.waiting.postMessage("skipWaiting");
  });

  document.body.appendChild(button);
}

if(process.env.NODE_ENV === 'production') {
  serviceWorker.register({
    onUpdate: registration => initWorkboxRefresh(registration, { render: renderRefreshUI })
  });
} else {
  serviceWorker.unregister();
}
