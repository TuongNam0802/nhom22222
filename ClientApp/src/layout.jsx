import React from 'react';
import LoginPage from './pages/account/login';
import HomePage from './pages/home';

import { connect } from 'react-redux';

class Layout extends React.Component {
    render() {
        if (this.props.account.loggedIn) {
            return <HomePage />;
        }
        return <LoginPage />;
    }
}

function mapStateToProps(state) {
    return { account: state.account }
}

export default connect(
    mapStateToProps
)(Layout)
