import React from 'react';
import GamePage from './GamePage';
import P from 'Components/P';
import A from 'Components/A';

const images = [
	'assets/img/games/irishSushiSmuggler/irishSushiSmuggler1.jpg',
	'assets/img/games/irishSushiSmuggler/irishSushiSmuggler2.jpg',
	'assets/img/games/irishSushiSmuggler/irishSushiSmuggler3.jpg',
	'assets/img/games/irishSushiSmuggler/irishSushiSmuggler4.jpg',
];

const header = 'assets/img/games/irishSushiSmuggler/irishSushiSmuggler2.jpg';
const name = 'Irish Sushi Smuggler';
const video = 'x3FPCiEeoL0';
const content = (
	<React.Fragment>
		<P>
			This game was created during 3 weeks for a small Game-Jam. The goal was to create a game from
			random generated game name.
		</P>
		<P>
			I got „Irish Sushi Smuggler“ and thats the result. The Genre is
			„TurnBased-Pacman-Stealth-Riddle“-Like. 10 Level of Irish-Japanese-Sushi-Guinness Mayham!
		</P>
		<P>
			I made the game with{' '}
			<A href="//sparklinlabs.itch.io/craftstudio" target="_blank">
				Craftstudio
			</A>{' '}
			which was pretty easy to build it because the coding, modeling and texturing was made inside
			ot Craftstudio.</P><P>All Models and texture are made by myself, I'm not the best artist so I'm
			pretty happy with the resulting look of the game.
		</P>
	</React.Fragment>
);

function CodenameGordon() {
	return (
		<GamePage header={header} name={name} images={images} video={video}>
			{content}
		</GamePage>
	);
}

export default CodenameGordon;
