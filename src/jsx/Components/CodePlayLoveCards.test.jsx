import React from 'react';
import { shallow, mount } from 'enzyme';
import { CodePlayLoveCards } from './CodePlayLoveCards';

describe('CodePlayLoveCards', () => {
	const getCards = jest.fn();

	const cards = {
		loaded: false,
		data: [],
	};

	const props = {
		getCards,
		cards,
	};
	let cplCards = shallow(<CodePlayLoveCards {...props} />);

	it('renders correctly', () => {
		expect(cplCards).toMatchSnapshot();
	});

	describe('when mounted', () => {
		beforeEach(() => {
			cplCards = mount(<CodePlayLoveCards {...props} />);
		});

		it('dispatches the `getCards()` method when mounted and no cards loaded', () => {
			expect(getCards).toHaveBeenCalled();
		});
	});
});
