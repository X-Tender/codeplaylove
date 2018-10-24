import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	href: PropTypes.string.isRequired,
	target: PropTypes.string,
	title: PropTypes.string,
	children: PropTypes.node.isRequired,
};

const defaultProps = {
	target: '_SELF',
	title: null,
};

const A = ({ href, target, children, title }) => (
	<a
		href={href}
		rel={target === '_blank' ? 'noopener noreferrer' : null}
		target={target}
		title={title || children}
	>
		{children}
	</a>
);

A.propTypes = propTypes;
A.defaultProps = defaultProps;

export default A;
