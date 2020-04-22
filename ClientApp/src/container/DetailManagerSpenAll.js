import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFecthAllSpenRequest,actDeleteSpenRequest } from './../actions/index';
import ExpeneDetailAllItem from './../components/expenseManagement/detailManagerAll/ExpeneDetailAllItem';
import ExpeneDetailAll from './../components/expenseManagement/detailManagerAll/ExpeneDetailAll';
class DetailManagerSpenAll extends Component {
    componentDidMount() {
        const login=JSON.parse(localStorage.login);
        const userId=login.userId;
        this.props.fetchAllProduct(userId);
    }
    onDelete=(id)=>{
        this.props.onDelete(id);
    }

    showProductList = (product) => {
        var result = [];
        if (product.length > 0) { 
            result = product.map((product, index) => {
                return (
                    <ExpeneDetailAllItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                    
                );
                
            });
        }
        return result;
        
        
    }
    
    

    render() {
        var product=this.props.product;        
        return (
            <ExpeneDetailAll>
                {this.showProductList(product)}
            </ExpeneDetailAll>
        );
    }
}
function mapStateToProps(state) {
    return {
        product: state.product
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProduct: (userId) => {
            dispatch(actFecthAllSpenRequest(userId));
        },
        onDelete: (id)=>{
            dispatch(actDeleteSpenRequest(id));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailManagerSpenAll);