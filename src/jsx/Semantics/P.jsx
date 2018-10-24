import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

const defaultProps = {
	children: null,
	className: '',
};

const P = ({ children, className }) => {
	const classes = `paragraph ${className}`;
	return <p className={classes}>{children}</p>;
};

P.propTypes = propTypes;
P.defaultProps = defaultProps;

export default P;
