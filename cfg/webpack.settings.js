'use strict';
const fs = require('fs');

const settings = {
	devHost: 'http://www.cpl.de',
	devPath: '',
	entry: {
		bundle: ['react-hot-loader/patch', 'babel-polyfill', './Index.jsx'],
	},
	rules: [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			use: [
				{
					loader: 'babel-loader',
				},
			],
		},
		{
			test: /\.jsx$/,
			enforce: 'pre',
			loader: 'eslint-loader',
			exclude: /node_modules/,
			options: {
				quiet: true,
			},
		},
	],
};

if (fs.existsSync('cfg/webpack.vars.local.js')) {
	const webpackConfigLocal = require('./webpack.vars.local.js');
	settings.devHost = webpackConfigLocal.devHost;
	settings.devPath = webpackConfigLocal.devPath;
}

module.exports = settings;
