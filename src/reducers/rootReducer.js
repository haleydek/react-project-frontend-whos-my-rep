import { combineReducers } from 'redux';
import repsReducer from './repsReducer';
import userReducer from './userReducer';
import badgesReducer from './badgesReducer';

const rootReducer = combineReducers({
    repsData: repsReducer,
    user: userReducer,
    badges: badgesReducer
})

export default rootReducer;