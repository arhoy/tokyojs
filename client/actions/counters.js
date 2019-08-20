import { INCREMENT_COUNT, DECREMENT_COUNT } from './types';

export const incrementCount = () => dispatch => {
  dispatch({
    type: INCREMENT_COUNT
  });
};

export const decrementCount = () => dispatch => {
  dispatch({
    type: DECREMENT_COUNT
  });
};
