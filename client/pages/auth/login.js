import React, { useState } from 'react';
import Layout from '../../layout/Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { login } from '../../actions/auth';

const Login = ({ isAuthenticated, login }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log('loggingin');
    login(email, password);
  };

  if (isAuthenticated) {
    console.log('You are authenticated!');
    Router.push('/');
  }
  console.log(isAuthenticated);
  return (
    <Layout>
      <h2>Login to your account</h2>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
    </Layout>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
