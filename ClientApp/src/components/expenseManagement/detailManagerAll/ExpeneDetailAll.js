import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ExpeneDetailAll extends Component {
    render() {
        return (
            <div className="container mt-3">
                <h2 className="mt-5 text-center">Quản Lý Thu Chi</h2>
                <Link to="/thu-chi/add" className="btn btn-primary mb-2">Thêm Mới Thu Chi</Link>
                <div className="tab-content">
                    <div id="home" className="container tab-pane active"><br />
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Thời gian</th>
                                    <th>Nội Dung</th>
                                    <th>Thu/Chi</th>
                                    <th>Tổng</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            {this.props.children}
                        </table>


                    </div>
                </div>
            </div>
        );
    }
}

export default ExpeneDetailAll;