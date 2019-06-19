import React, { Component } from 'react';
import Contact from './contact';
import {Consumer} from './context';
class Contacts extends Component {

  // deleteClickHandler=(id)=>{
  //   const {contacts}=this.state
  //   const newContacts= contacts.filter(contact=>
  //     contact.id !== id  );
  //     this.setState({contacts:newContacts})
  // }
  
  
  render() {
    // return(
    //   <Consumer>
    //     {value=>{
    //       const {contacts}= value
    //       return(
    //         contacts.map(contact=><h1>{contact.name}</h1>)
    //       )
    //     }}
    //   </Consumer>
    // )
    return(
      <Consumer>
        {value=>{
         const { contacts } = value;
         return (
           <React.Fragment>
             {contacts.map(contact => (
               <Contact key={contact.id}
              contact={contact}
               id={contact.id}
               deleteClickHandler={this.deleteClickHandler.bind(this,contact.id)}
               />
             ))}
             }
           </React.Fragment>
         );
        }
        
        }
      </Consumer>
    )
    
  }
}
export default Contacts;
