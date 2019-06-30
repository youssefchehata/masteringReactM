// deleteClickHandler=(id)=>{
//   const {contacts}=this.state
//   const newContacts= contacts.filter(contact=>
//     contact.id !== id  );
//     this.setState({contacts:newContacts})
// }

import React, { Component } from 'react';
import Contact from './contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { GET_CONTACTS } from './../../../actions/types';
import  { getContacts } from '../../../actions/contactsActions'

export class Contacts extends Component {
 componentDidMount(){
   this.props.getContacts()
 }
  render() {
    const { contacts } = this.props;
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
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.string.isRequired,
  getContacts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});
//contactsActions
// const mapDispatchToProps = dispatch => ({
//   getContacts: () => dispatch({ type: GET_CONTACTS })
// });

export default connect(
  mapStateToProps,{getContacts}
  // mapDispatchToProps
)(Contacts);
