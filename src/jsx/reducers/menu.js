import { LOCATION_CHANGE } from 'react-router-redux/reducer';

const TOGGLE_MENU = 'menu/TOGGLE_MENU';

const initialState = {
	isOpen: false,
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case TOGGLE_MENU:
			return { ...state, isOpen: !state.isOpen };
		case LOCATION_CHANGE: {
			window.scrollTo(0, 0);
			return { ...state, isOpen: false };
		}
		default:
			return state;
	}
};

export const toggleMenu = () => ({
	type: TOGGLE_MENU,
});
