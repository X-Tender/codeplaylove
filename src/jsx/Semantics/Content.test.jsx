import React from 'react';
import { shallow } from 'enzyme';
import Content from './Content';

describe('Content', () => {
	const className = 'content';
	const children = <p>Hello there</p>;

	describe('with all props', () => {
		const contentWithAllProps = shallow(<Content className={className}>{children}</Content>);

		it('renders correctly', () => {
			expect(contentWithAllProps).toMatchSnapshot();
		});

		it('renders props correctly', () => {
			const content = contentWithAllProps.find('div.content');

			expect(content.hasClass(className)).toBe(true);
			expect(content.contains(children)).toBe(true);
		});
	});

	describe('with no props', () => {
		const contentWithNoProps = shallow(<Content />);

		it('renders correctly', () => {
			expect(contentWithNoProps).toMatchSnapshot();
		});

		it('renders props correctly', () => {
			const content = contentWithNoProps.find('div.content');
			expect(content.children()).toHaveLength(0);
		});
	});
});
