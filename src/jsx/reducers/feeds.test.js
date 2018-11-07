import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import feeds, { getFeeds, GET_FEEDS } from './feeds';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ feeds: {} });

const payload = {
	error: 0,
	message: 'SUCCESS',
	data: {
		posts: [
			{
				image: {
					width: 640,
					height: 640,
					url:
						'https://scontent.cdninstagram.com/vp/69bafd49c365c970564ce4fbac13e04d/5C83E9F5/t51.2885-15/sh0.08/e35/s640x640/44284510_545355652559282_1901130293905981440_n.jpg',
				},
				text:
					'There is nothing more relaxing then a good tea and writing some tests after a exhausting work day.\n.\nWhat are your rituals to relax after a day?',
				created_at: 1541530568,
				likes: 26,
				comments: 4,
				type: 'image',
				url: 'https://www.instagram.com/p/Bp2YdcKh7bj/',
				source: 'instagram',
			},
			{
				image: {
					width: 640,
					height: 640,
					url:
						'https://scontent.cdninstagram.com/vp/d085470b27bd2e16b6f7db47e8254928/5C7F0E96/t51.2885-15/sh0.08/e35/s640x640/44822340_325057714953404_4467003551071076352_n.jpg',
				},
				text:
					'Visiting a Playmobil exhibition here in Hannover with the family.\nRealy great private collection.',
				created_at: 1541340545,
				likes: 13,
				comments: 1,
				type: 'carousel',
				url: 'https://www.instagram.com/p/BpwuBVRhIWt/',
				source: 'instagram',
				carousel_media: [
					{
						width: 640,
						height: 640,
						url:
							'https://scontent.cdninstagram.com/vp/d085470b27bd2e16b6f7db47e8254928/5C7F0E96/t51.2885-15/sh0.08/e35/s640x640/44822340_325057714953404_4467003551071076352_n.jpg',
					},
					{
						width: 640,
						height: 640,
						url:
							'https://scontent.cdninstagram.com/vp/81976c6fc878d76c5ef58ed9f78a8556/5C8A3AB0/t51.2885-15/e35/43984388_2028497780530638_252724246587899904_n.jpg',
					},
					{
						width: 640,
						height: 640,
						url:
							'https://scontent.cdninstagram.com/vp/90f78aa5b1e8d1be9451d96f3544a5da/5C77852F/t51.2885-15/sh0.08/e35/s640x640/43985135_189393071890380_1254658868848361472_n.jpg',
					},
				],
			},
			{
				image: {
					width: 640,
					height: 640,
					url:
						'https://scontent.cdninstagram.com/vp/5eabfa14d3dbd4d78f5bab36618ec37b/5C70CD2F/t51.2885-15/sh0.08/e35/s640x640/44200876_111501813126267_7925929555661946880_n.jpg',
				},
				text: 'Bigos 😍\nI love this traditional polish dish.',
				created_at: 1541158969,
				likes: 18,
				comments: 5,
				type: 'image',
				url: 'https://www.instagram.com/p/BprTsP8FbvO/',
				source: 'instagram',
			},
		],
		feeds: {
			title: 'Feeds',
			caption: 'Photo by Rodion Kutsaev on Unsplash',
			header: 'uploads/00000000038.jpg',
		},
	},
};

fetchMock.get('api/getFeedsData', payload);

describe('feeds action', () => {
	it('creates an async action to fetch the feeds data', () => {
		const expectedActions = [{ payload: payload.data, type: GET_FEEDS }];

		return store.dispatch(getFeeds()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});

describe('feeds reducer', () => {
	const reducerResult = {
		data: payload.data.posts,
		...payload.data.feeds,
		isLoaded: true,
	};

	it('fetches and sets the feeds data', () => {
		expect(feeds({}, { type: GET_FEEDS, payload: payload.data })).toEqual(reducerResult);
	});
});
