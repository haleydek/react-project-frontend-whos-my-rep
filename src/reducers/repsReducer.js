const repsReducer = (state = {
    divisions: [],
    offices: [],
    officials: [],
    loading: false
}, action) => {
    switch (action.type) {

        case 'LOADING_REPS':
            return {
                ...state,
                loading: true
            }

        case 'ADD_REPS':
            return {
                divisions: action.payload.divisions,
                offices: action.payload.offices,
                officials: action.payload.officials,
                loading: false
            }
        
        default:
            return state;
    }
}

export default repsReducer;