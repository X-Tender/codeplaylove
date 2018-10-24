import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
};

const MaskedSVG = ({ text, type, color }) => (
	<svg className="title__svg" height="100%" width="100%">
		<rect
			className="knockout-text-bg"
			fill={color}
			fillOpacity="0.4"
			height="100%"
			mask={`url(#knockout-text-${type})`}
			width="100%"
			x="0"
			y="0"
		/>

		<mask className="title__mask" id={`knockout-text-${type}`}>
			<rect fill="#FFF" height="100%" width="100%" x="0" y="0" />
			<text
				alignmentBaseline="central"
				dominantBaseline="central"
				fill="#000"
				textAnchor="middle"
				x="50%"
				y="50%"
			>
				{text}
			</text>
		</mask>
	</svg>
);

MaskedSVG.propTypes = propTypes;

export default MaskedSVG;
