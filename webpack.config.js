const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    output: {
        path: path.resolve('./dist/'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader'
        }]
    }
}