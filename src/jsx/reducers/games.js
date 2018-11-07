export const GAMES_GET = 'games/GET';

const initialState = {
	isLoaded: false,
	head: '',
	subhead: '',
	copy: '',
	header: '',
	caption: '',
	gameList: [],
};

export default (state = initialState, action) => {
	const { type, payload = {} } = action;
	const { head, subhead, copy, gameitems: gameList, header, caption } = payload;

	switch (type) {
		case GAMES_GET:
			return {
				...state,
				isLoaded: true,
				head,
				subhead,
				copy,
				header,
				caption,
				gameList,
			};

		default:
			return state;
	}
};

export const getGames = () => dispatch =>
	fetch('api/getGames')
		.then(response => response.json())
		.then(payload => dispatch({ type: GAMES_GET, payload: payload.data }));
