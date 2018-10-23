const svgoSettings = require('./svgo.config.json');
const fs = require('fs');
const babelrc = JSON.parse(fs.readFileSync('.babelrc', 'utf8'));
const browsers = babelrc.presets[0][1].targets.browsers;

const settings = ctx => ({
	parser: 'postcss-scss',
	map: ctx.options.map,
	plugins: {
		'postcss-import': {},
		'postcss-at-rules-variables': {},
		'postcss-nested-ancestors': {},
		'postcss-custom-properties': {},
		'postcss-custom-selectors': {},
		'postcss-selector-not': {},
		'postcss-for': {},
		'postcss-each': {},
		'postcss-sassy-mixins': {},
		'postcss-conditionals': {},
		'postcss-advanced-variables': {},
		'postcss-quantity-queries': {},
		'postcss-hexrgba': {},
		'postcss-object-fit-images': {},
		'postcss-pxtorem': {
			rootValue: 16,
			selectorBlackList: ['body'],
		},
		'postcss-assets': {
			relative: 'css/',
			loadPaths: ['img/', 'img/**/*', 'fonts/', 'fonts/**/*'],
			basePath: 'public/assets/',
			cachebuster: false,
		},
		'postcss-flexbugs-fixes': {},
		'postcss-size': {},
		'postcss-inline-svg': {
			path: 'src/svg',
			encode: code =>
				code
					.replace(/%/g, '%25')
					.replace(/</g, '%3C')
					.replace(/>/g, '%3E')
					.replace(/&/g, '%26')
					.replace(/#/g, '%23'),
			removeFill: true,
		},
		'postcss-will-change': {},
		'postcss-nested': {},
		'postcss-calc': {
			warnWhenCannotResolve: false,
			mediaQueries: true,
		},
		'postcss-initial': {},
		'postcss-input-style': {},
		'postcss-easings': {},
		autoprefixer: {
			browsers,
		},
		'postcss-svgo': svgoSettings,
		cssnano:
			ctx.env === 'production' ?
				{
						filterPlugins: false,
						safe: true,
						mergeRules: false,
						browsers,
						svgo: false,
						discardComments: {
							removeAll: true,
						},
				  } :
				false,
	},
});

module.exports = settings;
