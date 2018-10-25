import React from 'react';
import { shallow } from 'enzyme';
import CodePlayLoveCard from './CodePlayLoveCard';

describe('CodePlayLoveCard', () => {
	const style = 'code';
	const title = 'Code';
	const children = 'This is code';

	const comp = shallow(
		<CodePlayLoveCard style={style} title={title}>
			{children}
		</CodePlayLoveCard>
	);

	it('renders correctly', () => {
		expect(comp).toMatchSnapshot();
	});

	it('renders the correct props', () => {
		expect(comp.find(`li.code-play-love-card.code-play-love-card--${style}`).exists()).toBe(true);
		expect(comp.find('h3.code-play-love-card__head').text()).toEqual(title);
		expect(comp.find('div.code-play-love-card__content').text()).toEqual(title + children);
	});
});
