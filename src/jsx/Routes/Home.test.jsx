import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
	const comp = shallow(<Home />);

	it('renders correctly', () => {
		expect(comp).toMatchSnapshot();
	});
});
