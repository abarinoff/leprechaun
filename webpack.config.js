const path = require('path');

module.exports = {
    context: path.join(__dirname + '/src/front-end'),
    entry: './index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
        modules: [path.resolve(__dirname, 'src/front-end'), 'node_modules']
    },

    module: {
        rules: [
            {
                test: /\.js/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015'] }
                }
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    devtool: 'cheap-source-map',

    devServer: {
        contentBase: './src/front-end',
        publicPath: '/'
    }
};