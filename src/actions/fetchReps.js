export const fetchReps = (address) => {
    return dispatch => {
        dispatch({ type: 'LOADING_REPS' })
        fetch(GOOGLE_API_URL + address)
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON);
            return dispatch({ type: 'ADD_REPS', reps: resJSON })
        })
    }
}

// export const fetchCats = () => {
//     return dispatch => {
//         dispatch({type: 'LOADING_CATS'})
//         fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
//         .then(res => res.json())
//         .then(resJSON => {
//             console.log(resJSON);
//             return dispatch({ type: 'ADD_CATS', cats: resJSON.images })
//         })
//     }
// }