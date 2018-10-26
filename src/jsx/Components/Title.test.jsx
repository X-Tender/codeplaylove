import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';

describe('Title', () => {
	const comp = shallow(<Title />);

	it('renders correctly', () => {
		expect(comp).toMatchSnapshot();
	});
});
