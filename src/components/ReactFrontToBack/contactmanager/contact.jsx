import React, { Component } from 'react'
import PropTypes from 'prop-types'



class Contact extends Component {
    state = {}
 
    render() { 
        const {name,email,phone}=this.props
        return (
            <div className='card card-body mb-3'>
                  <h4>{name}</h4>
                  <h4>{this.props.nom}</h4>
            <ul className='list-group'>
                <li className='list-group-item'>Email:{email}
                <span class="badge badge-primary badge-pill">14</span>
                </li>
                <li className='list-group-item'>phone: {phone}</li>
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
