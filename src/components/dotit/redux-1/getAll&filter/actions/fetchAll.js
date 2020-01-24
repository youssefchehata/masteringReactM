
import { FETCH_ALL, ORDER_MOVIES_BY_POPULARITY } from './types';
import moviesApi from '../../apis/moviesApi';


export const fetchAll = () => async dispatch => {
  const response = await moviesApi.get('/3/movie/now_playing?api_key=23785b1559bb39249c40d56934f80e6c&language=zh-TW&page=1'); 
  dispatch({ type: FETCH_ALL, payload: response.data.results });
    // console.log('response', response.data);
};

export const sortMoviesByPopularity = (sort,movies) =>  dispatch => {
  const m = movies.slice()
  if(sort !== ''){  m.sort((a,b)=>(sort==='lowest')?(a.popularity > b.popularity ? 1:-1) :(a.popularity < b.popularity ? 1:-1)) 
  
  }else{
    m.sort((a,b)=>(a.id>b.id?1:-1))
  }
  
  dispatch({ type: ORDER_MOVIES_BY_POPULARITY,
     payload:{
       sort:sort,
      items:m
     }
       });
  
};


