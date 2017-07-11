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
                    options: { presets: ['react', 'es2015', 'stage-2'] }
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
        publicPath: '/',
        historyApiFallback: true,

        host: 'localhost',
        port: 3000,

        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                secure: false
            }
        }
    }
};