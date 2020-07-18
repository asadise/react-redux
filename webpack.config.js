const path = require('path');

module.exports = {
    entry: './src',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
};