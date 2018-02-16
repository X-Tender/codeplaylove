import React from 'react';
import GamePage from './GamePage';
import P from 'Components/P';
import A from 'Components/A';

const images = [
	'assets/img/games/coldIron/coldIron1.jpg',
	'assets/img/games/coldIron/coldIron2.jpg',
	'assets/img/games/coldIron/coldIron3.jpg',
	'assets/img/games/coldIron/coldIron4.jpg',
];

const header = 'assets/img/games/coldIron/coldIron3.jpg';
const name = 'Cold Iron';
const video = 'b_QFTuKcV1k';
const content = (
	<React.Fragment>
		<P>
			Cold Iron is a{' '}
			<A href="//sparklinlabs.itch.io/craftstudio" target="_blank">
				CraftStudio
			</A>{' '}
			Project which I developed with some other people. A multiplayer FPS like Conter-Strike.
		</P>
		<P>I choosed Craftstudio to test out the multiplayer possibilities.</P>
	</React.Fragment>
);

function ColdIton() {
	return (
		<GamePage header={header} name={name} images={images} video={video} ratio="16:9">
			{content}
		</GamePage>
	);
}

export default ColdIton;
