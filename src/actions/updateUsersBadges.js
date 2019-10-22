export const updateUsersBadges = (userId, badgeId) => {
    console.log("userId", userId);
    console.log("badgeId", badgeId);

    return dispatch => {
        dispatch({ type: 'PENDING_BADGE_IDS_UPDATE'})
        fetch((`/users/${userId}`), {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ badge_id: badgeId })
        })
        .then(res => res.json())
        .then(userData => {

            if (userData.message) {

                alert(userData.message)

            } else {

                console.log("res from updateUsersBadges", userData);

                dispatch({ type: 'UPDATE_BADGE_IDS', payload: userData })
            }
        })
    }
}