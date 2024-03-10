const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'js/[name].[contenthash:8].bundle.js',
        chunkFilename: 'js/[name].[contenthash:8].chunk.js',
        publicPath: '/',
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns:[{
                    from: path.resolve(__dirname, 'public'),
                    to: path.resolve(__dirname, 'dist') 
                }
            ]
        })
    ],
});
