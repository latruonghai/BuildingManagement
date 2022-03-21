import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/style/_index.scss";
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import "flowbite";
import rootReducer from './reducers/index';

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App isLoggin={false} />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
