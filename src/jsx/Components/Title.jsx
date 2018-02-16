import React from 'react';

const MaskedSVG = ({ text, type, color }) => (
	<svg className="title__svg" width="100%" height="100%">
		<rect
			className="knockout-text-bg"
			width="100%"
			height="100%"
			fill={color}
			x="0"
			y="0"
			fillOpacity="0.4"
			mask={`url(#knockout-text-${type})`}
		/>

		<mask className="title__mask" id={`knockout-text-${type}`}>
			<rect width="100%" height="100%" fill="#FFF" x="0" y="0" />
			<text
				x="50%"
				y="50%"
				fill="#000"
				dominantBaseline="central"
				alignmentBaseline="central"
				textAnchor="middle"
			>
				{text}
			</text>
		</mask>
	</svg>
);

const Code = () => (
	<span className="title__text title__text--code">
		<MaskedSVG text="code" type="code" color="#8ac926" />
	</span>
);
const Play = () => (
	<span className="title__text title__text--play">
		<MaskedSVG text="PLAY" type="play" color="#2e84d1" />
	</span>
);
const Love = () => (
	<span className="title__text title__text--love">
		<MaskedSVG text="love" type="love" color="#fc5053" />
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
