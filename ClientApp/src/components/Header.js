import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  logout(e) {
    e.preventDefault();
    localStorage.clear();
    window.location.href = '/';
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark" style={{ backgroundColor: '#e3f2fd' }}>
        <div className="container">
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
              
                <Link className="nav-link" to="/">Trang chủ <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/quan-ly-chi-tieu">Thống Kê <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tai-khoan">Danh Sách Tk <span className="sr-only">(current)</span></Link>

              </li>
              <li className="nav-item dropdown">
                  <a href="#top" className="nav-link dropdown-toggle waves-effect waves-light" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Chi Tiết</a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                    <Link to="/chi-tiet-thu" className="dropdown-item waves-effect waves-light">Chi Tiết Thu</Link>
                    <Link to="/chi-tiet-chi" className="dropdown-item waves-effect waves-light">Chi Tiết Chi</Link>
                  </div>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <ul className="nav navbar-nav nav-flex-icons ml-auto">
                <li className="nav-item dropdown">
                  <Link to="" className="nav-link dropdown-toggle waves-effect waves-light" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Tài Khoản</Link>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                    <Link to="/dang-ky" className="dropdown-item waves-effect waves-light">Xin chào:</Link>
                    <button onClick={this.logout} className="dropdown-item waves-effect waves-light">Đăng Xuất</button>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;