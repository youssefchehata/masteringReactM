
import { FETCH_ALL, ORDER_MOVIES_BY_POPULARITY } from './types';
import moviesApi from '../../apis/moviesApi';


export const fetchAll = () => async dispatch => {
  const response = await moviesApi.get('/3/movie/now_playing?api_key=23785b1559bb39249c40d56934f80e6c&language=zh-TW&page=1'); 
  dispatch({ type: FETCH_ALL, payload: response.data.results });
    // console.log('response', response.data);
};

export const sortMoviesByPopularity = (sort,filtredItems) =>  dispatch => {
  const movies = filtredItems.slice()
  if(sort !== ''){  movies.sort((a,b)=>(sort==='lowest')?(a.price > b.price ? 1:-1) :(a.price < b.price ? 1:-1)) 
  
  }else{
    movies.sort((a,b)=>(a.id>b.id?1:-1))
  }
  
  dispatch({ type: ORDER_MOVIES_BY_POPULARITY,
     payload:{
       sort:sort,
      items:movies
     }
       });
  
};


