import HTTP from 'Utils/HTTP';

const GET_FEEDS = 'feeds/GET_FEEDS';

const initialState = {
	loaded: false,
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
				loaded: true,
				...payload.feeds,
				data: payload.posts,
			};

		default:
			return state;
	}
};

export const getFeeds = () => dispatch => {
	HTTP.get('api/getFeedsData').then(response => {
		dispatch({
			type: GET_FEEDS,
			payload: response.data.data,
		});
	});
};
