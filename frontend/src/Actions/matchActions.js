import axios from 'axios';

import { MATCH_FAIL, MATCH_REQUEST, MATCH_SUCCESS } from "../Constants/matchConstants"

export const setMatch = (city, date, teamA, teamB) => async (dispatch) => {
    try {
        dispatch({type: MATCH_REQUEST}) 

        
        const { data } = await axios.post('/match/new',{city, date, teamA, teamB}) 

        

        dispatch({
            type: MATCH_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: MATCH_FAIL, //IN case of error this is dispatched
            payload: error.response.data.message
        })
    }
}