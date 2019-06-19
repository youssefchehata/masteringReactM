import React, { Component } from 'react';
import Contacts from './contacts';
import Header from './header';
import Provider from './context';


class ContextAPI extends Component {
  render() {
    return (
      <Provider>
        <div className="container">
          <Header branding={'Contact Manager'} />
          <Contacts />
        </div>
      </Provider>
    );
  }
}
export default ContextAPI;
