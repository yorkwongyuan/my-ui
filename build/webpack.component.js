const path = require('path')
const webpack = require('webpack')
const components = require('./components.json')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
let entries = {}
const baseUrl = path.resolve(__dirname, '../')
Object.keys(components).forEach(comName => {
  entries[comName] = path.join(baseUrl, 'src', components[comName])
})
module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry: entries,
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    publicPath: '/lib/',
    libraryTarget: 'umd',
    chunkFilename: '[id].js',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'production'
    })
  ]
})