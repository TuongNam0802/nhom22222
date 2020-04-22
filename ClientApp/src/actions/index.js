import *as Types from './../constanst/acctiontype';
import apiColler from './../apiColler';

//hien thi danh sach the ngaan hang
export const actFecthProductAdminReques = (userId) => {
    return dispatch => {
        return apiColler(`banks?userId=${userId}`, 'GET', null).then(res => {
            dispatch(actFecthProductAdmin(res.data))
        });
    };
}

export const actFecthProductAdmin = (account) => {
    return {
        type: Types.SHOW_ACC,
        account
    }
}

//them danh sach the ngan hang
export const actAddAccRequest = (userId, bank) => {
    return dispatch => {
        return apiColler(`banks?userId=${userId}`, 'POST', bank).then(res => {

            dispatch(actAddAcc(res.data));
        });
    }
}
export const actAddAcc = (banks) => {
    return {
        type: Types.ADD_ACC,
        banks
    }
}

//them danh sach thu chi
export const actAddSpenRequest = (spendings) => {
    return dispatch => {
        return apiColler('spendings', 'POST', spendings).then(res => {
            dispatch(actAddSpen(res.data));
        });
    }
}
export const actAddSpen = (spendings) => {
    return {
        type: Types.ADD_SPEN,
        spendings
    }
}
//hien thi danh sach thu chi
export const actFecthAllSpenRequest = (userId) => {
    return dispatch => {
        return apiColler(`spendings?userId=${userId}`, 'GET', null).then(res => {
            dispatch(actFectAllSpen(res.data))

        });
    };
}
export const actFectAllSpen = (product) => {
    return {
        type: Types.SHOW_EXPENE,
        product
    }
}

//xóa danh sach thu chi

export const actDeleteSpenRequest = (id) => {
    return dispatch => {
        return apiColler(`spendings/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteSpen(id))
        });
    };
}
export const actDeleteSpen = (id) => {
    return {
        type: Types.DELETE_EXPENE,
        id
    }
}

//hien thi danh sach chi tiet thu chi

export const actFecthExpeneDetailRequest = (id) => {
    console.log(id);

    return dispatch => {
        return apiColler(`spendings/${id}`, 'GET', null).then(res => {
            dispatch(actFecthExpeneDetail(id))


        });
    };
}

export const actFecthExpeneDetail = (id, account) => {


    return {
        type: Types.SHOW_EXPENE_DETAIL,
        id,
        account

    }
}


//xoa danh sach ngan hang
export const actDeleteAccRequest = (id) => {
    return dispatch => {
        return apiColler(`banks/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteAcc(id))
        });
    };
}
export const actDeleteAcc = (id) => {
    return {
        type: Types.DELETE_ACC,
        id,

    }
}

//hien thi danh sach chi
export const actFecthExpenReques = () => {
    return dispatch => {
        return apiColler('spendingsum', 'GET', null).then(res => {
            dispatch(actFecthExpen(res.data))
        });
    };
}
export const actFecthExpen = (account) => {
    return {
        type: Types.SHOW_EXPENE_ACTACK,
        account
    }
}
