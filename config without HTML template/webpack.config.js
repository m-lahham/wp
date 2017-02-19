var path = require('path');
var webpack = require('webpack');

var PRODUCTION = process.env.NODE_ENV == 'production';
var DEVELOPMENT = process.env.NODE_ENV == 'development';
var ExtractTextPlugin = require('extract-text-webpack-plugin');
console.log(`process.env.NODE_ENV : [${process.env.NODE_ENV}]`);
console.log("PRODUCTION : " + PRODUCTION);



var entry = PRODUCTION 
    ? ["./src/index.js"]
    :  [
        "./src/index.js",
        "webpack/hot/dev-server", // this will inject code to the webpage to activate HMR
       "webpack-dev-server/client?http://localhost:8080"  // this will inject code to the webpage to activate HMR
    ];

var plugins = PRODUCTION
    ? [
            new webpack.optimize.UglifyJsPlugin(),
            new ExtractTextPlugin('style.css')
        ]
    : [new webpack.HotModuleReplacementPlugin()];

plugins.push( // remarkable way to do when item is shared between for all cases
    new webpack.DefinePlugin({
        DEVELOPMENT : JSON.stringify(DEVELOPMENT), // injecting DEVELOPMENT as global variable into bundle
        PRODUCTION : JSON.stringify(PRODUCTION) // injecting PRODUCTION as global variable into bundle

    })
);

var cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[local]';
var cssLoader = PRODUCTION 
                ? ExtractTextPlugin.extract({loader : 'css-loader?localIdentName=' + cssIdentifier})
                : ['style-loader','css-loader?localIdentName=' + cssIdentifier];
module.exports = {
    devtool : 'source-map',
    entry : entry,
    plugins : plugins,
    output : {
        filename : "bundle.js",
        publicPath: '/dist/', 
        path : path.join(__dirname, "/dist")
    },
    module: {
        loaders: [ 
            {
                test: /\.js$/,
                loaders:['babel-loader'], 
                exclude: '/node_modules/'
            },
            {
                test: /\.(gif|jpg|png)$/,
                loaders:['url-loader?limit=10000&name=images/[hash:12].[ext]'], 
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                loaders: cssLoader, // localIdentName for controlling the class name 
                exclude: '/node_modules/'
            }
        ]
    },
    resolve : {
            extensions : ['.js','.jpg','.css']
        }

}