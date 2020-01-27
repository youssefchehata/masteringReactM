import { FETCH_HOTELS_LIST, FILTER_HOTELS_LIST_BY_CATEGORIE, ORDER_MOVIES, SEARCH_FORM } from '../actions/types';

 const INITIAL_STATE = { items:[],filteredItems:[],categorie:'',sort:'',text:''}
 
 

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_HOTELS_LIST:
    
      return {...state, items:payload  ,filteredItems:payload}
    case FILTER_HOTELS_LIST_BY_CATEGORIE:
      return {...state, filteredItems:payload.items ,categorie:payload.categorie}
  
    case ORDER_MOVIES:
      return {...state, filteredItems:payload.items ,sort:payload.sort}
      case SEARCH_FORM:
        return {...state,filteredItems:payload.items, text:payload.text}
    default:
      return state;
  }
};