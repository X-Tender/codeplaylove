import React from 'react';
import { shallow } from 'enzyme';
import P from './P';

describe('P', () => {
	const className = 'paragraph';
	const children = <span>Don&#39;t you, forget about me</span>;

	describe('with all props', () => {
		const comp = shallow(<P className={className}>{children}</P>);

		it('renders correctly', () => {
			expect(comp).toMatchSnapshot();
		});

		it('renders props correctly', () => {
			expect(comp.find('p').hasClass(className)).toBe(true);
			expect(comp.contains(children)).toBe(true);
		});
	});

	describe('with no props', () => {
		const comp = shallow(<P />);

		it('renders correctly', () => {
			expect(comp).toMatchSnapshot();
		});

		it('renders props correctly', () => {
			expect(comp.children()).toHaveLength(0);
		});
	});
});
