import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.any,
	isPrimary: PropTypes.bool,
	isGhost: PropTypes.bool,
	isFullWithSm: PropTypes.bool,
};

const defaultProps = {
	children: null,
	isPrimary: false,
	isGhost: false,
	isFullWithSm: false,
};

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

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
