const webpack = require('webpack');
const path = require('path');

const hotMiddlewareScript =
	'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false';

const webpackSettings = require('./webpack.settings');
const { entry, rules, devPath } = webpackSettings;

for (const key in entry) {
	entry[key].push(hotMiddlewareScript);
}

const plugins = [
	new webpack.optimize.OccurrenceOrderPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoEmitOnErrorsPlugin(),
];

module.exports = {
	devtool: 'eval-source-map',
	context: path.join(__dirname, '..', 'src', 'jsx'),

	resolve: {
		extensions: ['.jsx', '.js'],
		modules: [path.join(__dirname, '..', 'src', 'jsx'), 'node_modules'],
	},

	entry,

	output: {
		path: path.resolve(__dirname, '..', 'public', 'assets', 'js'),
		publicPath: `${devPath}/assets/js/`,
		filename: '[name].js',
	},

	plugins,

	module: {
		rules,
	},
};
