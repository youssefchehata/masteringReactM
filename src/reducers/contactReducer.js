// const initialState = {
//     contacts: [],
//     contact: {}
//   };
  
//   export default function(state = initialState, action) {
//     switch (action.type) {

//       default:
//         return state;
//     }
//   }
  import { GET_CONTACTS } from '../actions/types';
  
  const INITIAL_STATE = {

  };
  
  /**
  * @param {Object} state - Default application state
  * @param {Object} action - Action from action creator
  * @returns {Object} New state
  */
  export default (state = INITIAL_STATE, action) => {
      switch (action.type) {
          case GET_CONTACTS:
              return {
                  ...state,
                  ...action.payload
              };
          default: return state;
      }
  };