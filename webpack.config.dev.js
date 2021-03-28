const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx"],
        //Aliases para los imports , mejora el codigo, se ve mas limpio
        alias: {
            "@components": path.resolve(__dirname, "src/components/"),
            "@partials": path.resolve(__dirname, "src/partials/"),
            "@layout": path.resolve(__dirname, "src/layout/"),
            "@containers": path.resolve(__dirname, "src/containers/"),
            "@tokens": path.resolve(__dirname, "src/tokens/"),
            "@styles": path.resolve(__dirname, "src/tokens/"),
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
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
        historyApiFallback: true,
        open: true
    }
}