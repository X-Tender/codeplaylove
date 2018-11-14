import menu, { toggleMenu, TOGGLE_MENU } from './menu';
import { LOCATION_CHANGE } from 'react-router-redux/reducer';

global.scrollTo = () => true;

describe('menuReducer', () => {
	it('is closed at startup', () => {
		expect(menu(undefined, { type: undefined })).toEqual({ isOpen: false });
	});

	it('toggle state', () => {
		expect(menu(undefined, { type: TOGGLE_MENU })).toEqual({ isOpen: true });
	});

	it('close on location change', () => {
		expect(menu(undefined, { type: LOCATION_CHANGE })).toEqual({ isOpen: false });
	});
});

describe('toggleMenu action', () => {
	it('creates an action to toggle menu', () => {
		const expectedAction = { type: TOGGLE_MENU };

		expect(toggleMenu()).toEqual(expectedAction);
	});
});
