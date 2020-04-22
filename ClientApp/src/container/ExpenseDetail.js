import React, { Component } from 'react';
import Detail from './../components/expenseManagement/detail/Detail';
import DetaiItem from './../components/expenseManagement/detail/DetailItem';
import {actFecthExpeneDetailRequest} from './../actions/index';
import { connect } from 'react-redux';
class ExpenseDetail extends Component {
    componentDidMount() {
        this.props.fetchAllProduct();
    }

    showProductList = (account) => {
        var result = [];
        if (account.length > 0) {
            result = account.map((account, index) => {
                return (
                    <DetaiItem
                        key={index}
                        account={account}
                        index={index}
                       
                    />
                );
            });
        }
        return result;
    }
        render() {
            var account = this.props.account;
            return (
               
                    <Detail>
                        {this.showProductList(account)}
                    </Detail>
               
                
            );
        }
    }
function mapStateToProps(state) {
    return {
        account: state.account
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProduct: () => {
            dispatch(actFecthExpeneDetailRequest());
        }
        
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseDetail);