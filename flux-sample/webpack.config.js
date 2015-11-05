/**
 * Created by pomy on 15/11/4.
 */
module.exports = {
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