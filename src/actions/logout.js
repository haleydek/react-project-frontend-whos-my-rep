export const logout = (history) => {
    return dispatch => {
        dispatch({ type: 'LOGOUT_USER' })
        localStorage.clear()
    }
}