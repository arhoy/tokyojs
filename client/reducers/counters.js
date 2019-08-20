import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actions/types';

const initialState = {
  count: 0
};

export default function(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}
