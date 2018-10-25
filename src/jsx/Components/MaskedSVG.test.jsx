import React from 'react';
import { shallow } from 'enzyme';
import MaskedSVG from './MaskedSVG';

describe('MaskedSVG', () => {
	const text = 'CODE';
	const type = 'code';
	const color = '#ff0000';

	const comp = shallow(<MaskedSVG color={color} text={text} type={type} />);

	it('renders correctly', () => {
		expect(comp).toMatchSnapshot();
	});

	it('renders the correct props', () => {
		expect(comp.find('rect.knockout-text-bg').prop('fill')).toEqual(color);
		expect(comp.find('rect.knockout-text-bg').prop('mask')).toEqual(`url(#knockout-text-${type})`);
		expect(comp.find('mask.title__mask').prop('id')).toEqual(`knockout-text-${type}`);
		expect(comp.find('mask text').text()).toEqual(text);
	});
});
