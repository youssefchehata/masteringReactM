import React, { Component } from 'react';
import Contacts from './contacts/contacts';
import Header from './layout/header';
import Provider from './context';
import AddContact from './contacts/addContact';

class ContextAPI extends Component {
  render() {
    return (
      <Provider>
        <div className="container">
          <Header branding={'Contact Manager'} />
          <AddContact />
          <Contacts />
        </div>
      </Provider>
    );
  }
}
export default ContextAPI;
