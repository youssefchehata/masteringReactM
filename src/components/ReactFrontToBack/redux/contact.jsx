import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {deleteContact}from '../../../actions/contactsActions'
class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onShowClick = () => {
    this.setState(state => {
      return { showContactInfo: !state.showContactInfo };
    });
  };
  //  onDeleteClick=(id,dispatch)=>{
  //     axios
  //     .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res=>dispatch({type:'DELETE_CONTACT',payload:id}))
  //     //  dispatch({type:'DELETE_CONTACT',payload:id})
  //        }
  onDeleteClick =  (id) => {
   this.props.deleteContact(id)
  };
  render() {
    const { contact, id } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>
                   {contact.name}
          {/* <Link to={`/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{ color: 'black', cursor: 'pointer', float: 'right', marginRight: '1rem' }}
            />
          </Link> */}
          <i
            className="fas fa-sort-down"
            onClick={this.onShowClick}
            style={{ cursor: 'pointer' }}
          />
          <i
            className="fas fa-times"
            onClick={this.onDeleteClick.bind(this, id, )}
            style={{ color: 'red', cursor: 'pointer', float: 'right' }}
          />
        </h4>
        <h4>{this.props.nom}</h4>
        {this.state.showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">
              Email:{contact.email}
              <span className="badge badge-primary badge-pill">{id}</span>
            </li>
            <li className="list-group-item">phone: {contact.phone}</li>
            <Link to={`/EditRedux/${id}`} className="btn btn-dark btn-block">
              <i className="fas fa-pencil-alt" /> View Edit{' '}
            </Link>
          </ul>
        ) : null}
      </div>
    );
  }
}
// Contact.defaultProps = {
//   nom: 'defaultProps'
// };
Contact.prototypes = {
  contact: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  deleteContact:PropTypes.func.isRequired
};
export default connect(null,{deleteContact}) (Contact);
