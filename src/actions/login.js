export const login = (formData, history) => {
    return dispatch => {
        dispatch({ type: 'PENDING_LOGIN' })
        fetch(('/login'), {
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
                dispatch({ type: 'LOGIN_FAILURE' })
                history.push("/login")

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

// if there is a user in localStorage?
// if yes, fetchUser and put it back in Redux store right away
    // if no user in localStorage, send user to Login page
// if user is in Redux store
// conditional rendering throughout app - if user is logged in? 