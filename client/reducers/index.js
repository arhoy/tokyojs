import { combineReducers } from 'redux';
import counters from './counters';
import tours from './tours';
import auth from './auth';

export default combineReducers({
  counters,
  tours,
  auth
});
