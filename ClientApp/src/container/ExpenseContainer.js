import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFecthExpenReques } from './../actions/index';
import ExpenseManager from './../components/expenseManagement/statistical/ExpenseManager';
import ExpeneManagerHome from './../components/expenseManagement/statistical/ExpeneManagerHome';
class ProductAcc extends Component {
    componentDidMount() {
        this.props.fetchAllProduct();
    }
    showExpenAtack = (product) => {
        var result = null;
        if (product.length > 0) {
            result = product.map((product, index) => {
                return (
                    <ExpeneManagerHome
                        key={index}
                        product={product}
                    />
                );
            });
        }
        return result;
    }
    render() {
        var product = this.props.product;

        return (
            <React.Fragment>

                
        <ExpenseManager>
            {/* {this.showExpenAtack(account)} */}
            <ExpeneManagerHome product={product}/>
        </ExpenseManager>
            </React.Fragment>


        );
    }
}
const mapStateToProps = (state) => {
    return {
        product: state.product
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProduct: () => {
            dispatch(actFecthExpenReques());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAcc);
