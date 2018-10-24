import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	isFullWidth: PropTypes.bool,
};

const defaultProps = {
	className: '',
	children: null,
	isFullWidth: false,
};

const Article = ({ className, children, isFullWidth }) => {
	const classes = classNames('section', className, { 'is-fullwidth': isFullWidth });
	return <section className={classes}>{children}</section>;
};

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article;
