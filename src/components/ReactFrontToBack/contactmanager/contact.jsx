import React, { Component } from 'react'
import PropTypes from 'prop-types'



class Contact extends Component {
    state = {}
 
    render() { 
        const {name,email,phone}=this.props
        return (
            <div>
                  <h4>{name}</h4>
                  <h4>{this.props.nom}</h4>
            <ul>
                <li>Email:{email}</li>
                <li>phone: {phone}</li>
            </ul>   
            </div>
       
        )
    }
}
Contact.defaultProps={
    nom:'ysf'
}
Contact.prototypes={
    name:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    phone:PropTypes.string.isRequired,
}
export default Contact;
