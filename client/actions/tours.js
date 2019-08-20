import axios from 'axios';

import { GET_TOURS } from './types';

export const getTours = () => dispatch => {
  try {
      const res = await axios.get('/api/tours');
      console.log(res.data);
  } catch (error) {
    dispatch({
      type: GET_TOUR_ERROR,
      payload: { msg: 'Unable to get tours' }
    });
  }
};
