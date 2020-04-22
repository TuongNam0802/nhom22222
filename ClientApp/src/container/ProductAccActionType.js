import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddAccRequest } from './../actions/index';
import { connect } from 'react-redux';
class ProductAccActionType extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id: '',
            txtbankName: '',
            txtredMoney: '',
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    onSubmit = (e) => {
        var { id, txtbankName, txtredMoney} = this.state;
        var txtredMoney = new Number(txtredMoney);
        var { history } = this.props;
        var bank = {
            bankName: txtbankName,
            redMoney: txtredMoney,
        
        }
        e.preventDefault();
        if (id) {

        } else {
            const login = JSON.parse(localStorage.login);
            const userId  = login.userId;            
            this.props.onAddproduct(userId,bank);
            if (window.confirm('Thêm thành công! xem kết quả')) {
                history.goBack();
            }
        }


    }
    render() {
        var { txtbankName, txtredMoney } = this.state
        
        return (
            <div className="container">
                <h3 className="mt-5">Điền thông tin</h3>
                <div className="row">
                    <div className="col-8">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="txtbankName"
                                    className="form-control"
                                    placeholder="Tên Ngân hàng"
                                    value={txtbankName}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="txtredMoney"
                                    className="form-control height"
                                    placeholder="Số Dư Tài Khoản"
                                    value={txtredMoney}
                                    onChange={this.onChange}
                                >

                                </input>
                            </div>

                            <Link to="/tai-khoan" className="btn btn-danger mr-4">Trở lại</Link>
                            <button type="submit" className="btn btn-primary">Lưu Lại</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddproduct: (userId,bank) => {
            dispatch(actAddAccRequest(userId,bank));
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductAccActionType);