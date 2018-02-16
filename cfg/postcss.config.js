const svgoSettings = require('./svgo.config.json');
const browsers = [
	'Edge >= 13',
	'Firefox ESR',
	'safari >= 10',
	'Chrome >= 60',
	'ChromeAndroid >= 60',
	'last 2 iOS versions',
];

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
		'postcss-assets': {},
		'postcss-flexbugs-fixes': {},
		'postcss-size': {},
		'postcss-inline-svg': {
			path: 'src/svg',
			encode: code => {
				return code
					.replace(/%/g, '%25')
					.replace(/</g, '%3C')
					.replace(/>/g, '%3E')
					.replace(/&/g, '%26')
					.replace(/#/g, '%23');
			},
			removeFill: true,
		},
		'postcss-will-change': {},
		'postcss-nested': {},
		'postcss-random': {},
		'postcss-calc': {
			warnWhenCannotResolve: false,
			mediaQueries: true,
		},
		'postcss-initial': {},
		'postcss-color-function': {},
		'postcss-input-style': {},
		'postcss-easings': {},
		'postcss-mesh': {},
		autoprefixer: {
			browsers,
		},
		'postcss-svgo': svgoSettings,
		cssnano:
			ctx.env === 'production'
				? {
						filterPlugins: false,
						safe: true,
						mergeRules: false,
						browsers,
						svgo: false,
						discardComments: {
							removeAll: true,
						},
					}
				: false,
	},
});

module.exports = settings;
