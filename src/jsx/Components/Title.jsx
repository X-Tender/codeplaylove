import React from 'react';
import MaskedSVG from './MaskedSVG';

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
