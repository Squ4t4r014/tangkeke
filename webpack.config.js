const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyFilePlugin = require("copy-webpack-plugin")

const index = {
    mode: "production",
    entry: "./app/services/bundle.ts",
    output: {
        path: __dirname + "/dist/assets",
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: true,
                            sourceMap: false,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: false,
                        },
                    },
                ]
            },
            {
                test: /\.ts$/,
                loader: "ts-loader",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `style.css`
        }),
        new CopyFilePlugin({
            patterns: [
                {
                    from: `${__dirname}/app/resources/tangkeke.mp3`,
                    to: `${__dirname}/dist/assets`,
                    context: `${__dirname}`
                },
                {
                    from: `${__dirname}/app/resources/negative1.mp3`,
                    to: `${__dirname}/dist/assets`,
                    context: `${__dirname}`
                },
                {
                    from: `${__dirname}/app/resources/study.mp3`,
                    to: `${__dirname}/dist/assets`,
                    context: `${__dirname}`
                },
            ]
        }),
    ]
};

const negative = {
    mode: "production",
    entry: "./app/services/negative.ts",
    output: {
        path: __dirname + "/dist/assets",
        filename: "negative.js",
    },
    module: {
        rules: [
            
            {
                test: /\.ts$/,
                loader: "ts-loader",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
};

module.exports = [
    index, negative
];
