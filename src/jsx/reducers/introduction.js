import HTTP from 'Utils/HTTP';

const INTRODUCTION_GET = 'introduction/GET';

const initialState = {
	copy: null,
	head: '',
	image: null,
	punchline: null,
	subhead: '',
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case INTRODUCTION_GET:
			return {
				...state,
				...payload,
			};

		default:
			return state;
	}
};

export const getIntroduction = () => dispatch => {
	HTTP.get('api/getIntroduction').then(response => {
		dispatch({
			type: INTRODUCTION_GET,
			payload: response.data.data,
		});
	});
};
