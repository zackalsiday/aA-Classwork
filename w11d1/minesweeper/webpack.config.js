const path = require('path');

module.exports = {
    context: __dirname,
    entry: './react_minesweeper.jsx',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};