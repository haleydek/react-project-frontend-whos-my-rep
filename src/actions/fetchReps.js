import { GOOGLE_API_URL } from '../App';

export const fetchReps = (address) => {
    return dispatch => {
        dispatch({ type: 'LOADING_REPS' })
        fetch(GOOGLE_API_URL + address)
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON)
            return dispatch({ type: 'ADD_REPS', payload: resJSON })
        })
    }
}