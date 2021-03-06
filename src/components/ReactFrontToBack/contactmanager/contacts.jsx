import React, { Component } from 'react';
import Contact from './contact';
import AddContact from './addContact';
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
    ],
    error:{}
  };
  deleteClickHandler = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  };
  addcontact = contact => {
 
    let contacts = [contact, ...this.state.contacts];
    this.setState({ contacts });
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        <AddContact addcontact={this.addcontact} />
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            id={contact.id}
            // deleteClickHandler={this.deleteClickHandler.bind(this,contact.id)}
            deleteClickHandler={() => this.deleteClickHandler(contact.id)}
          />
        ))}
        }
      </React.Fragment>
    );
  }
}
export default Contacts;
