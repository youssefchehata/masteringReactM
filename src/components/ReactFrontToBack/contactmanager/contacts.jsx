import React, { Component } from 'react';
import Contact from './contact';
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'jhon Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-555'
      },
      {
        id: 2,
        name: 'ysf',
        email: 'ysf@gmail.com',
        phone: '333-555-555'
      },
      {
        id: 3,
        name: 'rmi',
        email: 'rmi@gmail.com',
        phone: '222-555-555'
      }
    ]
  };
  deleteClickHandler=(id)=>{
    const {contacts}=this.state
    const newContacts= contacts.filter(contact=>
      contact.id !== id  );
      this.setState({contacts:newContacts})
  }
  
  
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id}
         contact={contact}
          id={contact.id}
          // deleteClickHandler={this.deleteClickHandler.bind(this,contact.id)}
          deleteClickHandler={()=>this.deleteClickHandler(contact.id)}
          />
        ))}
        }
      </React.Fragment>
    );
  }
}
export default Contacts;
