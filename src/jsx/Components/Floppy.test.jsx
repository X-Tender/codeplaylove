import React from 'react';
import { shallow } from 'enzyme';
import Floppy from './Floppy';

describe('Floppy', () => {
	const comp = shallow(
		<Floppy cover="uploads/image.jpg" to="/">
			Test game
		</Floppy>
	);

	it('renders correctly', () => {
		expect(comp).toMatchSnapshot();
	});
});
