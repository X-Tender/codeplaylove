export const SOCIAL_LINKS_GET = 'socialLinks/GET';

const initialState = {
	loaded: false,
	data: [],
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SOCIAL_LINKS_GET:
			return {
				loaded: true,
				data: [...payload.data],
			};

		default:
			return state;
	}
};

export const getSocialLinks = () => dispatch =>
	fetch('api/getSocialLinks')
		.then(response => response.json())
		.then(payload => dispatch({ type: SOCIAL_LINKS_GET, payload }));
