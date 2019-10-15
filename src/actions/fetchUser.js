export const fetchUser = (formData) => {
    return dispatch => {
        dispatch({ type: 'WAITING_FOR_LOGIN' })
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
            console.log("postLogin res data:", userData);

            // add user id to localStorage
            window.localStorage.userId = userData.id

            // add userData to Redux store
            return dispatch({ type: 'LOGIN_USER', payload: userData })
        })
        .catch(error => console.log(error))
    }
}

// if there is a user in localStorage?
// if yes, fetchUser and put it back in Redux store right away
    // if no user in localStorage, send user to Login page
// if user is in Redux store
// conditional rendering throughout app - if user is logged in? 