import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import games, { getGames, GAMES_GET } from './games';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ games: {} });

const mockResponse = {
	data: {
		id: 1,
		head: 'My game-dev playground',
		subhead: 'Games',
		copy: '<p>Lorem ipsum</p>',
		header: 'uploads/00000000039.jpg',
		caption: 'Photo by Carl Raw on Unsplash',
		gameitems: [
			{
				id: 1,
				sort: null,
				name: 'Codename: Gordon',
				slug: 'codename-gordon',
				cover: 'uploads/00000000005.jpg',
				youtube: 'yG9TC-6nODs',
				header: 'uploads/00000000006.jpg',
				copy:
					'<p>I created the game Back in 2004 with my Friend <a href="http://warby.de" target="_blank" rel="noopener noreferrer">Soenke C. &bdquo;warby&ldquo; Seidel</a> at our former employer &bdquo;NuClearVision&ldquo; in Braunschweig - Germany.</p>\n<p>The whole story behind the game still sounds like a fairytale for me. S&ouml;nke and I decided to make a game together in our spare time and just because it was the time where the first screenshots of HalfLife&sup2; were released we decided to make a HalfLife insipred game. The plan was to finish our &bdquo;Demake&ldquo; before the original game gets released.</p>\n<p>After the game gone beta we decided to contact Valve, just in case to check if they were ok with that and they wont sue us and out of the blue. The response thrilled us, because they said that they wanted to release it on Steam for free. That was an great moment for us.</p>\n<p>We received some exclusive screenshot and also some sounds to include in the game. And after some weeks the game went live on Steam and it was a success. It reached over 1 million downloads in a couple of weeks.</p>\n<p>Sadly the game disappeared from the Steam game listing because we had a link to the website of the former empolyer in the game and after the company closed the domain was grabbed by to some adult website owners and we dodn\'t had the chance to make patch it.</p>\n<p>But there are ways to play it. It\'s still in the Steam system but it\'s just not listed.</p>',
				ratio: '4:3',
				images: ['uploads/00000000009.jpg'],
			},
			{
				id: 2,
				sort: null,
				name: 'Irish sushi smuggler',
				slug: 'irish-sushi-smuggler',
				cover: 'uploads/00000000010.jpg',
				youtube: 'x3FPCiEeoL0',
				header: 'uploads/00000000012.jpg',
				copy:
					'<p>This game was created during 3 weeks for a small Game-Jam. The goal was to create a game from random generated game name.</p>\n<p>I got &bdquo;Irish Sushi Smuggler&ldquo; and thats the result. The Genre is &bdquo;TurnBased-Pacman-Stealth-Riddle&ldquo;-Like. 10 Level of Irish-Japanese-Sushi-Guinness Mayham!</p>\n<p>I made the game with <a title="Craftstudio" href="//sparklinlabs.itch.io/craftstudio" target="_blank" rel="noopener noreferrer">Craftstudio</a> which was pretty easy to build it because the coding, modeling and texturing was made inside ot Craftstudio.</p>\n<p>All Models and texture are made by myself, I\'m not the best artist so I\'m pretty happy with the resulting look of the game.</p>',
				ratio: '4:3',
				images: ['uploads/00000000036.jpg'],
			},
		],
	},
};

fetchMock.get('api/getGames', mockResponse);

describe('games action', () => {
	it('creates an async action to fetch the games data', () => {
		const expectedActions = [{ payload: mockResponse.data, type: GAMES_GET }];

		return store.dispatch(getGames()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});

const payload = {
	data: {
		head: 'My game-dev playground',
		subhead: 'Games',
		copy: '<p>Lorem ipsum</p>',
		header: 'uploads/00000000039.jpg',
		caption: 'Photo by Carl Raw on Unsplash',
		gameList: [
			{
				id: 1,
				sort: null,
				name: 'Codename: Gordon',
				slug: 'codename-gordon',
				cover: 'uploads/00000000005.jpg',
				youtube: 'yG9TC-6nODs',
				header: 'uploads/00000000006.jpg',
				copy:
					'<p>I created the game Back in 2004 with my Friend <a href="http://warby.de" target="_blank" rel="noopener noreferrer">Soenke C. &bdquo;warby&ldquo; Seidel</a> at our former employer &bdquo;NuClearVision&ldquo; in Braunschweig - Germany.</p>\n<p>The whole story behind the game still sounds like a fairytale for me. S&ouml;nke and I decided to make a game together in our spare time and just because it was the time where the first screenshots of HalfLife&sup2; were released we decided to make a HalfLife insipred game. The plan was to finish our &bdquo;Demake&ldquo; before the original game gets released.</p>\n<p>After the game gone beta we decided to contact Valve, just in case to check if they were ok with that and they wont sue us and out of the blue. The response thrilled us, because they said that they wanted to release it on Steam for free. That was an great moment for us.</p>\n<p>We received some exclusive screenshot and also some sounds to include in the game. And after some weeks the game went live on Steam and it was a success. It reached over 1 million downloads in a couple of weeks.</p>\n<p>Sadly the game disappeared from the Steam game listing because we had a link to the website of the former empolyer in the game and after the company closed the domain was grabbed by to some adult website owners and we dodn\'t had the chance to make patch it.</p>\n<p>But there are ways to play it. It\'s still in the Steam system but it\'s just not listed.</p>',
				ratio: '4:3',
				images: ['uploads/00000000009.jpg'],
			},
			{
				id: 2,
				sort: null,
				name: 'Irish sushi smuggler',
				slug: 'irish-sushi-smuggler',
				cover: 'uploads/00000000010.jpg',
				youtube: 'x3FPCiEeoL0',
				header: 'uploads/00000000012.jpg',
				copy:
					'<p>This game was created during 3 weeks for a small Game-Jam. The goal was to create a game from random generated game name.</p>\n<p>I got &bdquo;Irish Sushi Smuggler&ldquo; and thats the result. The Genre is &bdquo;TurnBased-Pacman-Stealth-Riddle&ldquo;-Like. 10 Level of Irish-Japanese-Sushi-Guinness Mayham!</p>\n<p>I made the game with <a title="Craftstudio" href="//sparklinlabs.itch.io/craftstudio" target="_blank" rel="noopener noreferrer">Craftstudio</a> which was pretty easy to build it because the coding, modeling and texturing was made inside ot Craftstudio.</p>\n<p>All Models and texture are made by myself, I\'m not the best artist so I\'m pretty happy with the resulting look of the game.</p>',
				ratio: '4:3',
				images: ['uploads/00000000036.jpg'],
			},
		],
	},
};

describe('games reducer', () => {
	const reducerResult = {
		...payload.data,
		isLoaded: true,
	};

	it('fetches and sets the games data', () => {
		expect(games({}, { type: GAMES_GET, payload: mockResponse.data })).toEqual(reducerResult);
	});
});
