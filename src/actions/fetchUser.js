import { RAILS_API_URL } from '../App';

export const fetchUser = (formData) => {
    return dispatch => {
        dispatch({ type: 'WAITING_FOR_LOGIN' })
        fetch((RAILS_API_URL + '/login'), {
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

            return dispatch({ type: 'LOGIN_USER', payload: userData })
        })
        .catch(error => console.log(error))
    }
}