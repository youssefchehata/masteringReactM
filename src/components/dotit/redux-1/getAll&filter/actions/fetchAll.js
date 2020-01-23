
import { FETCH_ALL } from './types';
import moviesApi from '../../apis/moviesApi';


export const fetchAll = () => async dispatch => {
  const response = await moviesApi.get('/3/movie/now_playing?api_key=23785b1559bb39249c40d56934f80e6c&language=zh-TW&page=1'); 
  dispatch({ type: FETCH_ALL, payload: response.data.results });
    // console.log('response', response.data);
};


