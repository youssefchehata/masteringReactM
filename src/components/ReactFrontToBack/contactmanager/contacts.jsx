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
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id}
         contact={contact}
          id={contact.id}
          />
        ))}
        }
      </div>
    );
  }
}
export default Contacts;
