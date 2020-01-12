import React, { Fragment, useState } from 'react';
import { Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';


const Login = ({ login ,isAuthenticated}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const { email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // const onSubmit = async e => {
  //   e.preventDefault();
  //   login(email, password);
  // };

  //Redirect if logged in
if (isAuthenticated) {
  return <Redirect to="/dashboard"/>
}

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign Into Your Account
      </p>
      <form className='form' 
      // onSubmit={e => onSubmit(e)}
      >
        <div className='form-group'></div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            // onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            // value={password}
            // onChange={e => onChange(e)}
            // @ts-ignore
            minLength='6'
          />
        </div>

        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/auth/Register'>Sign Up</Link>
      </p>
    </Fragment>
  );
};



export default Login
