
import { FETCH_ALL, FILTER_BY_VOTE_AVERAGE } from './types';
import moviesApi from '../../apis/moviesApi';


export const fetchAll = () => async dispatch => {
  const response = await moviesApi.get('/3/movie/now_playing?api_key=23785b1559bb39249c40d56934f80e6c&language=zh-TW&page=1'); 
  dispatch({ type: FETCH_ALL, payload: response.data.results });
    // console.log('response', response.data);
};


export const filtreByvote_average = (movies,vote_average) =>  dispatch => {


return  dispatch({
   type: FILTER_BY_VOTE_AVERAGE,
    payload:{
        vote_average:vote_average,
     
      items:vote_average ===''? movies : movies.filter(a=>a.vote_average.indexOf(vote_average.toUpperCase())>=0 ) }
   
  });
//  console.log('movie',movies);
};
