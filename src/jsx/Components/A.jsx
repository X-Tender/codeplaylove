import React from 'react';
import PropTypes from 'prop-types';

const A = ({ href, target, children, title }) => {
	return (
		<a
			href={href}
			target={target}
			rel={target === '_blank' ? 'noopener noreferrer' : null}
			title={title || children}
		>
			{children}
		</a>
	);
};

A.propTypes = {
	href: PropTypes.string.isRequired,
	target: PropTypes.string,
	title: PropTypes.string,
	children: PropTypes.string.isRequired,
};

A.defaultProps = {
	target: '_SELF',
	title: null,
};

export default A;
