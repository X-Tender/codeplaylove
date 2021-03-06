module.exports = {
	collectCoverageFrom: [
		'<rootDir>/src/jsx/**/*.{js,jsx}',
		'!<rootDir>/src/jsx/reducers/index.js',
		'!<rootDir>/src/jsx/index.jsx',
		'!<rootDir>/src/jsx/App/store.js',
	],
	setupFiles: ['<rootDir>/cfg/jest/shim.js', '<rootDir>/cfg/jest/setup.js'],
	testMatch: ['<rootDir>/src/jsx/**/?(*.)(spec|test).(js|jsx)'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(jsx|js)$': 'babel-jest',
		'^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/cfg/jest/fileTransform.js',
	},
	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
	watchPathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/.git/',
		'<rootDir>/app/',
		'<rootDir>/cfg/',
		'<rootDir>/public/',
		'<rootDir>/resources/',
		'<rootDir>/src/scss',
	],
	moduleDirectories: ['node_modules', '<rootDir>/src/jsx/'],
	moduleNameMapper: {},
	moduleFileExtensions: ['js', 'jsx'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
};
