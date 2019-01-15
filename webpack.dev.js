const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');


module.exports = env => {
	const devMode = env.NODE_ENV !== 'production';

	return merge(common(env), {
		mode: 'development',

		devtool: 'inline-source-map',

		devServer: {
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


}

