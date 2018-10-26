import React from 'react';
import PropTypes from 'prop-types';
import MaskedSVG from './MaskedSVG';

const propTypes = {
	color: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

const TitleSegment = ({ color, children, type }) => (
	<span className={`title__text title__text--${type}`}>
		<MaskedSVG color={color} text={children} type={type} />
	</span>
);

TitleSegment.propTypes = propTypes;

export default TitleSegment;
