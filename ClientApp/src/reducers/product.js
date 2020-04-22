import *as Types from './../constanst/acctiontype';
var initialState = [];
var findIndex = (bank, id) => {
    var result = -1;
    bank.forEach((bank, index) => {
        if (bank.id === id) {
            result = index;
        }
    })
    return result;
}
const product = (state = initialState, action) => {
    var index = -1;
   
    var { id } = action;
    switch (action.type) {
        case Types.SHOW_ACC:
            state = action.account;
            return state;           

        case Types.SHOW_EXPENE_ACTACK:
            state = action.account;
            return [...state];

        case Types.ADD_ACC:
            state.push(action.banks);
            return [...state];
        case Types.ADD_SPEN:
            state.push(action.spendings);
            return [...state];

        case Types.DELETE_ACC:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];

        case Types.SHOW_EXPENE:
            state = action.product;
            return state;

        case Types.SHOW_EXPENE_DETAIL:
            state = action.product
            return state;


        case Types.DELETE_EXPENE:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];

        default:
            return [...state];
    }
}
export default product;