import axios from 'axios'
import { USERS_LOADING, USERS_LOADED, 
    AUTH_ERROR, LOGIN_SUCCESS, 
    LOGIN_FAIL, LOGOUT_SUCCESS, 
    REGISTER_SUCCESS, REGISTER_FAIL } from './Types';

//Register User
export const registerUser = ( email, role ) => dispatch => {

    console.log(email)
    console.log(role)
    //Headers
    const config = {
        headers: { 
            "Content-type": "application/json"
        }
    }

    //Request body
    const body = JSON.stringify({ email, role })

    axios.post('http://localhost:5000/api/users', body, config )
         .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
         }))
         .catch(err => {
            // dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL' ));
            dispatch({
                type: REGISTER_FAIL
            });
         });
}

//Reject User
export const rejectUser = ( email ) => dispatch => {

    console.log(email)
    //Headers
    const config = {
        headers: { 
            "Content-type": "application/json"
        }
    }

    //Request body
    const body = JSON.stringify({ email })

    axios.post('http://localhost:5000/api/users/reject', body, config )
         .then(res => dispatch({
            payload: res.data
         }))
         .catch(err => {
            // dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL' ));
         });
}