var path = require('path');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        "./src/main.ts"
        , "./assets/scss/styles.scss"
    ],
    output: {
        filename: "[name].js",
        path: __dirname + "/dist/",
        libraryTarget: 'var',
        library: 'NicEdit'
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
    },

    plugins: [
        new CopyWebpackPlugin([{
            from: root('assets')
        }])
    ],

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.(s?css|sass)$/, loader: 'style-loader!css-loader!sass-loader' },
        ]
    }
};
