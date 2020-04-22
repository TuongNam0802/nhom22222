import *as types from './../constanst/acctiontype';
import apiColler from './../apiColler';
export const login = (username, password) => {
    return function (dispatch) {
        fetch('https://localhost:5001/token', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    dispatch({
                        type: types.LOGIN_SUCCESS,
                        ...data
                    })
                }
                else {
                    dispatch({
                        type: types.LOGIN_ERROR,
                        ...data
                    })
                }
            })
    }
}

export const actAddUserRequest = (users) => {
    return dispatch => {
        return apiColler('users', 'POST', users).then(res => {
            dispatch(actAddUser(res.data));
         })
    }
}
export const actAddUser = (users) => {
    return {
        type: types.ADD_ACCOUNT,
        users
    }
}

// export const login2 = (username, password) => {
//     return {
//         url: 'https://localhost:5001/token',
//         method: 'POST',
//         data: { username, password },
//         onSuccess: types.LOGIN_SUCCESS,
//         onError: types.LOGIN_ERROR
//     }
// }