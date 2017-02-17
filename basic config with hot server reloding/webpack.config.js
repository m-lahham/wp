var path = require('path');
module.exports = {
    
    entry : "./src/index.js",
    output : {
        filename : "bundle.js",
        publicPath: '/dist/', 
        path : path.join(__dirname, "/dist")
    }

}