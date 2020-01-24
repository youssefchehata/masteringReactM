
import { FETCH_ALL, FILTER_MOVIE_BY_LANGUAGE,ORDER_MOVIES_BY_POPULARITY } from './types';
import moviesApi from '../../apis/moviesApi';


export const fetchAll = () => async dispatch => {
  const response = await moviesApi.get('/3/movie/now_playing?api_key=23785b1559bb39249c40d56934f80e6c&language=zh-TW&page=1'); 
  dispatch({ type: FETCH_ALL, payload: response.data.results });
    // console.log('response', response.data);
};



export const filtredmoviesBYoriginal_language = (movies,original_language) =>  dispatch => {


  return  dispatch({
     type: FILTER_MOVIE_BY_LANGUAGE,
      payload:{
        original_language:original_language,
       
        items:original_language ===''? movies : movies.filter(a=>a.original_language.indexOf(original_language.toUpperCase())>=0 )
      }
     
    });
   
  };

export const sortMoviesByPopularity = (items,sort) =>  dispatch => {
  const hotels=items.slice()
    if(sort !== ''){  hotels.sort((a,b)=>(sort==='lowest')?(a.popularity > b.popularity ? 1:-1) :(a.popularity < b.popularity ? 1:-1)) 
    
    }else{
      hotels.sort((a,b)=>(a.id>b.id?1:-1))
    }
    
   return dispatch({ type: ORDER_MOVIES_BY_POPULARITY,
       payload:{
         sort:sort,
        items:hotels
       }
         });
    
  };