import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddSpenRequest } from './../actions/index';
import { connect } from 'react-redux';
class ExpenseActionType extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        id: '',
        txtpurpose: '',
        txtmoney: '',
        txtrevenue_and_expenditure:''
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
    var { id, txtpurpose, txtmoney,txtrevenue_and_expenditure } = this.state;
    var txtmoney1 = Number(txtmoney);
    var txtrevenue_and_expenditure1 = Number(txtrevenue_and_expenditure);
    var { history } = this.props;
    var bank = {
      purpose: txtpurpose,
      money: txtmoney1,
      revenue_and_expenditure:txtrevenue_and_expenditure1
    }

    e.preventDefault();
    if (id) {

    } else {

        this.props.onAddproduct(bank)
        if (window.confirm('Thêm thành công! xem kết quả')) {
            history.goBack();
        }
    }


}
  render() {
    var { txtpurpose, txtmoney,txtrevenue_and_expenditure } = this.state
    return (
      <div className="container">
        <h3 className="mt-5">Điền thông tin</h3>
        <div className="row">
          <div className="col-8">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="txtpurpose"
                  className="form-control"
                  placeholder="Nội dung"
                  value={txtpurpose}
                  onChange={this.onChange} />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="txtmoney"
                  className="form-control height"
                  placeholder="Tổng"
                  value={txtmoney}
                  onChange={this.onChange}
                >
                </input>
              </div>
              <div className="form-group">
                <input type="number" 
                value ={txtrevenue_and_expenditure}
                onChange ={this.onChange}
                name="txtrevenue_and_expenditure" min="0" max="1" /><label>0: thu, 1:chi</label>
              </div>

              <Link to="/" className="btn btn-danger mr-4">Trở lại</Link>
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
      onAddproduct: (bank) => {
          dispatch(actAddSpenRequest(bank));
      }
  }
}

export default connect(null, mapDispatchToProps)(ExpenseActionType);