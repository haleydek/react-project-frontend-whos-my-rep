const userReducer = (state = {
    id: '',
    email: '',
    firstName: '',
    badgeIds: [],
    loading: false,
    loggedIn: false
}, action) => {

    console.log("userReducer action:", action.type)

    switch (action.type) {
        case 'PENDING_LOGIN':
            return {
                ...state,
                loading: true
            }

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                firstName: action.payload.first_name,
                badgeIds: action.payload.badge_ids,
                loading: false,
                loggedIn: true
            }

        case 'LOGIN_FAILURE':
                return {
                    ...state,
                    loading: false,
                    loggedIn: false
                }

        case 'LOADING_USER':
            return {
                ...state,
                loading: true,
                loggedIn: true
            }

        case 'ADD_USER':
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                firstName: action.payload.first_name,
                badgeIds: action.payload.badge_ids,
                loading: false
            }

        case 'LOGOUT_USER':
            return {
                ...state,
                id: '',
                email: '',
                firstName: '',
                badgeIds: [],
                loading: false,
                loggedIn: false
            }

        default:
            return state;
    }
}

export default userReducer;