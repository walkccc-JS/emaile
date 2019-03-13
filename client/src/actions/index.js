import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const addFree = () => async dispatch => {
  const res = await axios.post('/api/free');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const resetAmount = () => async dispatch => {
  const res = await axios.post('/api/reset');

  dispatch({ type: FETCH_USER, payload: res.data });
};
