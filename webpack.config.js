var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var data = require('./data');

module.exports = {
    mode: 'development',
    entry: './src/router',
    output: {
        globalObject: "this",
        path: __dirname + '/build',
        filename: 'bundle.js',
        libraryTarget: 'umd' // this is super important
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    // use: 'css-loader?modules&importLoaders=true',
                    use: {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: true,
                            modules: {
                                localIdentName: '[path][name]__[local]___[hash:base64:5]'
                            }
                        }
                    }

                }),
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new StaticSiteGeneratorPlugin('main', data.routes),
    ]
};