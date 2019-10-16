export const fetchUser = (userId, history) => {
    return dispatch => {
        dispatch({ type: 'LOADING_USER' })
        fetch(`/users/${userId}`)
        .then(res => res.json())
        .then(userData => {
                // add userData to Redux store
                dispatch({ type: 'ADD_USER', payload: userData })

                return userData
        })
        .then(user => history.push(`/users/${user.id}`))
    }
}