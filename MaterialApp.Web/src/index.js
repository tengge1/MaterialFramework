import React from 'react';
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";
import Home from './views/Home.jsx';

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
    <Switch>
        <Route path='/' component={Home} key="0"/>
    </Switch>
</Router>, document.getElementById("root"));
