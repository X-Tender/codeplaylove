import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Article = ({ className, children, isFullWidth }) => {
	const classes = classNames('section', className, { 'is-fullwidth': isFullWidth });
	return <section className={classes}>{children}</section>;
};

Article.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	isFullWidth: PropTypes.bool,
};

Article.defaultProps = {
	className: '',
	children: null,
	isFullWidth: false,
};

export default Article;
