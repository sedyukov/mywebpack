const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const isDev = process.env.NODE_ENV === "development"

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if(!isDev) {
        config.minimizer = [
            '...',
            new CssMinimizerPlugin()
        ]
    }
    return config
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './analytics.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                    {
                        from: path.resolve(__dirname, 'src/favicon.ico'),
                        to: path.resolve(__dirname, 'dist')
                    }
                ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ]
    ,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
            },
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            // {
            //     test: /\.(png|jpg|svg|gif)$/,
            //     use: ['file-loader']
            // },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource'
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            }
        ]
    }
}