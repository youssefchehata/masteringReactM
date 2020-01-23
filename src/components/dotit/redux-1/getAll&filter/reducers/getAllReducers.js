
import {  FETCH_ALL } from '../actions/types';


const INITIAL_STATE = { ListOfMovies:[]}
 
 

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL:
      return {...state, ListOfMovies:payload }
 

    
    default:
      return state;
  }
};
//getAll
