const webpack = require('webpack');
const path = require('path');

const SRC = path.resolve(__dirname, 'src');
const DIST = path.resolve(__dirname, 'dist');

const config = {
	entry: {
		app: `${SRC}/index.js`,
	},

	devtool: 'source-map',

	resolve: {
		root: SRC
	},

	output: {
		path: DIST,
		publicPath: "/static/",
		filename: 'bundle.[name].js',
	},

	devServer: {
		port: 8080,
		inline: true,
		historyApiFallback: true,
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',

				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.s?css$/,
				loaders: [
					'style',
					'css?modules&importLoaders=1&localIdentName=[local]_[emoji:2]_[hash:base64:5]!sass!postcss-loader'
				]
			}
		]
	}
}

module.exports = config;
