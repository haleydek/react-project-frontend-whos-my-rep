export const fetchBadges = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_BADGES' })
        fetch('/badges')
        .then(res => res.json())
        .then(badges => {
            return dispatch({ type: 'ADD_BADGES', payload: badges })
        })
    }
}