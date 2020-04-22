import React, { Component } from 'react';
import DetailActackItem from './DetailActackItem';

class DetailActack extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="text-center mb-5 mt-5">Thông Tin Chi Tiết Chi</h2>
                <form className="form-inline my-2 my-lg-0" >
                    <div className="ml-auto mb-2 text-primary">
                        Tổng Số Chi: <span>1000000đ</span>
                    </div>
                </form>
                <table className="table" border={1}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Thời Gian</th>
                            <th>Nội Dung Chi Tiết</th>
                            <th>Tổng chi</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <DetailActackItem />
                </table>
            </div>
        );
    }
}

export default DetailActack;