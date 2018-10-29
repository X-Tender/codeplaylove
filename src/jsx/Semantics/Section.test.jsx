import React from 'react';
import { shallow } from 'enzyme';
import Section from './Section';

describe('Section', () => {
	const className = 'section';
	const children = <p>Is this the real life?</p>;

	describe('with all props', () => {
		const comp = shallow(
			<Section className={className} isFullWidth>
				{children}
			</Section>
		);

		it('renders correctly', () => {
			expect(comp).toMatchSnapshot();
		});

		it('renders props correctly', () => {
			expect(comp.find('section').hasClass(className)).toBe(true);
			expect(comp.find('section').hasClass('is-fullwidth')).toBe(true);
			expect(comp.find('section').contains(children)).toBe(true);
		});
	});

	describe('with no props', () => {
		const comp = shallow(<Section />);

		it('renders correctly', () => {
			expect(comp).toMatchSnapshot();
		});

		it('renders props correctly', () => {
			expect(comp.find('section').children()).toHaveLength(0);
		});
	});
});
