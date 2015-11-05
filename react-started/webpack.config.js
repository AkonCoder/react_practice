/**
 * Created by pomy on 15/11/6.
 */

var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './app.js'),
    output: {
        //path: path.resolve(__dirname, './assets'),
        filename: 'vendor.js'
    },
    module:{
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    }
}