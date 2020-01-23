
import {  FETCH_ALL, FILTER_BY_VOTE_AVERAGE } from '../actions/types';


const INITIAL_STATE = { items:[], filtredItems:[],vote_average:''}
 
 

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL:
      return {...state, items:payload,filtredItems: payload }
    case FILTER_BY_VOTE_AVERAGE:
      return {...state, filtredItems:payload.items ,vote_average:payload.vote_average}

    
    default:
      return state;
  }
};
//getAll
