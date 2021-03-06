'use strict';
const fs = require('fs');

const entryWithHMR = entrys => {
	if (process.env.NODE_ENV === 'production') return entrys;
	return [entrys[0], 'react-hot-loader/patch'].concat(entrys.slice(1));
};

const settings = {
	devHost: 'http://www.codeplaylove.io',
	devPath: '',
	entry: {
		bundle: entryWithHMR(['@babel/polyfill', './index.jsx']),
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
