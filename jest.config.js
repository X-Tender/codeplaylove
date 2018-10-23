module.exports = {
	collectCoverageFrom: ['<rootDir>/src/jsx/**/*.{js,jsx}'],
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
};
