import React from 'React';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
	const to = '/target';
	const children = 'The target';
	const isPrimary = true;
	const isGhost = true;
	const isFullWithSm = true;

	const buttonMinProps = shallow(<Button to={to} />);
	const buttonAllProps = shallow(
		<Button isFullWithSm={isFullWithSm} isGhost={isGhost} isPrimary={isPrimary} to={to}>
			{children}
		</Button>
	);

	it('renders correctly', () => {
		expect(buttonMinProps).toMatchSnapshot();
	});

	it('renders the correct props', () => {
		expect(
			buttonAllProps.find('.button.button--primary.button--ghost.button--full-width-sm').exists()
		).toBe(true);
	});
});
