import React from 'react';
import { shallow } from 'enzyme';
import Article from './Article';

describe('Article', () => {
	const className = 'article';
	const children = <p>Hello there</p>;

	describe('with all props', () => {
		const articleWithAllProps = shallow(
			<Article className={className} isPage>
				{children}
			</Article>
		);

		it('renders correctly', () => {
			expect(articleWithAllProps).toMatchSnapshot();
		});

		it('renders props correctly', () => {
			const articleWithProps = articleWithAllProps.find('article');

			expect(articleWithProps.hasClass(className)).toBe(true);
			expect(articleWithProps.hasClass('article--page-grid')).toBe(true);
			expect(articleWithProps.contains(children)).toBe(true);
		});
	});

	describe('with no props', () => {
		const articleWithAllProps = shallow(<Article />);

		it('renders correctly', () => {
			expect(articleWithAllProps).toMatchSnapshot();
		});

		it('renders props correctly', () => {
			const articleWithoutProps = articleWithAllProps.find('article');

			expect(articleWithoutProps.hasClass('article--page-grid')).toBe(false);
			expect(articleWithoutProps.children()).toHaveLength(0);
		});
	});
});
