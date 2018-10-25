import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
	const comp = shallow(<Footer />);

	it('renders correctly', () => {
		expect(comp).toMatchSnapshot();
	});
});
