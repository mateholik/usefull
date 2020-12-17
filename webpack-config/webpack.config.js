const webpack = require('webpack');
const path = require(`path`);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: `./assets/js/main.js`,
    output: {
        path: path.resolve(__dirname, `dist`),
        filename: `bundle.js`
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: `babel-loader`,
                    options: {
                        presets: [`@babel/preset-env`]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: `css-loader`,
                    },
                    {
                        loader: `postcss-loader`
                    },
                    {
                        loader: `sass-loader`,
                        options: {
                            implementation: require(`sass`)
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: `css-loader`,
                    },
                    {
                        loader: `postcss-loader`
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'images',
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        }),
        new BrowserSyncPlugin({
            proxy: 'http://localhost:8888/adomas'
        })
    ],
    mode: `development`
};