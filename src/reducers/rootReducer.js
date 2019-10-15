import { combineReducers } from 'redux';
import repsReducer from './repsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    repsData: repsReducer,
    user: userReducer
})

export default rootReducer;