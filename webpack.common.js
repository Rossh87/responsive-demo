const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		index: './src/index.js'
	},

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'responsive demo',
			template: path.resolve(__dirname, 'src', 'views', 'index.html')
		}),

		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),

		new CleanWebpackPlugin(['dist'])
	],

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
}