import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'


class Contact extends Component {
    state = {
        showContactInfo:false
    }
 onShowClick=()=>{
this.setState(state=>{
    return{showContactInfo:!state.showContactInfo}
})
 }
 onDeleteClick=(id)=>{

    axios
    .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res=>this.props.deleteClickHandler(id))
    
       }
//  onDeleteClick=()=>{
//      this.props.deleteClickHandler()
    
//  }
    render() { 
        const {contact,id}=this.props
        return (
            <div className='card card-body mb-3'>
                  <h4>{contact.name}
                  <i className='fas fa-sort-down'onClick={this.onShowClick}style={{cursor:'pointer'}}/>
                  <i className='fas fa-times'onClick={this.onDeleteClick} style={{color:'red',cursor:'pointer',float:'right'}} />
                  </h4>
                  <h4>{this.props.nom}</h4>
                  {this.state.showContactInfo?<ul className='list-group'>
                <li className='list-group-item'>Email:{contact.email}
                <span className="badge badge-primary badge-pill">{id}</span>
                </li>
                <li className='list-group-item'>phone: {contact.phone}</li>
            </ul>  :null }
            
            </div>
       
        )
    }
}
Contact.defaultProps={
    nom:'defaultProps'
}
Contact.prototypes={
    contact:PropTypes.object.isRequired,
    id:PropTypes.number.isRequired,
    
}
export default Contact;
