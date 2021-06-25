import { MATCH_FAIL, MATCH_REQUEST, MATCH_SUCCESS } from "../Constants/matchConstants"

export const matchReducer = (state = { match:[] }, action) => {//state contains products that is empty array
    switch(action.type) {

        case MATCH_REQUEST:
            return {
                loading: true,
                match: []
            }
            
        case MATCH_SUCCESS:
            return {
                loading: false, 
                match: action.payload.match

            }
            
        case MATCH_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        case CLEAR_ERRORS:
            return {
                ...state, 
                error: null
            }
        default:
            return state
    }
}