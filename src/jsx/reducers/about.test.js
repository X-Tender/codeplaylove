import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import about, { getAbout, ABOUT_GET } from './about';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ about: {} });
const mockResponse = {
	about: {
		title: 'About',
		caption: null,
		header: 'image.jpg',
	},
};

fetchMock.get('api/getAbout', mockResponse);

describe('about action', () => {
	it('creates an async action to fetch the about data', () => {
		const expectedActions = [{ payload: { about: mockResponse.about }, type: ABOUT_GET }];

		return store.dispatch(getAbout()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});

describe('about reducer', () => {
	const payload = {
		error: 0,
		message: 'SUCCESS',
		about: { title: 'About', caption: null, header: 'image.jpg' },
	};

	const reducerResult = {
		...payload.about,
		loaded: true,
	};

	it('fetches and sets the about data', () => {
		expect(about({}, { type: ABOUT_GET, payload })).toEqual(reducerResult);
	});
});
