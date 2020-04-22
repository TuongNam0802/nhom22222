import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Product extends Component {
 
    render() { 
      const login = JSON.parse(localStorage.login);
        return (
            <div className="container">
            <h2 className="text-center mb-2">Danh Sách Tài Khoản Ngân Hàng</h2>
            <Link to="/them-moi" className="btn btn-primary mb-2">Thêm Mới Tài Khoản</Link>
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Danh Sách Tài Khoản</th>
                  <th>Số Dư Tk</th>
                  <th>Thao Tác</th>
                </tr>
              </thead>
                  {this.props.children}
            </table>
          </div>
        );
    }
}
 
export default Product;