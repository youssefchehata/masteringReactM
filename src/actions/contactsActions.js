import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from './types';
import axios from 'axios';
//rn thunk rn action

export const getContacts = () => {
  return async dispatch => {
    let { data: contacts } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch({
      payload: contacts,
      type: GET_CONTACTS
    });
  };
};

export const deleteContact = id => {
  return async dispatch => {
       await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({
      payload: id,
      type: DELETE_CONTACT
    });
  };
};

export const addContact = contact => {
  return async dispatch => {
      axios.post(`https://jsonplaceholder.typicode.com/users`,contact)
    dispatch({
      payload: contact,
      type: ADD_CONTACT
    });
  };
};


// export const addContact = (contact) =>async dispatch=> {
//    let res = await axios.post(`https://jsonplaceholder.typicode.com/users`,contact)
//     dispatch ({
//         payload: res.data,
//         type:ADD_CONTACT
//     });
// };
