import { GET_TOURS } from '../actions/types';

const initialState = {
  tours: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TOURS:
      return {
        ...state,
        tours: payload
      };
    default:
      return state;
  }
}
