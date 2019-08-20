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
