const repsReducer = (state = { reps: [], loading: false }, action) => {
    switch (action.type) {

        case 'LOADING_REPS':
            return {
                ...state,
                reps: [...state.reps],
                loading: true
            }

        case 'ADD_REPS':
            return {
                ...state,
                reps: action.reps,
                loading: false
            }
        
        default:
            return state;
    }
}

export default repsReducer;