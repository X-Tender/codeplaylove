const GET_FEEDS = 'feeds/GET_FEEDS';

const initialState = {
	isLoaded: false,
	data: [],
	title: '',
	header: '',
	caption: '',
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_FEEDS:
			return {
				...state,
				isLoaded: true,
				...payload.feeds,
				data: payload.posts,
			};

		default:
			return state;
	}
};

export const getFeeds = () => dispatch =>
	fetch('api/getFeedsData')
		.then(response => response.json())
		.then(payload => dispatch({ type: GET_FEEDS, payload: payload.data }));
