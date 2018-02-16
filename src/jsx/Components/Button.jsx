import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ children, primary, ghost, fullWithSm, to }) => {
	let style = '';

	if (primary) style += 'button--primary ';
	if (ghost) style += 'button--ghost ';
	if (fullWithSm) style += 'button--full-width-sm ';

	return (
		<Link className={`button ${style}`} to={to}>
			{children}
		</Link>
	);
};

Button.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.any,
	primary: PropTypes.bool,
	ghost: PropTypes.bool,
	fullWithSm: PropTypes.bool,
};

Button.defaultProps = {
	children: null,
	primary: false,
	ghost: false,
	fullWithSm: false,
};

export default Button;
