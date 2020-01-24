
import {  FETCH_ALL, ORDER_MOVIES_BY_POPULARITY } from '../actions/types';
import sort from '../sort';


const INITIAL_STATE = { items:[],filtredItems:[],sort:''}
 
 

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL:
      return {...state, items:payload ,filtredItems:payload}
    case ORDER_MOVIES_BY_POPULARITY:
      return {...state, filtredItems:payload.items ,
      sort:payload.sort
      }
 

    
    default:
      return state;
  }
};
//getAll
