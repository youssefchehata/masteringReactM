import React, { Component } from 'react';
import Contacts from './contacts';
import Header from './header';

class Contactmanager extends Component {
  
  render() {
    
    return (
      <div className="container">
        <Header branding={'Contact Manager'} />
        <Contacts   />
      </div>
    );
  }
}
export default Contactmanager;
