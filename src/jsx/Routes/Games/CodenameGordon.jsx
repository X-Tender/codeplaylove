import React from 'react';
import GamePage from './GamePage';
import P from 'Components/P';

const images = [
	'assets/img/games/codenameGordon/cg1.jpg',
	'assets/img/games/codenameGordon/cg2.jpg',
	'assets/img/games/codenameGordon/cg3.jpg',
	'assets/img/games/codenameGordon/cg4.jpg',
	'assets/img/games/codenameGordon/cg5.jpg',
	'assets/img/games/codenameGordon/cg6.jpg',
	'assets/img/games/codenameGordon/cg7.jpg',
	'assets/img/games/codenameGordon/cg8.jpg',
];

const header = 'assets/img/games/codenameGordon/cg3.jpg';
const name = 'Codename: Gordon';
const video = 'yG9TC-6nODs';
const content = (
	<React.Fragment>
		<P>
			I created the game Back in 2004 with my Friend{' '}
			<a href="http://warby.de" rel="noopener noreferrer" target="_blank">
				Soenke C. „warby“ Seidel
			</a>{' '}
			at our former employer „NuClearVision“ in Braunschweig - Germany.
		</P>
		<P>
			The whole story behind the game still sounds like a fairytale for me. Sönke and I decided to
			make a game together in our spare time and just because it was the time where the first
			screenshots of HalfLife² were released we decided to make a HalfLife insipred game. The plan
			was to finish our "Demake" before the original game gets released.
		</P>
		<P>
			After the game gone beta we decided to contact Valve, just in case to check if they were ok
			with that and they wont sue us and out of the blue. The response thrilled us, because they
			said that they wanted to release it on Steam for free. That was an great moment for us.
		</P>
		<P>
			We received some exclusive screenshot and also some sounds to include in the game. And after
			some weeks the game went live on Steam and it was a success. It reached over 1 million
			downloads in a couple of weeks.
		</P>
		<P>
			Sadly the game disappeared from the Steam game listing because we had a link to the website of
			the former empolyer in the game and after the company closed the domain was grabbed by to some
			adult website owners and we dodn't had the chance to make patch it.
		</P>
		<P>But there are ways to play it. It's still in the Steam system but it's just not listed.</P>
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
