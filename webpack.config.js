let webpack = require("webpack");
let html = require('html-webpack-plugin');

module.exports = {
    entry: "./src/main.tsx",
    output: {
        path: "dist",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", "json"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.json$/, loader: "json-loader" }
        ],
        noParse: [
            /node_modules\/json-schema\/lib\/validate\.js/
        ]
    },
    plugins: [
        new html({ template: 'src/index.html' }),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }} ),
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") })
    ]
};