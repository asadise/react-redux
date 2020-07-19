var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                include: __dirname + '/src',
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]

};