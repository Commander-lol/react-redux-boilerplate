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
		inline: true,
		port: 8080
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
					'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!sass!postcss-loader'
				]
			}
		]
	}
}

module.exports = config;
