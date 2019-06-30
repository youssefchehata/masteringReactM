import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import { Provider } from 'react-redux';
import store from './store';
ReactDOM.render(
  <HashRouter>
    <Provider store={store}><App /></Provider>
   </HashRouter>,
// BrowserRouter changed by HashRouter
  document.getElementById('root')
);
