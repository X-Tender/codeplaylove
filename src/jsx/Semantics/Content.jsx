import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

const defaultProps = {
	className: '',
	children: null,
};

const Content = ({ className, children }) => {
	const classes = `content ${className}`;
	return <div className={classes}>{children}</div>;
};

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
