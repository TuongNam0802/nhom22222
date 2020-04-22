import *as types from './../constanst/acctiontype';
const initState = [
    {
    loggedIn: false,
    token: null,
    user: null,
    error: null
}
]

export default (state = initState, action) => {

    switch (action.type) {

        case types.LOGIN_SUCCESS:
            const login = {
                userName: action.userName,
                login: true,
                token: action.access_token,
                userId: action.userId
            }
            localStorage.setItem("login", JSON.stringify(login));
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
        case types.ADD_ACCOUNT:
            state.push(action.users);
            return [...state];
    }

    return state;
}