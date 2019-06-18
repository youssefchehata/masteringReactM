import React, { Component } from 'react'
import PropTypes from 'prop-types'



class Contact extends Component {
    state = {}
 
    render() { 
        const {contact,id}=this.props
        return (
            <div className='card card-body mb-3'>
                  <h4>{contact.name}</h4>
                  <h4>{this.props.nom}</h4>
            <ul className='list-group'>
                <li className='list-group-item'>Email:{contact.email}
                <span className="badge badge-primary badge-pill">{id}</span>
                </li>
                <li className='list-group-item'>phone: {contact.phone}</li>
            </ul>   
            </div>
       
        )
    }
}
Contact.defaultProps={
    nom:'defaultProps'
}
Contact.prototypes={
    name:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    phone:PropTypes.string.isRequired,
}
export default Contact;
