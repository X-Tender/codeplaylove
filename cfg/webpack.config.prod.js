const webpack = require('webpack');
const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackSettings = require('./webpack.settings.js');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const { entry, rules } = webpackSettings;

const plugins = [
	new webpack.optimize.OccurrenceOrderPlugin(),

	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('production'),
		'process.env.BABEL_ENV': JSON.stringify('production'),
	}),

	new WebpackCleanupPlugin(),
];

module.exports = {
	mode: 'production',

	devtool: 'source-map',
	context: path.join(__dirname, '..', 'src', 'jsx'),

	resolve: {
		extensions: ['.jsx', '.js'],
		modules: [path.join(__dirname, '..', 'src', 'jsx'), 'node_modules'],
	},

	entry: { bundle: entry.bundle.splice(1) },

	performance: { hints: false },

	output: {
		path: path.join(__dirname, '..', 'public', 'assets', 'js'),
		publicPath: '/assets/js/',
		filename: '[name].js',
		chunkFilename: '[name].[chunkhash].js',
	},

	optimization: {
		minimize: true,
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					ecma: 5,
					warnings: false,
					mangle: true,
					keep_fnames: true,
					output: {
						comments: false,
					},
					compress: {
						dead_code: true,
						drop_console: true,
					},
				},
			}),
		],
	},

	plugins,

	module: {
		rules,
	},
};
