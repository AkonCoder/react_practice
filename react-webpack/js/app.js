/**
 * Created by pomy on 15/11/4.
 */
import React from 'react';
import Router from 'react-router';
import {DefaultRoute, Link, Route, RouteHandler} from 'react-router';

import Hello from './hello';

let App = React.createClass({
    render(){
        return (
            <div className = 'nav'>
                <Link to='app'  className='homelink'>Home </Link>
                <Link to='hello'  className='hellolink'>Say Hello </Link>
                {/* 注释 this is the importTant part */}
                <RouteHandler />
            </div>
        )
    }
});

let routes = (
    <Route name='app' path='/' handler={App}>
        <Route name='hello' path='/hello' handler={Hello} />
    </Route>
);

Router.run(routes, function(handler){
    React.render(<handler />, document.body);
});
