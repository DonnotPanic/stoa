const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin')
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
                },".nojekyll","CNAME"]
        }),
        new StatsWriterPlugin("stats.json",{
            fields: null,
            stats: {chunkModules: true},
            exclude: [/node_modules[\\\/]react/]
        })
    ],
    optimization:{
        splitChunks: {
            cacheGroups: {
                react: {
                    name: "react-related",
                    test: /react/,
                    priority: 2,
                    chunks: 'all',
                    reuseExistingChunk: true,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    chunks: 'all',
                    reuseExistingChunk: true,
                }
            },
        }
    }
});
