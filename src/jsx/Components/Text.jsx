import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children, className, hasTwoColumns }) => {
	const classes = `text ${hasTwoColumns ? 'text--two-columns' : ''} ${className}`;
	return <div className={classes}>{children}</div>;
};

Text.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	hasTwoColumns: PropTypes.bool,
};

Text.defaultProps = {
	children: null,
	className: '',
	hasTwoColumns: false,
};

export default Text;
