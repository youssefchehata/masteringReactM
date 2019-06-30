import React, { Component } from 'react';
import Contacts from './contacts';
import Header from './header';
import AddContact from './addContact';

import Routes from './../../Routes';
import { Provider } from 'react-redux';
import store from './components/ReactFrontToBack/redux/store'
class Redux extends Component {
  render() {
    return (
      <Provider store={store}>

     
      <div className="container">
        <Routes />
        <div className="row">
          <div className="col-md-12">
            <Header />
          </div>
          <div className="col-md-6">
            <Contacts />
          </div>
          <div className="col-md-6">
            <AddContact />
          </div>
        </div>
      </div>
       </Provider>
    );
  }
}
export default Redux;
