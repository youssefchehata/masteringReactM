import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, BrowserRouter} from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import store from './store';
// ---------------
// import {createStore, applyMiddleware} from 'redux'
import  reducers  from './components/dotit/redux-1/song/reducers';

// ---------------------
import  thunk  from 'redux-thunk';
const middleware = [thunk];
const store = createStore(reducers ,compose(
  applyMiddleware(...middleware),
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
ReactDOM.render(
  // <HashRouter>
    <BrowserRouter>
   
    <Provider
    //  store={createStore(reducers)}
     store={store}
     ><App />
     </Provider>
    </BrowserRouter>
  //  </HashRouter>
   ,
// BrowserRouter changed by HashRouter
  document.getElementById('root')
);
