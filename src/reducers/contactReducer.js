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
  import { GET_CONTACTS,GET_CONTACT,DELETE_CONTACT,ADD_CONTACT,UPDATE_CONTACT } from '../actions/types';
  
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
      ],
      contact:{}
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
          case GET_CONTACT:
              return {
                  ...state,
                contact:action.payload
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
              case UPDATE_CONTACT:
                return {
                  ...state,
                  contacts: state.contacts.map(
                    contact =>
                      contact.id === action.payload.id
                        ? (contact = action.payload)
                        : contact
                  )
                };
 
          default: return state;
      }
  };
