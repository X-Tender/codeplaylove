const initialState = [
	{ name: 'Visual Studio Code', link: '//code.visualstudio.com' },
	{ name: 'Sequel Pro', link: '//sequelpro.com' },
	{ name: 'MAMP Pro', link: '//mamp.info/en' },
	{ name: 'Fenêtre', link: '//fenêt.re' },
	{ name: 'Spotify', link: '//spotify.com' },
	{ name: 'Chrome', link: '//chrome.com' },
	{ name: 'iTerm2', link: '//iterm2.com' },
];

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		default:
			return state;
	}
};
