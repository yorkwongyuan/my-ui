const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.base')
const path = require('path')

module.exports = merge(webpackConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, '../', 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'my-ui.min.js',
    publicPath: '/lib/',
    library: 'my-ui',
    libraryTarget: 'umd',
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