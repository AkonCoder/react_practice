/**
 * Created by pomy on 15/11/23.
 */

var path = require('path');

module.exports = {
    entry: path.join(__dirname, './index.js'),
    output: {
        path: __dirname,
        filename: 'vendor.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    }
}
