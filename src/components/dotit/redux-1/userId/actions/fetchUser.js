
import { FETCH_USER } from './types';
import jsonPlaceholder from '../../apis/jsonPlaceholder';

export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  // const response = await jsonPlaceholder.get(`/users`+id);

  dispatch({ type: FETCH_USER , payload: response.data })
};
