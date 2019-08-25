import axios from 'axios';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_CURRENT_USER,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';

import setAuthToken from '../utils/setAuthToken';

export const login = async (email, password) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post('/api/auth', body, config);
    console.log(res.data);
  } catch (error) {
    console.log('There was an error with the request', error);
  }
};
