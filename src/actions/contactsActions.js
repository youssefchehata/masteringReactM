import { GET_CONTACTS,GET_CONTACT, DELETE_CONTACT, ADD_CONTACT,UPDATE_CONTACT } from './types';
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
export const getContact = (id) => {
  return async dispatch => {
    let { data: contact } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({
      payload: contact,
      type: GET_CONTACT
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
    await  axios.post(`https://jsonplaceholder.typicode.com/users`,contact)
    dispatch({
      payload: contact,
      type: ADD_CONTACT
    });
  };
};


export const updateContact = (contact) => {
  return async (dispatch) => {
  const {data} = await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`,contact)
     dispatch({
      payload:data ,
      type:UPDATE_CONTACT ,
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
