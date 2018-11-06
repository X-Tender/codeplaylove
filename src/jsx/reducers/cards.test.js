import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import cards, { getCards, CARDS_GET } from './cards';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ cards: {} });
const mockResponse = {
	data: [
		{
			id: 1,
			sort: 0,
			title: 'Code',
			copy: '<p>CODECODECODE</p>',
			style: 'code',
		},
		{
			id: 2,
			sort: 1,
			title: 'Play',
			copy: '<p>PLAYPLAYPLAY</p>',
			style: 'play',
		},
		{
			id: 3,
			sort: 2,
			title: 'Love',
			copy: '<p>LOVELOVELOVE</p>',
			style: 'love',
		},
	],
};

fetchMock.get('api/getCards', mockResponse);

describe('cards action', () => {
	it('creates an async action to fetch the cards data', () => {
		const expectedActions = [{ payload: { data: mockResponse.data }, type: CARDS_GET }];

		return store.dispatch(getCards()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});

describe('cards reducer', () => {
	const payload = {
		error: 0,
		message: 'SUCCESS',
		data: [
			{
				id: 1,
				sort: 0,
				title: 'Code',
				copy: '<p>CODECODECODE</p>',
				style: 'code',
			},
			{
				id: 2,
				sort: 1,
				title: 'Play',
				copy: '<p>PLAYPLAYPLAY</p>',
				style: 'play',
			},
			{
				id: 3,
				sort: 2,
				title: 'Love',
				copy: '<p>LOVELOVELOVE</p>',
				style: 'love',
			},
		],
	};

	const reducerResult = {
		data: payload.data,
		loaded: true,
	};

	it('fetches and sets the about data', () => {
		expect(cards({}, { type: CARDS_GET, payload })).toEqual(reducerResult);
	});
});
