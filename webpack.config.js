module.exports = {
    entry: "./src/app/main.ts",
    output: {
        filename: "dist/bundle.js"
    },
    resolve: {
        extensions: ["webpack.js", ".ts", ".js", ".web.js"]
    },
    module: {
        loaders: [
            { test: /\.ts$/, loaders: "ts-loader"}
        ]
    }
};