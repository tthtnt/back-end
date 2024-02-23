const { merge } = require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base')

const webpackconfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    stats: {children: false}
})

module.exports = webpackconfig
