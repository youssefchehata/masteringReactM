import React, { Component } from 'react'

class Contact extends Component {
    state = {}
    render() { 
        const {name,email,phone}=this.props
        return (
            <div>
                  <h4>{name}</h4>
            <ul>
                <li>Email:{email}</li>
                <li>phone: {phone}</li>
            </ul>   
            </div>
       
        )
    }
}
 
export default Contact;
