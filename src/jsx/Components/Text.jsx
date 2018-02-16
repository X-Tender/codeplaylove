import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children, className, twoColumns }) => {
	const classes = `text ${twoColumns ? 'text--two-columns' : ''} ${className}`;
	return <div className={classes}>{children}</div>;
};

Text.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	twoColumns: PropTypes.bool,
};

Text.defaultProps = {
	children: null,
	className: '',
	twoColumns: false,
};

export default Text;
