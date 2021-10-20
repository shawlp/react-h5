const webpack = require('webpack')
const { merge } = require('webpack-merge')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const chalk = require('chalk')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const portfinder = require('portfinder')
const base = require('./webpack.base')
const paths = require('./paths')
const config = require('../config')

const smp = new SpeedMeasurePlugin()

const { proxyTable, port, host, open } = config.dev

portfinder.basePort = port

const webpackDevConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    contentBase: paths.dist,
    inline: true,
    port,
    proxy: proxyTable,
    host,
    open,
    stats: 'errors-only'
  },
  target: 'web',
  cache: {
    type: 'memory'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ProgressBarPlugin({
      format: `:msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`
    }),
    new ESLintPlugin({
      files: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.jsx', 'src/**/*.tsx'],
      failOnWarning: true,
      failOnError: true,
      threads: true
    }),
  ]
}

const mergeDevConfig = async () => {
  try {
    // 端口被占用时候返回一个新的端口(往上叠加)
    const port = await portfinder.getPortPromise()
    webpackDevConfig.devServer.port = port
    webpackDevConfig.plugins = [
      ...webpackDevConfig.plugins,     
      new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${host}:${port}`]
        }
      })
    ]
    return smp.wrap(merge(base, webpackDevConfig))
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = mergeDevConfig
