import HTTP from 'Utils/HTTP';

export const GAMES_GET = 'games/GET';

const initialState = {
	loaded: false,
	head: '',
	subhead: '',
	copy: '',
	header: '',
	caption: '',
	gameList: [],
};

export default (state = initialState, action) => {
	const { type, payload: { data = {} } = {} } = action;
	const { head, subhead, copy, gameitems: gameList, header, caption } = data;

	switch (type) {
		case GAMES_GET:
			return {
				...state,
				loaded: true,
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

export const getGames = () => dispatch => {
	HTTP.get('api/getGames').then(response => {
		dispatch({
			type: GAMES_GET,
			payload: response.data,
		});
	});
};
