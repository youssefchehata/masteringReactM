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
  import { GET_CONTACTS,DELETE_CONTACT,ADD_CONTACT } from '../actions/types';
  
  const INITIAL_STATE = {
    contacts: [
        {
          id: 1,
          name: 'jhonny Doeeo',
          email: 'jdoe@gmail.com',
          phone: '555-555-555'
        },
        {
          id: 2,
          name: 'aa y!y',
          email: 'oo@gmail.com',
          phone: '222-555-555'
        },
      ]
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
                contacts:action.payload
              };
          case DELETE_CONTACT:
              return {
                  ...state,
                  contacts:state.contacts.filter(contact=>
                    contact.id !== action.payload
                    )
              };
          case ADD_CONTACT:
              return {
                  ...state,
                  contacts:[ action.payload,...state.contacts]
                    
              };
 
          default: return state;
      }
  };
