const initialState = [
	'HTML',
	'CSS',
	'Javascript',
	'PHP',
	'MySQL',
	'TYPO3',
	'Flash',
	'Unity3D',
	'React',
	'Teamwork',
];

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		default:
			return state;
	}
};
