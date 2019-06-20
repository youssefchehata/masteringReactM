import React, { Component } from 'react';
import { Consumer } from '../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/textInputGroup';
class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    // console.log(this.state);
    const { name, email, phone } = this.state;
    const newContact = { id: uuid(), name, email, phone };
    dispatch({ type: 'ADD_CONTACT', payload: newContact });
  };
  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label={'Name'}
                    htmlFor={'name'}
                    type={'text'}
                    name={'name'}
                    value={name}
                    onChange={this.onChange}
                    placeholder={'Enter Name'}
                  />

                  <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.onChange}
                      className="form-control form-control-lg"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={this.onChange}
                      className="form-control form-control-lg"
                      placeholder="Enter phone"
                    />
                  </div>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
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
