import React from 'react';
import { shallow } from 'enzyme';
import Text from './Text';

describe('Text', () => {
	const className = 'text-class';
	const children = <p>Lorem Ipsum dolor sit ammet</p>;

	describe('Simple Text', () => {
		const simpleText = shallow(<Text>{children}</Text>);
		it('renders correctly', () => {
			expect(simpleText).toMatchSnapshot();
		});

		it('renders correct props', () => {
			expect(
				simpleText
					.find('div.text')
					.childAt(0)
					.equals(children)
			).toBe(true);

			expect(simpleText.find('div.text').hasClass('text--two-columns')).toBe(false);
		});
	});

	describe('Text with class', () => {
		const textWithClass = shallow(<Text className={className}>{children}</Text>);

		it('renders correctly', () => {
			expect(textWithClass).toMatchSnapshot();
		});

		it('renders correct props', () => {
			expect(
				textWithClass
					.find('div.text')
					.childAt(0)
					.equals(children)
			).toBe(true);

			expect(textWithClass.find(`div.text.${className}`).exists()).toBe(true);

			expect(textWithClass.find('div.text').hasClass('text--two-columns')).toBe(false);
		});
	});

	describe('Two column text', () => {
		const twoColumnText = shallow(<Text hasTwoColumns>{children}</Text>);

		it('renders correctly', () => {
			expect(twoColumnText).toMatchSnapshot();
		});

		it('renders correct props', () => {
			expect(
				twoColumnText
					.find('div.text')
					.childAt(0)
					.equals(children)
			).toBe(true);

			expect(twoColumnText.find('div.text').hasClass('text--two-columns')).toBe(true);
		});
	});
});
