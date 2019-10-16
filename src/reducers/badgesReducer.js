const badgesReducer = (state = {
    badges: [],
    loading: false
}, action) => {
    switch (action.type) {
        case 'LOADING_BADGES':
            return {
                ...state,
                loading: true
            }

        case 'ADD_BADGES':
            console.log("add badges:", action.payload)
            return {
                ...state,
                badges: [...action.payload],
                loading: false
            }

        default:
            return state;
    }
}

export default badgesReducer;