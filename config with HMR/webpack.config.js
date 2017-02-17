var path = require('path');
var webpack = require('webpack');

module.exports = {
    
    entry : [
        "./src/index.js",
        "webpack/hot/dev-server", // this will inject code to the webpage to activate HMR
        "webpack-dev-server/client?http://localhost:8080"  // this will inject code to the webpage to activate HMR
    ],
    plugins : [
        new webpack.HotModuleReplacementPlugin()
    ],
    output : {
        filename : "bundle.js",
        publicPath: '/dist/', 
        path : path.join(__dirname, "/dist")
    }

}