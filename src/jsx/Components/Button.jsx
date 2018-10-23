import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ children, isPrimary, isGhost, isFullWithSm, to }) => {
	let style = '';

	if (isPrimary) style += 'button--primary ';
	if (isGhost) style += 'button--ghost ';
	if (isFullWithSm) style += 'button--full-width-sm ';

	return (
		<Link className={`button ${style}`} to={to}>
			{children}
		</Link>
	);
};

Button.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.any,
	isPrimary: PropTypes.bool,
	isGhost: PropTypes.bool,
	isFullWithSm: PropTypes.bool,
};

Button.defaultProps = {
	children: null,
	isPrimary: false,
	isGhost: false,
	isFullWithSm: false,
};

export default Button;
