import React from 'react';
import { shallow, mount } from 'enzyme';
import { Burger } from './Burger';

describe('Burger', () => {
	const toggleMenu = jest.fn();
	let burger = shallow(<Burger toggleMenu={toggleMenu} />);

	it('renders correctly', () => {
		expect(burger).toMatchSnapshot();
	});

	burger = shallow(<Burger isOpen toggleMenu={toggleMenu} />);
	it('renders correctly when isOpen prop is given', () => {
		expect(burger.find('button').hasClass('isOpen')).toBe(true);
	});

	describe('when mounted', () => {
		beforeEach(() => {
			const props = {
				isOpen: false,
				toggleMenu,
			};
			burger = mount(<Burger {...props} />);
		});

		it('dispatches the `toggleMenu()` method when menuButton was clicked', () => {
			burger.find('button').simulate('click');
			expect(toggleMenu).toHaveBeenCalled();
		});
	});
});
