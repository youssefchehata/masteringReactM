
import {  GET_CONTACTS,DELETE_CONTACT,ADD_CONTACT } from './types';
//rn thunk
export const getContacts = () => {
    return (dispatch) => {
        dispatch({
            // payload: ,
            type:GET_CONTACTS ,
        });
    };
};


export const deleteContact = (id) => {
    return (dispatch) => {
        dispatch({
            payload:id ,
            type: DELETE_CONTACT,
        });
    };
};
export const addContact = (contact) => {
    return (dispatch) => {
        dispatch({
            payload:contact ,
            type: ADD_CONTACT,
        });
    };
};