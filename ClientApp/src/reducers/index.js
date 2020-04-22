import { combineReducers } from 'redux';
import product from './product';
import account from './account';

export default combineReducers({
    account,
    product
})