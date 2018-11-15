import socialLinks, { getSocialLinks, SOCIAL_LINKS_GET } from './socialLinks';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ socialLinks: {} });

const mockResponse = {
	error: 0,
	message: 'SUCCESS',
	data: [
		{
			id: 1,
			name: 'GitHub',
			url: '//github.com/X-Tender',
			icon_name: 'github',
		},
		{
			id: 2,
			name: 'Twitter',
			url: '//twitter.com/xtender',
			icon_name: 'twitter',
		},
		{
			id: 3,
			name: 'Instagram',
			url: '//instagram.com/xtender',
			icon_name: 'instagram',
		},
		{
			id: 4,
			name: 'Facebook',
			url: '//facebook.com/paul.kamma',
			icon_name: 'facebook',
		},
		{
			id: 5,
			name: 'XING',
			url: '//xing.com/profile/Paul_Kamma',
			icon_name: 'xing',
		},
	],
};

fetchMock.get('api/getSocialLinks', mockResponse);

describe('social links action', () => {
	it('creates an async action to fetch the social links data', () => {
		const expectedActions = [{ payload: mockResponse, type: SOCIAL_LINKS_GET }];

		return store.dispatch(getSocialLinks()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});

describe('socialLinks reducer', () => {
	const reducerResult = {
		data: [...mockResponse.data],
		loaded: true,
	};

	it('fetches and sets the about data', () => {
		expect(socialLinks({}, { type: SOCIAL_LINKS_GET, payload: mockResponse })).toEqual(
			reducerResult
		);
	});
});
