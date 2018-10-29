import React from 'react';
import { shallow } from 'enzyme';
import NoWrap from './NoWrap';

describe('NoWrap', () => {
	const children = <p>Hello world</p>;
	const comp = shallow(<NoWrap>{children}</NoWrap>);

	it('renders correctly', () => {
		expect(comp).toMatchSnapshot();
	});

	it('renders props correctly', () => {
		expect(comp.find('span.no-wrap').contains(children)).toBe(true);
	});
});
