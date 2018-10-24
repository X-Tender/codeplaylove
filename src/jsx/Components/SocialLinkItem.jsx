import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	url: PropTypes.string.isRequired,
	iconName: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
};

const SocialLinkItem = ({ url, iconName, children }) => (
	<li className="social-links__list-item">
		<a
			className="social-links__link"
			href={url}
			name={children}
			rel="noopener noreferrer"
			target="_blank"
			title={children}
		>
			<i className={`fab fa-${iconName} fa-3x`} />
		</a>
	</li>
);

SocialLinkItem.propTypes = propTypes;

export default SocialLinkItem;
