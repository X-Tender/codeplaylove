import React from 'react';
import PropTypes from 'prop-types';

function P({ children, className }) {
	const classes = `paragraph ${className}`;
	return <p className={classes}>{children}</p>;
}

P.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

P.defaultProps = {
	children: null,
	className: '',
};

export default P;
