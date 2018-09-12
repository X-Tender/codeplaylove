import HTTP from 'Utils/HTTP';

const ABOUT_GET = 'about/GET';

const initialState = {
	loaded: false,
	detailedIntroduction: {},
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ABOUT_GET:
			return {
				...state,
				...{ detailedIntroduction: payload.detailedIntroduction },
				loaded: true,
			};

		default:
			return state;
	}
};

export const getAbout = () => dispatch => {
	HTTP.get('api/getAbout').then(response => {
		console.log(response);
		dispatch({
			type: ABOUT_GET,
			payload: response.data,
		});
	});
};
