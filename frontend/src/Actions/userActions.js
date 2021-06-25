import axios from 'axios';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
 
    CLEAR_ERRORS
  
} from '../Constants/userConstants'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({type: LOGIN_REQUEST})

       

        const {data} = await axios.post('/user/login', {email, password}) 


        dispatch({ //if user log in
            type: LOGIN_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

/*
export const logout = () => async (dispatch) => {
    try {
        dispatch({type: LOGOUT_USER_REQUEST})


        dispatch({ //if user log in
            type: LOGOUT_USER_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: LOGOUT_USER_FAIL,
            payload: error.response.data.message
        })
    }
}
*/
export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({type: REGISTER_USER_REQUEST})

        const config = {
            headers: {

            }
        }
        const {data} = await axios.post('/user/register', {name, email,password});
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user //
        })

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.reponse.data.message
        })
        
    }
}

//Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
} 

