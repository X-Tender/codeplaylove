import React from 'react';
import { shallow } from 'enzyme';
import TitleSegment from './TitleSegment';

describe('TitleSegment', () => {
	const color = '#ff000';
	const children = 'CODE';
	const type = 'code';

	const comp = shallow(
		<TitleSegment color={color} type={type}>
			{children}
		</TitleSegment>
	);

	it('renders correctly', () => {
		expect(comp).toMatchSnapshot();
	});

	it('renders props correctly', () => {
		expect(comp.find(`span.title__text--${type}`).exists()).toBe(true);
		expect(comp.find('MaskedSVG').prop('color')).toEqual(color);
		expect(comp.find('MaskedSVG').prop('type')).toEqual(type);
	});
});
