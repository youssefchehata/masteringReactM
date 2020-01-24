
import {  FETCH_ALL,FILTER_MOVIE_BY_LANGUAGE, ORDER_MOVIES_BY_POPULARITY } from '../actions/types';



const INITIAL_STATE = { items:[],filtredItems:[],sort:'',original_language:''}
 
 

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL:
      return {...state, items:payload ,filtredItems:payload}

    case ORDER_MOVIES_BY_POPULARITY:
      return {...state, filtredItems:payload.items ,
      sort:payload.sort
      }
       
    case FILTER_MOVIE_BY_LANGUAGE:
      return {...state,filteredItems:payload.items ,
        original_language:payload.original_language
      }
 

    
    default:
      return state;
  }
};
//getAll
