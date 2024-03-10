const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
            publicPath: '/',
        },
        historyApiFallback: true,
        open: true,
        compress: true,
        host: 'localhost',
        hot: true,
        port: 3000,
    },
});