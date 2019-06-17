import React, { Component } from 'react'
import Contact from './contact';
import Header from './header';

 class Contactmanager extends Component {
     state={
         name:'jhon Doe',
         email:'jdoe@gmail.com',
         phone:'555-555-555'
     }
    render() {
        const {name,email,phone}=this.state
        return (
            <div>
               
               <Header
                // branding={'Contact Manager'}
                />
               <Contact name={name} email={email}phone={phone} />
            </div>
        )
    }
}
export default Contactmanager;