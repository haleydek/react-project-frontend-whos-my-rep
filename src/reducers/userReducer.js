const userReducer = (state = {
    email: '',
    firstName: '',
    badgeIds: []
}, action) => {
    switch (action.type) {
        case 'WAITING_FOR_LOGIN':
            return state;

        case 'LOGIN_USER':
            return state;

        default:
            return state;
    }
}

export default userReducer;