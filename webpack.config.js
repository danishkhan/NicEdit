module.exports = {
    entry: "./src/main.ts",
    output: {
        filename: "main.js",
        path: __dirname + "/dist/",
        libraryTarget: 'var',
        library: 'NicEdit'
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        ]
    }
};