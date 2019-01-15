const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = env => {
	const devMode = env.NODE_ENV !== 'production';

	return merge(common(env), {
		mode: 'production',

		// Explicitly setting optimization.minimizer to use OCAP also overwrites Webpack's default
		// JS optimization, so we explicitly set UJP (note: currently using pre-release UJP harmony
		// version for ES6 compatibility.)
		optimization: {
			minimizer: [
				new UglifyJsPlugin(),

				new OptimizeCSSAssetsPlugin()
			]
		},

		module: {
			rules: [{
				test: /\.(scss||sass)$/,

				//MCEP extracts CSS into separate files for prod build 
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}]
		},

		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].[hash].css'
			})
		]
	});
}
