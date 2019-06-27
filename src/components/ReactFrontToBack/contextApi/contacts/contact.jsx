import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Consumer} from '../context';
import axios from "axios"
class Contact extends Component {
    state = {
        showContactInfo:false
    }
 onShowClick=()=>{
this.setState(state=>{
    return{showContactInfo:!state.showContactInfo}
})
 }
//  onDeleteClick=(id,dispatch)=>{
//     axios
//     .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then(res=>dispatch({type:'DELETE_CONTACT',payload:id}))
//     //  dispatch({type:'DELETE_CONTACT',payload:id})
//        }
 onDeleteClick= async(id,dispatch)=>{
   await axios
    .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
         dispatch({type:'DELETE_CONTACT',payload:id})
       }
    render() { 
        const {contact,id}=this.props
        return (
            <Consumer>
                {value=>{
                    const {dispatch}=value
             return(
                 <div className='card card-body mb-3'>
                  <h4>{contact.name}
                  <i className='fas fa-sort-down'onClick={this.onShowClick}style={{cursor:'pointer'}}/>
                  <i className='fas fa-times'onClick={this.onDeleteClick.bind(this,id,dispatch)} style={{color:'red',cursor:'pointer',float:'right'}} />
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
            </Consumer>
         


            
       
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
