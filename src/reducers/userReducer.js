const userReducer = (state = {
    id: '',
    email: '',
    firstName: '',
    badgeIds: [],
    loading: false
}, action) => {
    console.log("user action.type", action.type);
    console.log("user action.payload", action.payload);

    switch (action.type) {
        case 'PENDING_LOGIN':
            return {
                ...state,
                loading: true
            }

        case 'LOGIN_USER':
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                firstName: action.payload.first_name,
                badgeIds: action.payload.badge_ids,
                loading: false
            }

        default:
            return state;
    }
}

export default userReducer;