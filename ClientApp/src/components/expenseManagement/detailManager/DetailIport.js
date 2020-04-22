import React, { Component } from 'react';
import DetailIportItem from './DetailIportItem';

class DetailIport extends Component {
    render() {
        return (
            <div className="container">
            <h2 className="text-center mb-5 mt-5">Thông Tin Chi Tiết Thu</h2>
            <form className="form-inline my-2 my-lg-0" >
                    <div className="ml-auto mb-2 text-primary">
                        Tổng Số Thu: <span>1000000đ</span>
                    </div>
                </form>
            <table className="table" border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Thời Gian</th>
                        <th>Nội Dung Chi Tiết</th>
                        <th>Tổng Thu</th>
                        <th>Thao Tác</th>
                    </tr>
                </thead>
                <DetailIportItem/>
            </table>
        </div>
        );
    }
}

export default DetailIport;