import React from 'react';
import { shallow } from 'enzyme';
import DynamicRoute from './DynamicRoute';

describe('DynamicRoute', () => {
	const children = jest.fn();

	describe('component not loaded', () => {
		const loadWithoutComponent = () =>
			new Promise(resolve => {
				resolve({ default: null });
			});

		const comp = shallow(<DynamicRoute load={loadWithoutComponent}>{children}</DynamicRoute>);

		it('renders correctly', () => {
			expect(comp).toMatchSnapshot();
		});
	});

	describe('component loaded', () => {
		const loadWithComponent = () =>
			new Promise(resolve => {
				resolve({ default: <div /> });
			});

		const comp = shallow(<DynamicRoute load={loadWithComponent}>{children}</DynamicRoute>);

		it('renders correctly', () => {
			expect(comp).toMatchSnapshot();
		});
	});
});
