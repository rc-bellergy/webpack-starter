const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [ 'style-loader','css-loader' ],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [ 'style-loader','css-loader','sass-loader' ],
          },
        ],
      },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
