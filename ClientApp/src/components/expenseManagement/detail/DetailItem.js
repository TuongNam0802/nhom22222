import React, { Component } from 'react';

class ExpeneManagerIpmorrtItem extends Component {
    render() {
      var {account}=this.props;
      console.log(account);
      
        return (
            <tbody>
            <tr>
              <td>1</td>
              <td>17/02/2019</td>
              <td>Ông a trả nợ</td>
              <td>thẻ</td>
              <td>10.000.000</td>
              <td>
                <div className="btn btn-group">
                  <button className="btn btn-primary">Sửa</button>
                  <button className="btn btn-danger">Xóa</button>
                </div>
              </td>
            </tr>
          </tbody>
        );
    }
}

export default ExpeneManagerIpmorrtItem;