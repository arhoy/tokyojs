import axios from 'axios';

import { GET_TOURS, GET_TOURS_ERROR } from './types';

export const getTours = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/api/tours');
    dispatch({
      type: GET_TOURS,
      payload: res.data.tours // tours
    });
  } catch (error) {
    dispatch({
      type: GET_TOURS_ERROR,
      payload: { msg: 'Unable to get tours' }
    });
  }
};
