import imprint from './imprint';
import { IMPRINT_GET } from './imprint';

describe('imprint reducer', () => {
	const payload = {
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

	const reducerResult = {
		...payload.imprint,
		loaded: true,
	};

	it('fetches and sets the about data', () => {
		expect(imprint({}, { type: IMPRINT_GET, payload })).toEqual(reducerResult);
	});
});
