import React from 'react';
import { shallow } from 'enzyme';
import SocialLinkItem from './SocialLinkItem';

describe('SocialLinkItem', () => {
	const url = 'https://github.com';
	const iconName = 'github';
	const children = 'gitHub';

	const comp = shallow(
		<SocialLinkItem iconName={iconName} url={url}>
			{children}
		</SocialLinkItem>
	);

	it('renders correctly', () => {
		expect(comp).toMatchSnapshot();
	});

	it('renders correct props', () => {
		expect(comp.find('li a').prop('href')).toEqual(url);
		expect(comp.find('li a').prop('name')).toEqual(children);
		expect(comp.find('li a').prop('title')).toEqual(children);
		expect(comp.find('li a i').hasClass(`fa-${iconName}`)).toBe(true);
	});
});
