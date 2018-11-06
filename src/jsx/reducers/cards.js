export const CARDS_GET = 'cards/GET';

const initialState = {
	loaded: false,
	data: [],
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case CARDS_GET:
			return {
				...state,
				data: payload.data,
				loaded: true,
			};

		default:
			return state;
	}
};

export const getCards = () => dispatch =>
	fetch('api/getCards')
		.then(response => response.json())
		.then(payload => dispatch({ type: CARDS_GET, payload }));
