import { FETCH_POPULARITY } from "./types";
import moviesApi from "../../apis/moviesApi";

        //  ----------------justfor test- fetch just popularity from API---------------------
        export const fetchpopularity = () => async dispatch => {
            const response = await moviesApi.get('/3/movie/now_playing?api_key=23785b1559bb39249c40d56934f80e6c&language=zh-TW&page=1'); 
            dispatch({ type: FETCH_POPULARITY,
              //  payload: response.data.results.map(el=>el.popularity) ,
               payload: response.data.results ,
              
              
              } );

              
              // console.log('response', response.data.results.map(el=>el.popularity));
          };