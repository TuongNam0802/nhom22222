import React, { Component } from 'react';

class ExpenseManager extends Component {
    render() { 
      
        return (
            <div className="container mt-3">
            <h2 className="mt-2 text-center">Thống kê tháng</h2>
            <br />
            <div className="tab-content">
              <div id="home" className="container tab-pane active"><br />
                {/* <ExpenseManagerHome/> */}
                {this.props.children}
              </div>
            </div>
          </div>
        );
    }
}
 
export default ExpenseManager;