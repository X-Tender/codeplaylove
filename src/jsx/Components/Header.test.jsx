import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
	const subhead = 'My subhead';
	const headline = 'My headline';
	const className = 'my-class';

	describe('with class', () => {
		const headerWithClass = shallow(
			<Header className={className} headline={headline} subhead={subhead} />
		);

		it('renders correctly', () => {
			expect(headerWithClass).toMatchSnapshot();
		});

		it('renders the correct props', () => {
			expect(headerWithClass.find(`header.${className}`).exists()).toBe(true);
			expect(headerWithClass.find('.introduction__subhead').text()).toEqual(subhead);
			expect(headerWithClass.find('.introduction__headline').text()).toEqual(headline);
		});
	});

	describe('without class', () => {
		const headerWithoutClass = shallow(<Header headline={headline} subhead={subhead} />);

		it('renders correctly', () => {
			expect(headerWithoutClass).toMatchSnapshot();
		});

		it('renders the correct props', () => {
			expect(headerWithoutClass.find('header').prop('className')).toEqual('header ');
			expect(headerWithoutClass.find('.introduction__subhead').text()).toEqual(subhead);
			expect(headerWithoutClass.find('.introduction__headline').text()).toEqual(headline);
		});
	});
});
