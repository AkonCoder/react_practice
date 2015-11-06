/**
 * Created by pomy on 15/11/6.
 */
var ReactDom = require('react-dom');
import React from 'react';
import ColorPanel from './panel/colorPanel';

require('./app.css');

//var Team = React.createClass({
//    onHungry: function(name) {
//        console.log(name + " is hungry");
//    },
//    render: function() {
//        return <div>Team onwer is: <People name={this.props.name} onHungry={this.onHungry}></People></div>;
//    }
//});
//var People = React.createClass({
//    render: function() {
//        return <span onClick={this.handleClick}>{this.props.name}</span>;
//    },
//    handleClick: function() {
//        this.props.onHungry(this.props.name);
//    }
//});



window.onload = function () {
    ReactDom.render(<ColorPanel />, document.getElementById('demos'));
    //ReactDom.render(<Team name='Lucy' />,
    //    document.getElementById('test'))
}