const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/index.ts'),
    output: {
        filename: 'bundle.js'
    },
    externals: ['axios'],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, '/src', 'node_modules/')],
        descriptionFiles: ['package.json'],
        extensions: [".tsx", ".ts", ".js"]
    },
}