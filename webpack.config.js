const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        filename: '[name].bundle.min.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [
            '...',
            new TerserPlugin({
                test: /\.js$/i,
                terserOptions: {
                    mangle: true,
                }
            }),
            new CssMinimizerPlugin(),
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false,
                    },
                }, 
                'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Schedule Now: A To-Do List'
        }),
        new MiniCssExtractPlugin(),
    ]
}