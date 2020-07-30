const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // compile all js and jsx files
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/, // compile all js and jsx files
                exclude: /node_modules/,
                loader: 'style-loader!css-loader',
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/routes': {
              target: 'http://localhost:8000',
              secure: false,
              changeOrigin: true
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}