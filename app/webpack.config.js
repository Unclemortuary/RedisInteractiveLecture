const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/main/main.js",
    output: {
        path: `${__dirname}/dist`,
        filename: "[name].js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Tetflix",
            filename: "../tetflix.html",
            template: "./src/main/index.html"
        }),
        new CleanWebpackPlugin()
    ]
};