import React from 'react';
import { shallow } from 'enzyme';
import Hero from './Hero';

describe('Hero', () => {
	const comp = shallow(<Hero />);

	it('renders correctly', () => {
		expect(comp).toMatchSnapshot();
	});
});
