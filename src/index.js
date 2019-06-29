import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';

import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
// BrowserRouter changed by HashRouter
  document.getElementById('root')
);
