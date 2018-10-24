import React from 'react';
import Title from 'Components/Title';

const Hero = () => (
	<section className="hero full-width">
		<video
			autoPlay
			className="hero__video"
			loop
			muted
			poster="assets/video/poster.jpg"
			src="assets/video/codeplaylove.mp4"
		/>
		<Title />
	</section>
);

export default Hero;
