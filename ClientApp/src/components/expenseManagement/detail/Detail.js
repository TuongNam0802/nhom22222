import React, { Component } from 'react';
// import DetailItem from './../detail/DetailItem';
class Detail extends Component {
 
    render() {
        // const login = JSON.parse(localStorage.login);
        // console.log(login);
        
        return (
            <div className="container">
                <h2 className="text-center mb-5 mt-5">Thông Tin Chi Tiết</h2>
                <table className="table" border={1}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Thời Gian</th>
                            <th>Nội Dung Chi Tiết</th>
                            <th>Hình Thức GD</th>
                            <th>Tổng Thu</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                   {this.props.children}
                </table>
            </div>
        );
    }
}

export default Detail;