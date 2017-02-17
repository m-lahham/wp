var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config');


var compiler = webpack(config);

var server = new WebpackDevServer(compiler,{

    hot : true,
    publicPath : config.output.publicPath,
    filename : config.output.filename,
    
    stats : {
        colors : true
    }
});

server.listen(8080,'localhost',function(){});