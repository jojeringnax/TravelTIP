module.exports = {
    mode: "development",
    entry: "./resources/js/app.js",
    output: {
        path: __dirname+'/static',
        filename: "[name].[chunkhash:8].js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/env",
                            "@babel/react"
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    node: {
        fs: 'empty'
    }
};