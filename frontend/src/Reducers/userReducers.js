import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL
} from '../Constants/userConstants'

export const userReducer = (state = { user: {}}, action) => {
    switch(action.type) {

        case REGISTER_USER_REQUEST:
        case LOGIN_REQUEST:
            return{
                loading: true,
                loggedIn: false
            }
        
        case REGISTER_USER_SUCCESS:
        case LOGIN_SUCCESS:
            return{
                ...state, //whatever in state
                loading: false,
                loggedIn: true,
                user: action.payload
            }

       
        case REGISTER_USER_FAIL:    
        case LOGIN_FAIL:
            return{
                ...state,
                loading:false,
                loggedIn: false,
                user: null,
                error: action.payload
            }
          
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null
            }
        default:
            return state

    }
}
