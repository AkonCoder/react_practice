/**
 * Created by pomy on 15/11/4.
 */

var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './server.js'),
    output: {
        path: path.resolve(__dirname, './assets'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    },

    resolve:{
        extensions:['','.js','.json']
    },
};