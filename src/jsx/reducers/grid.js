import HTTP from 'Utils/HTTP';

const UPDATE_POSTS = 'grid/UPDATE_POSTS';

const initialState = {
	data: [],
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case UPDATE_POSTS:
			return {
				...state,
				data: payload,
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
