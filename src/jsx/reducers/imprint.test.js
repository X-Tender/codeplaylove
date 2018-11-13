import imprint, { getImprint } from './imprint';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { IMPRINT_GET } from './imprint';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ games: {} });

const mockResponse = {
	error: 0,
	message: 'SUCCESS',
	imprint: {
		head: 'Imprint',
		subhead: 'In case of groopies',
		copy:
			'<p>Paul Kamma</p>\n<p><a href="mailto:contact@codeplaylove.de">contact@codeplaylove.de</a></p>',
		caption: 'Photo by Adria Berrocal Forcada on Unsplash',
		header: 'uploads/00000000040.jpg',
	},
	credits: {
		head: 'Thank you',
		subhead: 'credits',
		copy:
			'<p>Icons on startpage designed by <a title="eucalyp @ Flatcion.com" href="https://www.flaticon.com/authors/eucalyp" target="_blank" rel="noopener noreferrer">eucalyp</a> from Flaticon.</p>',
	},
};

fetchMock.get('api/getImprint', mockResponse);

describe('imprint action', () => {
	it('creates an async action to fetch the imprint data', () => {
		const expectedActions = [{ payload: mockResponse, type: IMPRINT_GET }];

		return store.dispatch(getImprint()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});

describe('imprint reducer', () => {
	const reducerResult = {
		...mockResponse.imprint,
		loaded: true,
	};

	it('fetches and sets the about data', () => {
		expect(imprint({}, { type: IMPRINT_GET, payload: mockResponse })).toEqual(reducerResult);
	});
});
