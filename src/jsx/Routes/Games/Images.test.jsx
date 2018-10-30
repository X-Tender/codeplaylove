import React from 'react';
import { shallow } from 'enzyme';
import Images from './Images';

describe('Images', () => {
	const images = ['freddie.jpg', 'brian.jpg', 'roger.jpg', 'mike.jpg'];
	const comp = shallow(<Images images={images} />);

	it('renders correctly', () => {
		expect(comp).toMatchSnapshot();
	});

	it('contains correct elements', () => {
		expect(comp.find(`ul.images-list--${images.length}`).exists()).toBe(true);
		expect(comp.find(`ul.images-list--${images.length}`).children()).toHaveLength(images.length);
	});

	it('generate the correct image nodes', () => {
		for (let i = 0; i < images.length; i++) {
			const image = images[i];
			expect(
				comp
					.find('ul')
					.childAt(i)
					.prop('src')
			).toEqual(image);
		}
	});
});
