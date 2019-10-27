const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.css'],
    },
    output: {
        path: path.resolve('./dist/'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                // sass webpack configuration:
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                          },
                    },
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader'
                ]
            }
        ]
    }
    
}