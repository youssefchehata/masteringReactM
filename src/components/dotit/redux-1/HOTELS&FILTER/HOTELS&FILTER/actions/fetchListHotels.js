import voyageKom from '../../../apis/VoyageKom';
import { FETCH_HOTELS_LIST, FILTER_HOTELS_LIST_BY_CATEGORIE, ORDER_MOVIES } from './types';

export const fetchListHotels = () => async dispatch => {
  const response = await voyageKom.get(`/api/v1/hotels/all`);
  dispatch({ type: FETCH_HOTELS_LIST, payload: response.data.payload });
    // console.log('response', response.data);
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
export const sortMovies = (items,sort) =>  dispatch => {
const hotels=items.slice()
  if(sort !== ''){  hotels.sort((a,b)=>(sort==='lowest')?(a.nb_jour > b.nb_jour ? 1:-1) :(a.nb_jour < b.nb_jour ? 1:-1)) 
  
  }else{
    hotels.sort((a,b)=>(a.id_hotel>b.id_hotel?1:-1))
  }
  
 return dispatch({ type: ORDER_MOVIES,
     payload:{
       sort:sort,
      items:hotels
     }
       });
  
};