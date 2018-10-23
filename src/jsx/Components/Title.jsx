import React from 'react';
import PropTypes from 'prop-types';

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

MaskedSVG.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
};

const Code = () => (
	<span className="title__text title__text--code">
		<MaskedSVG color="#8ac926" text="code" type="code" />
	</span>
);
const Play = () => (
	<span className="title__text title__text--play">
		<MaskedSVG color="#2e84d1" text="PLAY" type="play" />
	</span>
);
const Love = () => (
	<span className="title__text title__text--love">
		<MaskedSVG color="#fc5053" text="love" type="love" />
	</span>
);

const Title = () => (
	<div className="title">
		<h1 className="title__head">
			<Code />
			<Play />
			<Love />
		</h1>
	</div>
);

export default Title;
