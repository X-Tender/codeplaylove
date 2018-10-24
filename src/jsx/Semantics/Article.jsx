import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	isPage: PropTypes.bool,
};

const defaultProps = {
	className: '',
	children: null,
	isPage: false,
};

const Article = ({ className, children, isPage }) => {
	const classes = classNames('article', className, { 'article--page-grid': isPage });
	return <article className={classes}>{children}</article>;
};

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article;
