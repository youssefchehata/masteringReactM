import React, { Component } from 'react';
import { Consumer } from '../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/textInputGroup';
class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    error: {}
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    // console.log(this.state);
    const { name, email, phone, error } = this.state;

    const newContact = { id: uuid(), name, email, phone };
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

    dispatch({ type: 'ADD_CONTACT', payload: newContact });
    //clear input
    this.setState({ name: '', email: '', phone: '', error: {} });
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
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form
                  // noValidate
                  onSubmit={this.onSubmit.bind(this, dispatch)}
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
                    value="Add Contact"
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
        }}
      </Consumer>
    );
  }
}

export default AddContact;
