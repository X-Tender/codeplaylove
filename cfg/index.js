'use strict';

const webpack = require('webpack');

const argv = require('yargs').argv;
let openOption = 'external';
if (argv.oo) {
	openOption = argv.oo;
}
if (argv.h) {
	openOption = false;
}

const browserSync = require('browser-sync');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.config');
const bundler = webpack(webpackConfig);

const webpackSettings = require('./webpack.settings');
const { devHost, devPath } = webpackSettings;

const crossOrginHeaderMiddlware = function crossOrginHeaderMiddlware(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	next();
};

const webpackDev = webpackDevMiddleware(bundler, {
	publicPath: webpackConfig.output.publicPath,
	stats: {
		colors: true,
	},
	quiet: false,
});

const webpackHot = webpackHotMiddleware(bundler);

browserSync({
	open: openOption,
	logLevel: 'info',
	ghostMode: {
		clicks: false,
		forms: false,
		scroll: false,
	},
	proxy: `${devHost}${devPath}`,
	host: 'localhost',
	middleware: [crossOrginHeaderMiddlware, webpackDev, webpackHot],
	files: ['public/assets/css/*.css'],
});
