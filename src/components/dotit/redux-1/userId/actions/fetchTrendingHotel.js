import { FETCH_TRENDING_HOTEL } from './types';
import jsonPlaceholder from '../../apis/jsonPlaceholder';

export const fetchTrendingHotel = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: FETCH_TRENDING_HOTEL, payload: response.data })
};
