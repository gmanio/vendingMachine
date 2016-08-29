var path = require('path');
var webpack = require('webpack');

module.exports = {
    watch: false,

    devtool: 'source-map',

    entry: {
        bundle: ['./src/css/machine.css', './src/js/entry.js']
    },

    output: {
        path: __dirname + "/dist",
        publicPath: '/dist/',
        filename: "[name].js?[hash]",
        chunkFilename: "[name].js?[hash]"
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            exclude: /(node_modules|bower_components)/,
            loader: "file-loader"
        }]
    },

    resolve: {
        root: path.resolve(__dirname),
        alias: {
            jquery: 'src/js/vendor/jquery-3.0.0.min.js'
        }
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                'NODE_ENV': JSON.stringify('production'),
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],

    devServer: {
        hot: true,
        inline: true,
        contentBase: "./",
        compress: true
    }
};
