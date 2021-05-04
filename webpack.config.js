const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: "./src/index.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@components": path.resolve(__dirname, "src/components/"),
            "@partials": path.resolve(__dirname, "src/partials/"),
            "@layout": path.resolve(__dirname, "src/layout/"),
            "@containers": path.resolve(__dirname, "src/containers/"),
            "@tokens": path.resolve(__dirname, "src/tokens/"),
            "@styles": path.resolve(__dirname, "src/styles/"),
            "@reducers": path.resolve(__dirname, "src/reducers/"),
            "@types": path.resolve(__dirname, "src/types/"),
            "@actions": path.resolve(__dirname, "src/actions/"),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            inject: true
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "public", "assets"),
                    to: "assets"
                }
            ]
        }),
        new Dotenv()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
}