import React from 'react';
import GamePage from './GamePage';
import P from 'Components/P';
import A from 'Components/A';

const images = [
	'assets/img/games/mineMatcher/mineMatcher1.jpg',
	'assets/img/games/mineMatcher/mineMatcher2.jpg',
	'assets/img/games/mineMatcher/mineMatcher3.jpg',
	'assets/img/games/mineMatcher/mineMatcher4.jpg',
];

const header = 'assets/img/games/mineMatcher/mineMatcher1.jpg';
const name = 'Mine Matcher';
const video = 'U4k1cwtJN64';
const content = (
	<React.Fragment>
		<P>
			During my time I worked with{' '}
			<A href="//sparklinlabs.itch.io/craftstudio" target="_blank">
				Craftstudio
			</A>{' '}
			I met a lot of nice developers, some on them were Dan and Micha. We created a Match-3 game
			with a Minecraft theme for the vooth of Craftstudio for the MineCon 2012. It was my first
			Craftstudio project which I made with two foreign guys together which went pretty well.
		</P>
		<P>Not at least because the cooperative feature of Craftstudio made it possible.</P>
	</React.Fragment>
);

function MineMatcher() {
	return (
		<GamePage header={header} name={name} images={images} video={video} ratio="16:9">
			{content}
		</GamePage>
	);
}

export default MineMatcher;
