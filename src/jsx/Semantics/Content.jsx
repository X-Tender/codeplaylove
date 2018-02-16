import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ className, children }) => {
	const classes = `content ${className}`;
	return <div className={classes}>{children}</div>;
};

Content.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

Content.defaultProps = {
	className: '',
	children: null,
};

export default Content;
