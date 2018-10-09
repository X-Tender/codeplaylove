import HTTP from 'Utils/HTTP';

const UPDATE_POSTS = 'grid/UPDATE_POSTS';

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
		case UPDATE_POSTS:
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

export const getPosts = () => dispatch => {
	HTTP.get('api/getData').then(response => {
		dispatch({
			type: UPDATE_POSTS,
			payload: response.data.data,
		});
	});
};
