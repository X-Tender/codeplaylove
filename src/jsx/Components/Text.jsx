import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	hasTwoColumns: PropTypes.bool,
};

const defaultProps = {
	children: null,
	className: '',
	hasTwoColumns: false,
};

const Text = ({ children, className, hasTwoColumns }) => {
	const classes = `text ${hasTwoColumns ? 'text--two-columns' : ''} ${className}`;
	return <div className={classes}>{children}</div>;
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
