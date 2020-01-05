
import { FETCH_TRENDING_HOTEL } from '../actions/types';

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_TRENDING_HOTEL:
      return payload;
    default:
      return state;
  }
};
