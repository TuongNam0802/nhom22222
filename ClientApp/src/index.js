import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import appReducers from './reducers/index';

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import Layout from "./layout";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

//persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={Layout} />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

