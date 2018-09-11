import HTTP from 'Utils/HTTP';

const CARDS_GET = 'cards/GET';

const initialState = {
	data: [],
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case CARDS_GET:
			return {
				...state,
				...payload,
			};

		default:
			return state;
	}
};

export const getCards = () => dispatch => {
	HTTP.get('api/getCards').then(response => {
		dispatch({
			type: CARDS_GET,
			payload: response.data,
		});
	});
};
