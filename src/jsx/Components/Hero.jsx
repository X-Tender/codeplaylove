import React from 'react';
import Title from 'Components/Title';

const Hero = () => (
	<section className="hero full-width">
		<video
			className="hero__video"
			poster="assets/video/poster.jpg"
			src="assets/video/codeplaylove.mp4"
			muted
			loop
			autoPlay
		/>
		<Title />
	</section>
);
export default Hero;
