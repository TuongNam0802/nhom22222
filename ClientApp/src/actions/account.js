export const types = {
    LOGIN_SUCCESS: 'ACCOUNT_LOGIN_SUCCESS',
    LOGIN_ERROR: 'ACCOUNT_LOGIN_ERROR',
}


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

export const login2 = (username, password) => {
    return {
        url: 'https://localhost:5001/token',
        method: 'POST',
        data: { username, password },
        onSuccess: types.LOGIN_SUCCESS,
        onError: types.LOGIN_ERROR
    }
}