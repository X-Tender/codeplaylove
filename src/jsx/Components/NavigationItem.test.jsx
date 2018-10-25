import React from 'react';
import { shallow } from 'enzyme';
import NavigationItem from './NavigationItem';

describe('NavigationItem', () => {
	const children = 'Home';
	const to = '/home';
	const style = 'house';

	const comp = shallow(
		<NavigationItem style={style} to={to}>
			{children}
		</NavigationItem>
	);

	it('renders correctly', () => {
		expect(comp).toMatchSnapshot();
	});

	it('renders the correct props', () => {
		expect(comp.find(`i.fas.fa-${style}`).exists()).toBe(true);
		expect(comp.find('NavLink').prop('to')).toEqual(to);
	});
});
