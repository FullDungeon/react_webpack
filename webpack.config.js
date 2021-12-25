const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index-bundle.js",
        publicPath: ""
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        alias: {
            "@vars": path.resolve(__dirname, 'src/styles/vars.scss'),

            "@styles": path.resolve(__dirname, 'src/styles/'),
            "@public": path.resolve(__dirname, 'public/'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            // SCSS c CSS-модулями
            {
                test: /\.module\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                auto: true,
                                localIdentName: "[local]__[hash:base64:5]"
                            }
                        }
                    },
                    "sass-loader",
                ]
            },
            // SCSS без CSS-модулей
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}
