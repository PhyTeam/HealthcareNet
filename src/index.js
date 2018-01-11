import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import { AppRouter } from './init/router'
import { render } from 'react-dom';

// Initializing touch events
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
// import 'react-flex-proto/styles/flex.css';
// import 'react-blur-admin/dist/assets/styles/react-blur-admin.min.css';


function init() {
  render(App, document.getElementById('root'));
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// document.addEventListener('DOMContentLoaded', function() {
//   init();
// });