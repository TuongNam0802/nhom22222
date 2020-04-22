import React from 'react';
import { connect } from 'react-redux';
import App from 'App';
import {
    BrowserRouter as Router
} from "react-router-dom";

import Routeraccount from 'routeraccount';
class Layout extends React.Component {
    render() {
        if (this.props.account.loggedIn) {
            return <App />;
        }
        return (
            <Router>
                <React.Fragment>
                    {/* <LoginPage /> */}
                    <Routeraccount />
                </React.Fragment>
            </Router>
        );



    }
}

function mapStateToProps(state) {
    return { account: state.account }
}

export default connect(mapStateToProps)(Layout)
