const initialState = [
	{ name: 'Codename: Godon',
	slug: 'codename-gordon',
	cover: 'assets/img/games/codenameGordon/cg1.jpg',
	images: ['assets/img/games/codenameGordon/cg1.jpg',
	'assets/img/games/codenameGordon/cg2.jpg',
	'assets/img/games/codenameGordon/cg3.jpg',
	'assets/img/games/codenameGordon/cg4.jpg',
	'assets/img/games/codenameGordon/cg5.jpg',
	'assets/img/games/codenameGordon/cg6.jpg',
	'assets/img/games/codenameGordon/cg7.jpg',
	'assets/img/games/codenameGordon/cg8.jpg',
],
'videos':[
	'https://youtu.be/yG9TC-6nODs'
],
	'text': },
];

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		default:
			return state;
	}
};
