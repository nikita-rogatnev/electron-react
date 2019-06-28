const {DefinePlugin} = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    target: 'electron',
    plugins: [
        new DefinePlugin({
            IS_DEV: false,
            __DEV__: false,
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
});
