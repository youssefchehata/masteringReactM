import { FETCH_HOTELS_LIST, FILTER_HOTELS_LIST } from '../actions/types';

 const INITIAL_STATE = { items:[],filteredItems:[],categorie:''}
 
 

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_HOTELS_LIST:
        // console.log('items',this.items);
      return {...state, items:payload  }
    // case FILTER_HOTELS_LIST:
    //   return {...state, filteredItems:payload.items ,categorie:payload.categorie}
  
    default:
      return state;
  }
};