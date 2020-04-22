import React, { Component } from 'react';
class TotalBalance extends Component {
    showtotal = (product) => {
        var total = 0;
        if (product) {
            for (var i = 0; i < product.length; i++) {
                total += product[i].redMoney;
            }
        }
        return total;

    }
    render() {
        var { product } = this.props;
        return (
            <div className="container">
                <form className="form-inline my-2 my-lg-0" >
                    <div className="ml-auto mt-5 text-primary">
                        Tổng Số Dư Tài Khoản: <span className="text-info">{this.showtotal(product)}đ</span>
                    </div>
                </form>
            </div>
        );
    }
}

export default TotalBalance;