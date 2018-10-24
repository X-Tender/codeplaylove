import React from 'React';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
	const button = shallow(<Button to="/" />);

	it('renders correctly', () => {
		expect(button).toMatchSnapshot();
	});
});
