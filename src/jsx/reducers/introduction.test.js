import introduction, { getIntroduction, INTRODUCTION_GET } from './introduction';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ introduction: {} });

const mockResponse = {
	error: 0,
	message: 'SUCCESS',
	data: {
		head: 'My name is Paul',
		subhead: 'Hello',
		punchline:
			'<p>I\'m a 36 year old Full-Stack Web-Developer from Hannover &ndash; Germany.<br />I currently work at <a title="slim Interactive" href="https://weareslim.de" target="_blank" rel="noopener noreferrer">slim brand Interactive</a> where we develop websites and interactive experiences. In my free time I make small games, that\'s where my coding roots are settled.</p>',
		copy:
			"<p>This is my portfolio page where I'd like to show you some of my work.<br />Also it's a never ending sandbox for me to test out new stuff like currently react, redux, css grid and other technologies in a 'production-like' environment.</p>",
		image: 'uploads/00000000001.jpg',
	},
};

fetchMock.get('api/getIntroduction', mockResponse);

describe('introduction action', () => {
	it('creates an async action to fetch the introduction data', () => {
		const expectedActions = [{ payload: mockResponse.data, type: INTRODUCTION_GET }];

		return store.dispatch(getIntroduction()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});

describe('introduction reducer', () => {
	const reducerResult = {
		...mockResponse.data,
		loaded: true,
	};

	it('fetches and sets the introduction data', () => {
		expect(introduction({}, { type: INTRODUCTION_GET, payload: mockResponse.data })).toEqual(
			reducerResult
		);
	});
});
