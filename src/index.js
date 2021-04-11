import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as mdb from 'mdb-ui-kit'; // lib

import 'mdb-ui-kit/css/mdb.min.css';
import 'mdb-ui-kit/css/mdb.dark.min.css';
import 'mdb-ui-kit/css/mdb.dark.min.css.map';
import 'mdb-ui-kit/css/mdb.dark.rtl.min.css';
import 'mdb-ui-kit/css/mdb.dark.rtl.min.css.map';
import 'mdb-ui-kit/css/mdb.min.css.map';
import 'mdb-ui-kit/css/mdb.rtl.min.css';
import 'mdb-ui-kit/css/mdb.rtl.min.css.map';
import 'mdb-ui-kit/js/mdb.min.js';
import 'mdb-ui-kit/js/mdb.min.js.map';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css';
import "./assets/scss/mdb-free.scss";
import 'mdbreact/dist/css/mdb.css';
import "./assets/css/mdb.css";
import "./assets/css/free/modules/animations-extended/animations-extended.css";

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
