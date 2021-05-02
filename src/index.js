import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parse from 'parse'

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
Parse.initialize(
  'XHSi4VtjoCvM8EUmm6ZO9BNTBbJV7tYZeyfgwjVm', // This is your Application ID
  'x5sTfX76Gqhc4tVucZqcfAZxeLnj9OPYi45nWd69' // This is your Javascript key
);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
