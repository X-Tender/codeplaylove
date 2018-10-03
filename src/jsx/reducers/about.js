import HTTP from 'Utils/HTTP';

export const ABOUT_GET = 'about/GET';

const initialState = {
	loaded: false,
};

export default (state = initialState, action) => {
	const { type } = action;

	switch (type) {
		case ABOUT_GET:
			return {
				...state,
				loaded: true,
			};

		default:
			return state;
	}
};

export const getAbout = () => dispatch => {
	HTTP.get('api/getAbout').then(response => {
		dispatch({
			type: ABOUT_GET,
			payload: response.data,
		});
	});
};
