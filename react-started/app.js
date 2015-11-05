/**
 * Created by pomy on 15/11/6.
 */
var ReactDom = require('react-dom');
import React from 'react';
import ColorPanel from './panel/colorPanel';

window.onload = function () {
    ReactDom.render(<ColorPanel />, document.getElementById('demos'));
}