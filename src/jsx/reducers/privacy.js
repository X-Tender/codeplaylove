export const PRIVACY_GET = 'privacy/GET';

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
		case PRIVACY_GET:
			return {
				...state,
				loaded: true,
				head: payload.privacy.head,
				subhead: payload.privacy.subhead,
				header: payload.privacy.header,
				caption: payload.privacy.caption,
				copy: payload.privacy.copy,
			};

		default:
			return state;
	}
};

export const getPrivacy = () => dispatch =>
	fetch('api/getPrivacy')
		.then(response => response.json())
		.then(payload => dispatch({ type: PRIVACY_GET, payload: payload.data }));
