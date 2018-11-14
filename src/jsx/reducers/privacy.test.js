import privacy, { getPrivacy, PRIVACY_GET } from './privacy';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ privacy: {} });

const mockResponse = {
	error: 0,
	message: 'SUCCESS',
	privacy: {
		head: "Just in case you're aware",
		subhead: 'Privacy policy',
		copy: '<p>Big Brother is watching you</p>',
		caption: 'Photo by Markus Spiske on Unsplash',
		header: 'uploads/00000000043.jpg',
	},
};

fetchMock.get('api/getPrivacy', mockResponse);

describe('privacy action', () => {
	it('creates an async action to fetch the privacy data', () => {
		const expectedActions = [{ payload: mockResponse, type: PRIVACY_GET }];

		return store.dispatch(getPrivacy()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});

describe('privacy reducer', () => {
	const reducerResult = {
		...mockResponse.privacy,
		loaded: true,
	};

	it('fetches and sets the about data', () => {
		expect(privacy({}, { type: PRIVACY_GET, payload: mockResponse })).toEqual(reducerResult);
	});
});
