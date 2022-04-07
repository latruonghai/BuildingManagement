import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/style/_index.scss";
import App from './App';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
// import "./assets/style/vendor/_font-awesome.css";
import rootReducer from './reducers/index';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers && composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
