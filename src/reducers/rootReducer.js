import { combineReducers } from 'redux';
import repsReducer from './repsReducer';

const rootReducer = combineReducers({
    reps: repsReducer
})

export default rootReducer;