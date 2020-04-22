import React from 'react';
import ProductCollection from './components/managerSpan/managerCollection/ProductCollection';
import ProductExport from './components/managerSpan/managerExport/ProductExport';
import ProductAcc from './container/ProductAcc';
import ProductAccActionType from './container/ProductAccActionType';
import ExpenseContainer from './container/ExpenseContainer';
// import Detail from './components/expenseManagement/detail/Detail';
import DetailIport from './components/expenseManagement/detailManager/DetailIport';
import DetailActack from './components/expenseManagement/detailManager/DetailActack';
import DetailManagerSpenAll from './container/DetailManagerSpenAll';
import ExpenseActionType from './container/ExpenseActionType';
import ExpenseDetail from './container/ExpenseDetail';
import Logup from 'pages/account/logup';
const Rou=[
    {
        path:'/quan-ly-chi-tieu',
        exact:false,
        main:({match,history})=><ExpenseContainer match={match} history={history}/>
    },
    {
        path:'/',
        exact: true,
        main:({match,history})=><DetailManagerSpenAll match={match} history={history}/>
    },
    {
        path:'/chi-tiet-thu',
        exact: false,
        main:()=><DetailIport/>
    },
    {
        path:'/chi-tiet-chi',
        exact: false,
        main:()=><DetailActack/>
    },
    {
        path:'/thong-tin/:id',
        exact: false,
        main:({match,history})=><ExpenseDetail match={match} history={history}/>
    },
    {
        path:'/quan-ly-xuat',
        exact: false,
        main:()=><ProductCollection/>
    },
    {
        path:'/quan-ly-nhap',
        exact: false,
        main:()=><ProductExport/>
    },
    // {
    //     path:'/',
    //     exact: true,
    //     main:({match,history})=><CheckLogin match={match} history={history}/>
    // },
    {
        path:'/tai-khoan',
        exact: true,
        main:({match,history})=><ProductAcc match={match} history={history}/>
    },
    {
        path:'/them-moi',
        exact: false,
        main:({history})=><ProductAccActionType history={history}/>
    },

    {
        path:'/thu-chi/add',
        exact: false,
        main:({history})=><ExpenseActionType history={history}/>
    },
    // {
    //     path:'/dang-ky',
    //     exact: false,
    //     main:({history})=><Logup history={history}/>
    // },
    {
        path:'/acc/:id',
        exact: false,
        main:({history,match})=><ProductAccActionType match = {match} history={history}/>
    }

]
export default Rou;