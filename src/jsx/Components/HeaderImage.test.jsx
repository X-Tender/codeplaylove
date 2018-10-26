import React from 'react';
import { shallow } from 'enzyme';
import HeaderImage from './HeaderImage';

describe('HeaderImage', () => {
	const src = 'image.jpg';
	const caption = 'This is a caption';

	describe('not pixelated', () => {
		const notPixelated = shallow(<HeaderImage caption={caption} src={src} />);

		it('renders correctly', () => {
			expect(notPixelated).toMatchSnapshot();
		});

		it('renders the correct props', () => {
			expect(notPixelated.find('img.header-image__img').prop('src')).toEqual(src);
			expect(notPixelated.find('img.header-image__img.header-image__img--pixelate').exists()).toBe(
				false
			);
			expect(notPixelated.find('span.header-image__caption').exists()).toBe(true);
			expect(notPixelated.find('span.header-image__caption').text()).toEqual(caption);
		});
	});

	describe('pixelated', () => {
		const pixelated = shallow(<HeaderImage caption={caption} isPixelated src={src} />);

		it('renders correctly', () => {
			expect(pixelated).toMatchSnapshot();
		});

		it('renders the correct props', () => {
			expect(pixelated.find('img.header-image__img').prop('src')).toEqual(src);
			expect(pixelated.find('img.header-image__img.header-image__img--pixelate').exists()).toBe(
				true
			);
			expect(pixelated.find('span.header-image__caption').exists()).toBe(true);
			expect(pixelated.find('span.header-image__caption').text()).toEqual(caption);
		});
	});
});
