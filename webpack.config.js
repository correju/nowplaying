var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var NODE_ENV = process.env.NODE_ENV || 'development'
var isProd = NODE_ENV === 'production'
var plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin('./css/[name].css')
]

if (isProd) {
  plugins = [
    ...plugins,
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    })
  ]
}
module.exports = {
    devtool: (isProd) ? false : 'inline-source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    /*resolve: {
        modulesDirectories: ['node_modules','src'],
        extensions: ['','.js','.less']
    },*/
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'file-loader?name=[name].[hash].[ext]'
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                   fallback: 'style-loader',
                   use: [
                       {loader: 'css-loader?sourceMap' },
                       {loader: 'less-loader?sourceMap' }
                   ]
                })
            }
        ]
    },
    plugins,
    devServer: {
        hot: true,
        inline: true,
        port: 8081,
        watchOptions: {
          poll: true
        },
        proxy: {
            '*': 'http://localhost:3001/'
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    }
}