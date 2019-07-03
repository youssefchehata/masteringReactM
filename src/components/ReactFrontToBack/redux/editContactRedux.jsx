import React, { Component } from 'react';

// import uuid from 'uuid';
import axios from "axios"
import TextInputGroup from '../contextApi/layout/textInputGroup';
import { connect } from 'react-redux';
import { getContact,updateContact } from '../../../actions/contactsActions';
import PropTypes from 'prop-types'


class EditContactRedux extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    error: {}
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentWillReceiveProps(nextProps, nextState) {
    const { name, email, phone } = nextProps.contact;
    this.setState({
      name,
      email,
      phone
    });
  }
 async componentDidMount(){
  const {id}= this.props.match.params
  this.props.getContact(id)
  // const { data: contact } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  //   this.setState({ name:contact.name,email:contact.email,phone:contact.phone, });
  
}

  onSubmit =  (e) => {
    e.preventDefault();
    // console.log(this.state);
    const { name, email, phone } = this.state;
        
    
    //error
    if (name === '') {
      this.setState({ error: { name: 'name is required' } });
      return;
    }
    if (email === '') {
      this.setState({ error: { email: 'email is required' } });
      return;
    }
    if (phone === '') {
      this.setState({ error: { phone: 'phone is required' } });
      return;
    }
    const {id}=this.props.match.params
    const updContact ={
    id,name,email,phone
    }
    this.props.updateContact(updContact)
    
         // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });
    this.props.history.push('/ReactFrontToBack/redux/redux');
  };
  classes = () => {
    const { name } = this.state;
    let classes = '';
    classes += name.length === 0 ? 'bg-warning' : 'text-warning bg-danger';
    return classes;
  };
  classNameErrorMsg = () => {
    const { phone, email } = this.state;
    let classNameErrorMsg = '';
    classNameErrorMsg +=
      phone.length === 0 || email.length === 0 ? 'form-control form-control-lg is-invalid' : 'form-control form-control-lg';

    return classNameErrorMsg;
  };
  render() {
    const { name, email, phone, error } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Edit Contact</div>
        <h2>{this.props.match.params.id}</h2>
        <div className="card-body">
          <form
            // noValidate
            onSubmit={this.onSubmit}
          >
            <TextInputGroup
              label={'Name'}
              htmlFor={'name'}
              type={'text'}
              name={'name'}
              value={name}
              onChange={this.onChange}
              placeholder={'Enter Name'}
              error={error.name}
            />

            <div className="form-group">
              <label className={this.classes()} htmlFor="email">
                email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.onChange}
                className={this.classNameErrorMsg()}
                placeholder="Enter email"
              />

              {error.email}
            </div>
            <div className="form-group">
              <label htmlFor="phone">phone</label>
              <input
                // required
                type="text"
                name="phone"
                value={phone}
                onChange={this.onChange}
                className={this.classNameErrorMsg()}
                placeholder="Enter phone"
              />
              {error.phone}
              {phone.length === 0 ?( <div className="invalid-feedback"> phone must be longer than 3 characters </div> )  :null }
            </div>
            <input
              type="submit"
              value="Update Contact"
              className="btn btn-light btn-block"
            />
            {email.length === 0 && (
              <span style={{ color: 'red' }}>some input is empty</span>
            )}
            <br />
            {email.length > 5 ? 'good' : 'bad'}
          </form>
        </div>
      </div>
    );
  }
}
EditContactRedux.propTypes={
  contact:PropTypes.object.isRequired,
  getContact:PropTypes.func.isRequired,
  updateContact:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  contact: state.contact.contact
});
export default connect(mapStateToProps,{getContact,updateContact}) (EditContactRedux);
