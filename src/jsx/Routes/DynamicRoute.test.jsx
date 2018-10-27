import React from 'react';
import { shallow } from 'enzyme';
import DynamicRoute from './DynamicRoute';

describe('DynamicRoute', () => {
	const load = () =>
		new Promise(resolve => {
			resolve({ default: null });
		});
	const children = jest.fn();

	const comp = shallow(<DynamicRoute load={load}>{children}</DynamicRoute>);

	it('renders correctly', () => {
		expect(comp).toMatchSnapshot();
	});
});
