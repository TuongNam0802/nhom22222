import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class ProductItem extends Component {
  onDeleteAcc = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa")) {
      this.props.onDelete(id);
    }

  }
  render() {
    var { product, index } = this.props;
    return (
      <tbody>
        <tr>
          <td>{index + 1}</td>
          <td>{product.bankName}</td>
          <td>{product.redMoney}đ</td>
          <td>
              <Link to={`/acc/${product.id}`} className="btn btn-primary">Sửa</Link>
              <button className="btn btn-danger" onClick={() => this.onDeleteAcc(product.id)}>Xóa</button>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default ProductItem;