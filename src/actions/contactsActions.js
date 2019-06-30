
import {  GET_CONTACTS } from './types';
//rn thunk
export const getContacts = () => {
    return (dispatch) => {
        dispatch({
            // payload: ,
            type:GET_CONTACTS ,
        });
    };
};