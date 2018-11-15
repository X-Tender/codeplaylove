import tools from './tools';
import { ABOUT_GET } from './about';

describe('tools reducer', () => {
	const payload = {
		error: 0,
		message: 'SUCCESS',
		about: {
			title: 'About',
			caption: null,
			header: 'uploads/00000000037.jpg',
		},
		detailedIntroduction: {
			head: 'Something about me',
			subhead: 'About',
			copy:
				'<p>My name is Paul Kamma, I\'m a 37 year old Full-Stack Web-Developer from Hannover &ndash; Germany. I grew up in Poland and moved at the age of 6 to Germany.</p>\n<p>My professional career began in Braunschweig as a Game-Developer for the company NuclearVision, where I released my first Full-Price game &bdquo;<a href="https://www.metacritic.com/game/pc/psychotoxic" target="_blank" rel="noopener noreferrer">Psychotoxic</a>&ldquo;.</p>\n<p>But months before that I released my first game ever with my friend <a href="http://warby.de" target="_blank" rel="noopener noreferrer">Soenke C. &bdquo;warby&ldquo; Seidel</a>, called &bdquo;Codename: Gordon&rdquo; which was a huge success for us.</p>\n<p>Sadly the companys game didn\'t performed well so they had to close down.</p>\n<p>After that I moved to Hannover where I made my graduation as a IT Specialist(Media Intigration). During my education I worked for the game company, 4HEAD-Studios, mainly known for the &bdquo;The Guild&ldquo;-Series. After this company had to close down too I lost my faith in the german Game-Development szene so I decided to switch from Game-Development to Web-Develoment.</p>\n<p>I started at the Digital Ad-Agency WM-Team which I left mid 2013 and joined my current employer <a href="https://www.weareslim.de/" target="_blank" rel="noopener noreferrer">slim brand Interactive</a> where I work as the Lead-Developer.</p>',
		},
		skillset: {
			head: 'Skills',
			subhead: "What I'm good at",
			skills: [
				{
					id: 1,
					name: 'css',
					color: '1471b6',
					skillset: 1,
				},
				{
					id: 2,
					name: 'mysql',
					color: '4479a1',
					skillset: 1,
				},
				{
					id: 3,
					name: 'html',
					color: 'e44c27',
					skillset: 1,
				},
				{
					id: 4,
					name: 'javascript',
					color: 'f7df1f',
					skillset: 1,
				},
				{
					id: 5,
					name: 'typo3',
					color: 'ff8600',
					skillset: 1,
				},
				{
					id: 6,
					name: 'php',
					color: '8792c0',
					skillset: 1,
				},
				{
					id: 7,
					name: 'flash',
					color: 'cd2027',
					skillset: 1,
				},
				{
					id: 8,
					name: 'unity3d',
					color: '232d3a',
					skillset: 1,
				},
				{
					id: 9,
					name: 'react',
					color: '00d8ff',
					skillset: 1,
				},
				{
					id: 10,
					name: 'teamwork',
					color: '21de27',
					skillset: 1,
				},
			],
		},
		toolset: {
			head: 'My tools and gears',
			subhead: 'uses',
			toolgroups: [
				{
					id: 1,
					sort: null,
					name: 'Software',
					tools: [
						{
							id: 1,
							name: 'Visual Studio Code',
							url: 'https://code.visualstudio.com',
						},
						{
							id: 2,
							name: 'Sequel Pro',
							url: 'https://sequelpro.com',
						},
						{
							id: 3,
							name: 'MAMP Pro',
							url: 'https://mamp.info/en',
						},
						{
							id: 4,
							name: 'Fenêtre',
							url: 'https://fenêt.re',
						},
						{
							id: 5,
							name: 'Spotify',
							url: 'https://spotify.com',
						},
						{
							id: 6,
							name: 'Chrome',
							url: 'https://chrome.com',
						},
						{
							id: 7,
							name: 'iTerm2',
							url: 'https://iterm2.com',
						},
					],
				},
				{
					id: 2,
					sort: null,
					name: 'Hardware',
					tools: [
						{
							id: 8,
							name: 'MacBook Pro 15“',
							url: null,
						},
						{
							id: 9,
							name: 'Logitech MX Master',
							url: null,
						},
						{
							id: 10,
							name: 'Sony XPERIA XZ',
							url: 'https://sonymobile.com/us/products/phones/xperia-xz',
						},
						{
							id: 11,
							name: 'Logitech PC310',
							url: null,
						},
						{
							id: 12,
							name: 'Joby GorillaPod',
							url: 'https://joby.com/gorillapod-tripods/gorillapod-original',
						},
						{
							id: 13,
							name: 'Canon Powershot G12',
							url: null,
						},
						{
							id: 14,
							name: 'Fidget Cube',
							url: 'https://fidgetcube.com',
						},
					],
				},
			],
		},
	};

	const reducerResult = {
		toolset: { ...payload.toolset },
		loaded: true,
	};

	it('fetches and sets the tools data', () => {
		expect(tools({}, { type: ABOUT_GET, payload })).toEqual(reducerResult);
	});
});
