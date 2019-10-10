import { combineReducers } from 'redux';
import repsReducer from './repsReducer';

const rootReducer = combineReducers({
    repsData: repsReducer
})

export default rootReducer;