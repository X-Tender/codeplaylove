import { IMPRINT_GET } from './imprint';

const initialState = {
	loaded: false,
	head: '',
	subhead: '',
	copy: '',
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case IMPRINT_GET:
			return {
				...state,
				loaded: true,
				head: payload.credits.head,
				subhead: payload.credits.subhead,
				copy: payload.credits.copy,
			};

		default:
			return state;
	}
};
