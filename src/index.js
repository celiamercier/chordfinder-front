import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import chordRequest from "./content/request/RequestFormDuck";

const rootReducer = combineReducers({
    chordRequest
});

const store = configureStore({ reducer: rootReducer })

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);