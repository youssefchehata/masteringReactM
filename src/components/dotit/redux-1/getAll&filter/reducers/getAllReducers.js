import {
  FETCH_ALL,
  FILTER_MOVIE_B_LANGUAGE,
  ORDER_MOVIES_BY_POPULARITY,
  SEARCH,
  FILTER_BY_DATE,
  FETCH_POPULARITY
} from '../actions/types';

const INITIAL_STATE = { items: [], filtredItems: [], title:'', sort:'' ,text:'', endDate: new Date(),startDate: new Date(),popu:[]};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL:
      return { ...state, items: payload, filtredItems: payload };

    case ORDER_MOVIES_BY_POPULARITY:
      return { ...state, filtredItems: payload.items, sort: payload.sort };

    case FILTER_MOVIE_B_LANGUAGE:
      return {
        ...state, filtredItems: payload.items,
        title: payload.title,

        
      };
   
        case SEARCH:
      return {...state,filteredItems:payload.items, text:payload.text}

        case FILTER_BY_DATE:
      return {...state,endDate:payload.endDate, startDate:payload.startDate}

        case FETCH_POPULARITY:

      return {...state,popu:payload.map(el=>el.popularity)}
    default:
      return state;
  }
};
//getAll
