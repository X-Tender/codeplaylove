import HTTP from 'Utils/HTTP';

export const ABOUT_GET = 'about/GET';

const initialState = {
	loaded: false,
	title: '',
	header: '',
	caption: '',
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ABOUT_GET:
			return {
				...state,
				loaded: true,
				title: payload.about.title,
				header: payload.about.header,
				caption: payload.about.caption,
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
