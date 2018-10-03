import { ABOUT_GET } from './about';

const initialState = {
	loaded: false,
	toolset: {},
};

export default (state = initialState, action) => {
	const { type, payload: { toolset } = {} } = action;

	switch (type) {
		case ABOUT_GET:
			return {
				...state,
				...{ toolset },
				loaded: true,
			};

		default:
			return state;
	}
};
