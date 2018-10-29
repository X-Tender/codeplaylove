import React from 'react';
import { shallow } from 'enzyme';
import A from './A';

describe('A', () => {
	const href = 'https://codeplaylove.de';
	const target = '_blank';
	const title = 'CodePlayLove';
	const children = 'My portfolio';

	describe('with all props passed', () => {
		const AWithAllProps = shallow(
			<A href={href} target={target} title={title}>
				{children}
			</A>
		);

		it('renders correctly', () => {
			expect(AWithAllProps).toMatchSnapshot();
		});

		it('renders the correct props', () => {
			const a = AWithAllProps.find('a');
			expect(a.prop('href')).toEqual(href);
			expect(a.prop('target')).toEqual(target);
			expect(a.prop('title')).toEqual(title);
			expect(a.prop('rel')).toEqual('noopener noreferrer');
			expect(a.text()).toEqual(children);
		});
	});

	describe('with required props passed', () => {
		const AWithReqProps = shallow(<A href={href}>{children}</A>);

		it('renders correctly', () => {
			expect(AWithReqProps).toMatchSnapshot();
		});

		it('renders the correct props', () => {
			const a = AWithReqProps.find('a');
			expect(a.prop('href')).toEqual(href);
			expect(a.prop('target')).toEqual('_SELF');
			expect(a.prop('title')).toEqual(children);
			expect(a.prop('rel')).toEqual(null);
			expect(a.text()).toEqual(children);
		});
	});
});
