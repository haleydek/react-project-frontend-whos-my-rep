export const fetchUser = (userId, history) => {
    return dispatch => {
        dispatch({ type: 'LOADING_USER' })
        fetch(`/users/${userId}`)
        .then(res => res.json())
        .then(userData => {
                // add userData to Redux store
                return dispatch({ type: 'ADD_USER', payload: userData })
        })
        .then(user => history.push("/"))

        // .then(user => history.push(`/users/${user.payload.id}`))
    }
}