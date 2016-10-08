var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    watch: true,

    // devtool: 'eval-source-map',
    // devtool: 'inline-source-map',  //<== chrome debugger error;

    entry: {
        // style: './src/css/machine.css',
        bundle: ['./src/js/entry.js']
    },

    output: {
        path: __dirname + "/dist/",
        filename: "[name].js?[hash]",
        chunkFilename: "[name].js?[hash]"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: /(node_modules|bower_components)/,
                loader: "file-loader"
            }
        ]
    },

    resolve: {
        root: path.resolve(__dirname),
        alias: {
            jquery: 'src/vendor/jquery.js'
        }
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery : 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("[name].css"),

        new webpack.HotModuleReplacementPlugin()

    ],

    devServer: {
        hot: true,
        inline: true,
        contentBase: "./",
        compress: true
    }
};
