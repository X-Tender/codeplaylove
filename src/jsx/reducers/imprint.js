import HTTP from 'Utils/HTTP';

export const IMPRINT_GET = 'imprint/GET';

const initialState = {
	loaded: false,
	head: '',
	subhead: '',
	header: '',
	caption: '',
	copy: '',
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case IMPRINT_GET:
			return {
				...state,
				loaded: true,
				head: payload.imprint.head,
				subhead: payload.imprint.subhead,
				header: payload.imprint.header,
				caption: payload.imprint.caption,
				copy: payload.imprint.copy,
			};

		default:
			return state;
	}
};

export const getImprint = () => dispatch => {
	HTTP.get('api/getImprint').then(response => {
		dispatch({
			type: IMPRINT_GET,
			payload: response.data,
		});
	});
};
