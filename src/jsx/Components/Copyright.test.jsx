import React from 'react';
import { shallow } from 'enzyme';
import Copyright from './Copyright';

describe('Copyright', () => {
	const comp = shallow(<Copyright />);

	it('renders correctly', () => {
		expect(comp).toMatchSnapshot();
	});
});
