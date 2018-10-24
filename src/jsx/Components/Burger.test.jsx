import React from 'react';
import { shallow } from 'enzyme';
import { Burger } from './Burger';

describe('Burger', () => {
	const toggleMenu = jest.fn();
	const burger = shallow(<Burger toggleMenu={toggleMenu} />);

	it('renders correctly', () => {
		expect(burger).toMatchSnapshot();
	});
});
