import React, { Component } from 'react';
import Product from './../components/manaagerAccount/Product';
import { connect } from 'react-redux';
import { actFecthProductAdminReques, actDeleteAccRequest} from './../actions/index';
import ProductItem from './../components/manaagerAccount/ProductItem';
import TotalBalance from './../components/TotalBalance';
class ProductAcc extends Component {
    componentDidMount() {
        const login=JSON.parse(localStorage.login);
        const userId=login.userId;
        this.props.FetchProductUser(userId);
    }

    onDelete=(id)=>{
        this.props.onDelete(id);
    }

    showProductList = (product) => {
        var result = [];
        if (product) {
            result = product.map((product, index) => {
                return (
                    <ProductItem
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
            var product = this.props.product;
            return (
                <React.Fragment>
                    <TotalBalance product={product}/>
                    <Product>
                        {this.showProductList(product)}
                    </Product>
                </React.Fragment>
                
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
        FetchProductUser: (userId) => {
            dispatch(actFecthProductAdminReques(userId));
        },
        onDelete: (id)=>{
            dispatch(actDeleteAccRequest(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAcc);
