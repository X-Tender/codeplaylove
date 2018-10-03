import { ABOUT_GET } from './about';

const initialState = {
	loaded: false,
	head: '',
	subhead: '',
	copy: '',
};

export default (state = initialState, action) => {
	const { type, payload: { detailedIntroduction } = {} } = action;

	switch (type) {
		case ABOUT_GET:
			return {
				...state,
				...detailedIntroduction,
				loaded: true,
			};

		default:
			return state;
	}
};
