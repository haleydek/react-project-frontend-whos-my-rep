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
            return {
                ...state,
                badges: action.payload,
                loading: false
            }

        default:
            return state;
    }
}

export default badgesReducer;