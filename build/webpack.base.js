const path = require('path')
const webpack = require('webpack')
const pkg = require('../package.json')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const {join} = path
function resolve (_path) {
  return join(__dirname, '..', _path)
}
module.exports = {
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: [
            'vue-style-loader', 
            {
              loader: 'css-loader'
            }
          ],
          less: [
            'vue-style-loader', 
            {
              loader: 'css-loader'
            },
            {
              loader: 'less-loader'
            }
          ]
        },
        postLoaders: {
          html: 'babel-loader?sourceMap'
        },
        sourceMap: true
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loaders: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        }
      ]
    },{
      test: /\.less$/,
      loaders: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      }, {
        loader: 'less-loader'
      }]
    },{
      test: /\.scss$/,
      loaders: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    },{
      test: /\.(png|jpeg|jpg|gif)$/,
      loader: 'url-loader',
      options: {
        limit: 8192,
        name: 'imgs/[hash:7].[ext]'
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env.VERSION': `${pkg.version}`
    }),
    new vueLoaderPlugin()
  ]
}