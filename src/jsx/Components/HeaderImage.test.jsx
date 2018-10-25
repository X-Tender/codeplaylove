import React from 'react';
import { shallow } from 'enzyme';
import HeaderImage from './HeaderImage';

describe('HeaderImage', () => {
	const src = 'image.jpg';
	const isPixelated = true;
	const caption = 'This is a caption';

	const comp = shallow(<HeaderImage caption={caption} isPixelated={isPixelated} src={src} />);

	it('renders correctly', () => {
		expect(comp).toMatchSnapshot();
	});

	it('renders the correct props', () => {
		expect(comp.find('img.header-image__img').prop('src')).toEqual(src);
		expect(comp.find('img.header-image__img.header-image__img--pixelate').exists()).toBe(true);
		expect(comp.find('span.header-image__caption').exists()).toBe(true);
		expect(comp.find('span.header-image__caption').text()).toEqual(caption);
	});
});
