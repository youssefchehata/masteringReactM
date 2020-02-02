
import { FETCH_ALL, FILTER_MOVIE_B_LANGUAGE,ORDER_MOVIES_BY_POPULARITY, SEARCH, FILTER_BY_DATE } from './types';
import moviesApi from '../../apis/moviesApi';
// import DatePicker from "react-datepicker";

export const fetchAll = () => async dispatch => {
  const response = await moviesApi.get('/3/movie/now_playing?api_key=23785b1559bb39249c40d56934f80e6c&language=zh-TW&page=1'); 
  dispatch({ type: FETCH_ALL, payload: response.data.results });
    // console.log('response', response.data);
};
export const filtredmovies = (fil_items, title) =>  dispatch => {
  return  dispatch({
     type: FILTER_MOVIE_B_LANGUAGE,
      payload:{
        title,
        items:title ===''? fil_items : fil_items.filter(c=>c.title.indexOf(title.toUpperCase())>=0 ) }
         });
     };
export const sortMoviesByPopularity = (items,sort) =>  dispatch => {
  const movies=items.slice()
    if(sort !== ''){  movies.sort((a,b)=>(sort==='lowest')?(a.release_date > b.release_date ? 1:-1) :(a.popularity < b.popularity ? 1:-1)) 
        }else{
      movies.sort((a,b)=>(a.id>b.id?1:-1))
    }
    
   return dispatch({ type: ORDER_MOVIES_BY_POPULARITY,
       payload:{ sort:sort, items:movies }
         });
    
  };
  export const searchform = (movies,text) =>  dispatch => {
    return  dispatch({
       type: SEARCH,
        payload:{
         text,
         items:text ===''? movies :movies.filter((el,i)=>{return el.original_title.toLowerCase().indexOf(text)>-1})
        
          
        }
       
      });
     };
     export const filtrebydate = ( startDate,endDate) =>  dispatch => {
      return  dispatch({
         type: FILTER_BY_DATE,
          payload:{
            startDate,endDate
             }
             });
         };
