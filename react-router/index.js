/**
 * Created by pomy on 15/11/23.
 */

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {Router, Route} from 'react-router';

import App from './component/app';
import About from './component/about';
import Concat from './component/concat';
import List from './component/lists';

const history = createBrowserHistory();

const routes = (
    <Router history = {history} >
        <Route path = '/' component = {App}>
            <Route path = '/about' component = {About} />
            <Route path = '/concat' component = {Concat} />
            <Route path = 'list/:id' component = {List} />
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('root')
);




