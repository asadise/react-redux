var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
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
        new ExtractTextPlugin("styles.css")
    ]
};