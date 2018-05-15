import { LOCATION_CHANGE } from 'react-router-redux/reducer';

const TOGGLE_MENU = 'menu/TOGGLE_MENU';

const initialState = {
	open: false,
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case TOGGLE_MENU:
			return { ...state, open: !state.open };
		case LOCATION_CHANGE: {
			window.scrollTo(0, 0);
			return { ...state, open: false };
		}
		default:
			return state;
	}
};

export const toggleMenu = () => ({
	type: TOGGLE_MENU,
});
