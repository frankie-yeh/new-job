import React from 'react';
import ReactDOM from 'react-dom/client'; // 使用 createRoot
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from '../src/components/Todo/List-Redux/Store'; // 確保這裡的路徑正確

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 使用 createRoot 後直接呼叫 root.render
  <Provider Store={Store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
