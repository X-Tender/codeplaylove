import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	style: PropTypes.string.isRequired,
};

export const CodePlayLoveCard = ({ title, children, style }) => (
	<li className={`code-play-love-card code-play-love-card--${style}`}>
		<div className={`code-play-love-card__icon code-play-love-card__icon--${style}`} />
		<div className="code-play-love-card__content">
			<h3 className="code-play-love-card__head">{title}</h3>
			{children}
		</div>
	</li>
);

CodePlayLoveCard.propTypes = propTypes;

export default CodePlayLoveCard;
