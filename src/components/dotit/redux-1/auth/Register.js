import React, { Component } from 'react';


import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signup } from './../../actions/auth_user';
export class Register extends Component {

 onSubmit=(formProps)=>{

  this.props.signup(formProps , ()=>{
    this.props.history.push('/')
  })
 }
 
  render() {
    const {handleSubmit} = this.props
    return (
      <div>
        <h1 className='large text-primary'>Sign Up</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Create Your Account
        </p>
        <form onSubmit={handleSubmit(this.onSubmit)} className='form'>
         <fieldset>
           <label>Email</label>
           <Field name="email" type="text" component="input" autoComplete="none" />
          </fieldset>
         <fieldset>
           <label>Password</label>
           <Field name="password" type="password" component="input"  autoComplete="none"/>
            </fieldset>
    <div>{this.props.errorMessage}</div>
            <button className="btn btn-primary">Register</button>
        </form>
        <p className='my-1'>
          Already have an account? <Link to='/auth/Login'>Sign In</Link>
        </p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    errorMessage: state.authR.errorMessage
  }
}

export default compose(
connect(mapStateToProps,{signup}),
reduxForm({form:'signup'})
)(Register)
 
