import React from 'react';
import { shallow } from 'enzyme';
import Floppy from './Floppy';

describe('Floppy', () => {
	const cover = 'uploads/image.jpg';
	const to = '/my-game';
	const children = 'My Game';

	const comp = shallow(
		<Floppy cover={cover} to={to}>
			{children}
		</Floppy>
	);

	it('renders correctly', () => {
		expect(comp).toMatchSnapshot();
	});

	it('renders the correct props', () => {
		expect(comp.find('.floppy').prop('title')).toEqual(children);
		expect(comp.find('.floppy').prop('to')).toEqual(to);
		expect(comp.find('.floppy__cover').prop('src')).toEqual(cover);
	});
});
