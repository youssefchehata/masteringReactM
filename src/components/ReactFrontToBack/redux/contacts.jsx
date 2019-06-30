import React, { Component } from 'react'
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
      name: 'oo yy',
      email: 'oo@gmail.com',
      phone: '222-555-555'
    },
  ]
}
  render() { 
    const {contacts}=this.state
    return (
      <React.Fragment>
      {contacts.map(contact => (
        <Contact 
        key={contact.id}
       contact={contact}
        id={contact.id}
       //  deleteClickHandler={this.deleteClickHandler.bind(this,contact.id)}
        />
      ))}
      }
    </React.Fragment>)
  }
}
 
export default Contacts;

    
  // deleteClickHandler=(id)=>{
  //   const {contacts}=this.state
  //   const newContacts= contacts.filter(contact=>
  //     contact.id !== id  );
  //     this.setState({contacts:newContacts})
  // }
  

