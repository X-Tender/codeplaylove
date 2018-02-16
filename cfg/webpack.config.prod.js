const webpack = require('webpack');
const path = require('path');

const webpackSettings = require('./webpack.settings.js');

const { entry, rules } = webpackSettings;

const plugins = [
	new webpack.optimize.OccurrenceOrderPlugin(),

	new webpack.NoEmitOnErrorsPlugin(),

	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('production'),
		},
	}),

	new webpack.optimize.UglifyJsPlugin({
		minimize: true,
		compress: {
			warnings: false,
			drop_console: true,
			screw_ie8: true,
			pure_getters: true,
			unsafe: true,
			unsafe_comps: true,
		},
		output: {
			comments: false,
		},
		mangle: true,
		exclude: [/\.min\.js$/gi],
	}),
];

module.exports = {
	devtool: 'source-map',
	context: path.join(__dirname, '..', 'src', 'jsx'),

	resolve: {
		extensions: ['.jsx', '.js'],
		modules: [path.join(__dirname, '..', 'src', 'jsx'), 'node_modules'],
	},

	entry: { bundle: entry.bundle.splice(1) },

	output: {
		path: path.join(__dirname, '..', 'public', 'assets', 'js'),
		publicPath: '/assets/js/',
		filename: '[name].js',
	},

	plugins,

	module: {
		rules,
	},
};
