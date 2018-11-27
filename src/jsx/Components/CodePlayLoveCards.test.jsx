import React from 'react';
import { shallow, mount } from 'enzyme';
import { CodePlayLoveCards } from './CodePlayLoveCards';

describe('CodePlayLoveCards', () => {
	let getCards = jest.fn();

	let props = {
		getCards,
		cards: {
			loaded: false,
			data: [],
		},
	};

	let cplCards = shallow(<CodePlayLoveCards {...props} />);

	it('renders correctly', () => {
		expect(cplCards).toMatchSnapshot();
	});

	describe('when mounted', () => {
		beforeEach(() => {
			getCards = jest.fn();

			props = {
				getCards,
				cards: {
					loaded: false,
					data: [],
				},
			};
		});

		it('dispatches the `getCards()` method when mounted and no cards loaded', () => {
			cplCards = mount(<CodePlayLoveCards {...props} />);
			expect(getCards).toHaveBeenCalled();
		});

		it("doesn't dispatches the `getCards()` method when mounted and cards are loaded", () => {
			props.cards.loaded = true;
			cplCards = mount(<CodePlayLoveCards {...props} />);
			expect(getCards).not.toHaveBeenCalled();
		});
	});
});
