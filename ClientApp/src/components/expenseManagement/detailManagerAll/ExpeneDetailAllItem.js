import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ExpeneDetailAllItem extends Component {
  onDeleteSpan = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa")) {
      this.props.onDelete(id);
    }

  }
  
    render() {
      var { product, index } = this.props;
      var check = product.revenue_and_expenditure ===1? 'Chi':'Thu';
      var date = product.createTime;
        var datime=date.slice(0,10);
        return (
            <tbody>
            <tr>
        <td>{index+1}</td>
        <td>{datime}</td>
        <td>{product.purpose}</td>
              <td className="text-center">
                <label className="label text-danger ">{check}</label>
              </td>
        <td>{product.money}K</td>
              <td>
               
                <Link to={`/thong-tin/${product.id}`} className="btn btn-light">
                    <i className="far fa-eye"/>
                  </Link>
                  <Link to="" className="btn btn-primary">Sửa</Link>
                  <button onClick={() => this.onDeleteSpan(product.id)} className="btn btn-danger">Xóa</button>
              </td>
            </tr>
          </tbody>
        );
    }
}

export default ExpeneDetailAllItem;