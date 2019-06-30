import React, { Component } from 'react';
import Contacts from './contacts';
import Header from './header';
import AddContact from './addContact';


class Redux extends Component {
  render() {
    return (
     
     
      <div className="container">
       
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
      
    );
  }
}
export default Redux;
