const path = require('path');
module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.tx', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(_dirname, 'dist'),
    },
};