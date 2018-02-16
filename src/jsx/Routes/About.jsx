import React from 'react';
import HeaderImage from 'Components/HeaderImage';
import Skills from 'Components/Skills';
import Uses from 'Components/Uses';
import DetailedIntroduction from 'Components/DetailedIntroduction';

const About = () => (
	<React.Fragment>
		<HeaderImage src="assets/img/introduction/header.jpg" />
		<DetailedIntroduction />
		<Skills />
		<Uses />
	</React.Fragment>
);

export default About;
