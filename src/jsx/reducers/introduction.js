export const INTRODUCTION_GET = 'introduction/GET';

const initialState = {
	loaded: false,
	copy: '',
	head: '',
	image: '',
	punchline: '',
	subhead: '',
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case INTRODUCTION_GET:
			return {
				...state,
				...payload,
				loaded: true,
			};

		default:
			return state;
	}
};

export const getIntroduction = () => dispatch =>
	fetch('api/getIntroduction')
		.then(response => response.json())
		.then(payload => dispatch({ type: INTRODUCTION_GET, payload: payload.data }));
