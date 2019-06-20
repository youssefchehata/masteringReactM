import React, { Component } from 'react';
import Contacts from './contacts/contacts';
import Header from './layout/header';
import Provider from './context';
import AddContact from './contacts/addContact';
import AddContact1 from './contacts/addContact1';

class ContextAPI extends Component {
  // App component
  render() {
    return (
      <Provider>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Header branding={'Contact Manager'} />
            </div>
            <div className="col-md-4">
              <AddContact1 />
            </div>
            <div className="col-md-4">
              <AddContact />
            </div>
            <div className="col-md-4">
              <Contacts />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
export default ContextAPI;
