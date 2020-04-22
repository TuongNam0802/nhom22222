
import './App.scss';
import React, { Component } from 'react';
import Header from './components/Header';
import Rou from './routerr';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  showcontent = (Rou) => {
    var result = null;
    if (Rou.length > 0) {
      result = Rou.map((Rou, index) => {
        return (<Route
          key={index}
          path={Rou.path}
          exact={Rou.exact}
          component={Rou.main}

        />
        );
      });
    }

    return <Switch>{result}</Switch>
  }
  render() {
    return (
      <Router>
        <div className="wrapper">
        <Header />
        {this.showcontent(Rou)}
        </div>
      </Router>
    );
  }
}

export default App;

