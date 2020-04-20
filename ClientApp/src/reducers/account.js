import { types } from '../actions/account';

const initState = {
    loggedIn: false,
    token: null,
    user: null,
    error: null
}

export default (state = initState, action) => {

    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                token: action.access_token
            }
        case types.LOGIN_ERROR:
            return {
                ...state,
                loggedIn: false,
                error: action.error
            }
    }

    return state;
}