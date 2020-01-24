import voyageKom from '../../../apis/VoyageKom';
import { FETCH_HOTELS_LIST, FILTER_HOTELS_LIST_BY_CATEGORIE } from './types';

export const fetchListHotels = () => async dispatch => {
  const response = await voyageKom.get(`/api/v1/hotels/all`);
  dispatch({ type: FETCH_HOTELS_LIST, payload: response.data.payload });
    console.log('response', response.data);
};


export const filtredhotelsBYCATEGORIE = (hotels,categorie) =>  dispatch => {


return  dispatch({
   type: FILTER_HOTELS_LIST_BY_CATEGORIE,
    payload:{
      categorie:categorie,
     
      items:categorie ===''? hotels : hotels.filter(a=>a.categorie.indexOf(categorie.toUpperCase())>=0 )
    }
   
  });
 
};