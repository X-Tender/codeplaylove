import { ABOUT_GET } from './about';

const initialState = {
	isLoaded: false,
	skillset: {},
};

export default (state = initialState, action) => {
	const { type, payload: { skillset } = {} } = action;

	switch (type) {
		case ABOUT_GET:
			return {
				...state,
				...{ skillset },
				isLoaded: true,
			};

		default:
			return state;
	}
};
