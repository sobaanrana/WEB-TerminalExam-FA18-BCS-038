import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './Reducers/userReducers';
import { matchReducer } from './Reducers/matchReducers';

const reducer = combineReducers({
    loggedInUser : userReducer,
    match : matchReducer
})

let initialState = {} 

//Now create store
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;