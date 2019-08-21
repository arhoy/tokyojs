import { combineReducers } from 'redux';
import counters from './counters';
import tours from './tours';

export default combineReducers({
  counters,
  tours
});
