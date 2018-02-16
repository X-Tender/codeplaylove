const initialState = [
	{ name: 'MacBook Pro 15“' },
	{ name: 'Logitech MX Master' },
	{ name: 'Sony XPERIA XZ', link: '//sonymobile.com/us/products/phones/xperia-xz' },
	{ name: 'Logitech PC310' },
	{ name: 'Joby GorillaPod', link: '//joby.com/gorillapod-tripods/gorillapod-original' },
	{ name: 'Canon Powershot G12' },
	{ name: 'Fidget Cube', link: '//fidgetcube.com' },
];

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		default:
			return state;
	}
};
