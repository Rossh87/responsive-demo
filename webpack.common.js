const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = env => {
	const devMode = env.NODE_ENV !== 'production';
	

	return {
		entry: {
			index: './src/index.js'
		},

		output: {
			filename: devMode ?
				'[name].bundle.js'
				: '[name].[hash].bundle.js',

			path: path.resolve(__dirname, 'dist')
		},

		plugins: [
			new CleanWebpackPlugin(['dist']),

			new HtmlWebpackPlugin({
				title: 'Placeholder',
				template: path.resolve(__dirname, 'src/views/index.html')
			}),
		],

		module: {
		    rules: [{
		        test: /\.(png|jpe?g|gif)$/,
		        use: [
			        {
			          	loader: 'url-loader',

			          	options: {
			          		fallback: 'file-loader',

				            // 10kb limit to inline encoded images
				          	limit: 10 * 1024, 

				            // Options passed-through to file-loader on fallback:
				          	name: devMode ?
				            	'[name].ext'
				            	:'[name].[hash].ext',

				           	outputPath: 'images'
			          	}
			        },
		        ],
			}],
		},

		resolve: {
			alias: {
				Images: path.resolve(__dirname, 'src', 'public', 'images')
			}
		}
	}
}
