import React from 'react';
import { shallow } from 'enzyme';
import CodePlayLoveCard from './CodePlayLoveCard';

describe('CodePlayLoveCard', () => {
	const comp = shallow(
		<CodePlayLoveCard style="code" title="Code">
			<p>Lorem ipsum</p>
		</CodePlayLoveCard>
	);

	it('renders correctly', () => {
		expect(comp).toMatchSnapshot();
	});
});
