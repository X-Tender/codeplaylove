import React from 'react';
import { shallow } from 'enzyme';
import UsesListItem from './UsesListItem';

describe('UsesListItem', () => {
	const children = 'Macbook Pro';
	const link = 'https://apple.com';

	describe('With link', () => {
		const compWithLink = shallow(<UsesListItem link={link}>{children}</UsesListItem>);

		it('renders correctly', () => {
			expect(compWithLink).toMatchSnapshot();
		});

		it('renders props correctly', () => {
			expect(compWithLink.find('A').prop('href')).toEqual(link);
		});
	});

	describe('Without link', () => {
		const compWithoutLink = shallow(<UsesListItem>{children}</UsesListItem>);

		it('renders correctly', () => {
			expect(compWithoutLink).toMatchSnapshot();
		});

		it('renders props correctly', () => {
			expect(compWithoutLink.text()).toEqual(children);
		});
	});
});
