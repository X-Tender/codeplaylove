import React from 'react';
import GamePage from './GamePage';
import P from 'Components/P';
import A from 'Components/A';

const images = [
	'assets/img/games/void/void1.png',
	'assets/img/games/void/void2.png',
	'assets/img/games/void/void3.png',
	'assets/img/games/void/void4.png',
];

const header = 'assets/img/games/void/void1.png';
const name = 'VOID';
const video = 'TXRuOfzulfs';
const content = (
	<React.Fragment>
		<P>
			VOID is a space exploration game where you can harvest resources from planets, fight enemys
			and upgrade your spaceship.
		</P>
		<P>The game was left in a pretty rough beta stage, it was made for a small Game–Jam.</P>
		<P>
			You can play it at{' '}
			<A
				target="_blank"
				href="https://www.newgrounds.com/portal/view/615768?id=615768"
				title="VOID @ Newgrounds"
			>
				Newgrounds
			</A>{' '}
			right away.
		</P>
	</React.Fragment>
);

function CodenameGordon() {
	return (
		<GamePage header={header} name={name} images={images} video={video} ratio="1:1">
			{content}
		</GamePage>
	);
}

export default CodenameGordon;
