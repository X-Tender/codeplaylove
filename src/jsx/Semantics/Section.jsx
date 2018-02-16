import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Article = ({ className, children, fullWidth }) => {
	const classes = classNames('section', className, { 'is-fullwidth': fullWidth });
	return <section className={classes}>{children}</section>;
};

Article.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	fullWidth: PropTypes.bool,
};

Article.defaultProps = {
	className: '',
	children: null,
	fullWidth: false,
};

export default Article;
