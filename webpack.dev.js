const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
	mode: 'development',

	devtool: 'inline-source-map',

	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		compress: true,
		port: 9000
	},

	module: {
		rules: [{
			test: /\.(scss||sass)$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}]
	}
});