import React, { Component } from 'react';
import Logup from 'pages/account/logup';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from './pages/account/login';
class routeraccount extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/dang-ky" component={Logup} />
                    <Route exact path="/" component={Login} />
                </div>
            </Router>
        );
    }
}

export default routeraccount;