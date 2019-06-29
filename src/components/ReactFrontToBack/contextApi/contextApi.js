import React, { Component } from 'react';
import Contacts from './contacts/contacts';
import Header from './layout/header';
import Provider from './context';
import AddContact from './contacts/addContact';
import AddContact1 from './contacts/addContact1';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Link } from 'react-router-dom';
import EditContact from './contacts/editContact';
import Routes from './../../Routes';

class ContextAPI extends Component {
  // App component
  render(props) {
    return (
      <Provider>
        <div className="container">
          <div className="row">
            <Link to={`/traversy/1`} className="btn btn-dark btn-block">
              <i className="fas fa-chevron-right" /> View About{' '}
            </Link>
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
