import React, {  useState } from 'react';
import Layout from '../../layout/Layout';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };
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
  counters: state.counters
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
