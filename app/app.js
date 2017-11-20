import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';
require('es6-promise').polyfill();

//Starting point, look for #root div
ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root')
);