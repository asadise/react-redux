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
            }
        ],
    }
};