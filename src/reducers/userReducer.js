const userReducer = (state = {
    id: '',
    email: '',
    firstName: '',
    badgeIds: [],
    loading: false,
    loggedIn: false
}, action) => {

    console.log("userReducer action:", action.type)
    console.log("user action.payload", action.payload)

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

        case 'PENDING_SIGNUP':
            return {
                ...state,
                loading: true
            }
        
        case 'SIGNUP_FAILURE':
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

        case 'PENDING_BADGE_IDS_UPDATE':
            return {
                ...state,
                loading: true
            }

        case 'UPDATE_BADGE_IDS':
            return {
                ...state,
                loading: false,
                badgeIds: action.payload.badge_ids
            }

        default:
            return state;
    }
}

export default userReducer;