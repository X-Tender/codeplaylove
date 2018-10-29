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
			const article = articleWithAllProps.find('article');

			expect(article.hasClass(className)).toBe(true);
			expect(article.hasClass('article--page-grid')).toBe(true);
			expect(article.contains(children)).toBe(true);
		});
	});

	describe('with no props', () => {
		const articleWithNoProps = shallow(<Article />);

		it('renders correctly', () => {
			expect(articleWithNoProps).toMatchSnapshot();
		});

		it('renders props correctly', () => {
			const article = articleWithNoProps.find('article');

			expect(article.hasClass('article--page-grid')).toBe(false);
			expect(article.children()).toHaveLength(0);
		});
	});
});
