import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	subhead: PropTypes.string.isRequired,
	headline: PropTypes.string.isRequired,
	className: PropTypes.string,
};

const defaultProps = {
	className: '',
};

const Header = ({ subhead, headline, className }) => {
	const classes = `header ${className}`;
	return (
		<header className={classes}>
			<h3 className="introduction__subhead">{subhead}</h3>
			<h2 className="introduction__headline">{headline}</h2>
		</header>
	);
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
