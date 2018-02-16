import React from 'react';
import GamePage from './GamePage';
import P from 'Components/P';
import A from 'Components/A';

const images = [
	'assets/img/games/stealthPervert/stealthPervert1.jpg',
	'assets/img/games/stealthPervert/stealthPervert2.jpg',
	'assets/img/games/stealthPervert/stealthPervert3.jpg',
	'assets/img/games/stealthPervert/stealthPervert4.jpg',
	'assets/img/games/stealthPervert/stealthPervert5.jpg',
];

const header = 'assets/img/games/stealthPervert/stealthPervert5.jpg';
const name = 'Stealth Pervert';
const video = 'nkudZK21rOE';
const content = (
	<React.Fragment>
		<P>That's the weirdes game I made in my lifetime.</P>
		<P>
			You’re a perver Ninja which trys to steal as many skirts from girls inside a dorm as he can!
		</P>
		<P>
			It was developed for a small Game–Jam during 2 weeks. We had to choose 2 settings out of 5, my
			choice was „Ninja / Mini-Skirt“. And that’s the Result.
		</P>{' '}
		<P>The layout of the dorm is randomly generated.</P>
		<P>
			Play it @{' '}
			<A
				href="https://www.newgrounds.com/portal/view/598031?id=598031"
				target="_blank"
				title="Stealth pervert @ Newgrounds"
			>
				Newgrounds
			</A>
		</P>
	</React.Fragment>
);

function StealthPervert() {
	return (
		<GamePage header={header} name={name} images={images} video={video}>
			{content}
		</GamePage>
	);
}

export default StealthPervert;
