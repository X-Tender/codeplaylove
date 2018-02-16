import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Article = ({ className, children, isPage }) => {
	const classes = classNames('article', className, { 'article--page-grid': isPage });
	return <article className={classes}>{children}</article>;
};

Article.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	isPage: PropTypes.bool,
};

Article.defaultProps = {
	className: '',
	children: null,
	isPage: false,
};

export default Article;
