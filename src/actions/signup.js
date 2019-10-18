export const signup = (formData, history) => {
    return dispatch => {
        dispatch({ type: 'PENDING_SIGNUP' })
        fetch(('/signup'), {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(userData => {
            if (userData.message) {
                dispatch({ type: 'SIGNUP_FAILURE' })
                history.push('/signup')
            } else {

                // add user id to localStorage
                window.localStorage.userId = userData.id

                // add userData to Redux store
                dispatch({ type: 'LOGIN_SUCCESS', payload: userData })
                history.push(`/users/${userData.id}`)
            }
        })
    }
}