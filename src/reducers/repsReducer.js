const repsReducer = (state = {
    addressInput: [],
    divisions: [],
    titles: [],
    reps: [],
    loading: false
}, action) => {
    switch (action.type) {

        case 'LOADING_REPS':
            return {
                ...state,
                loading: true
            }

        case 'ADD_REPS':
            console.log("Google API data:", action.payload);

            return {
                ...state,
                addressInput: action.payload.normalizedInput,
                divisions: action.payload.divisions,
                titles: action.payload.offices,
                reps: action.payload.officials,
                loading: false
            }
        
        default:
            return state;
    }
}

export default repsReducer;