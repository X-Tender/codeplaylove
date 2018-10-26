import React from 'react';
import TitleSegment from './TitleSegment';

const Title = () => (
	<div className="title">
		<h1 className="title__head">
			<TitleSegment color="#8ac926" type="code">
				code
			</TitleSegment>
			<TitleSegment color="#2e84d1" type="play">
				PLAY
			</TitleSegment>
			<TitleSegment color="#fc5053" type="love">
				love
			</TitleSegment>
		</h1>
	</div>
);

export default Title;
