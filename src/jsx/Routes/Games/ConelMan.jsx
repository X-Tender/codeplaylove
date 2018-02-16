import React from 'react';
import GamePage from './GamePage';
import P from 'Components/P';
import A from 'Components/A';

const images = [
	'assets/img/games/conelMan/conelMan1.jpg',
	'assets/img/games/conelMan/conelMan2.jpg',
	'assets/img/games/conelMan/conelMan3.jpg',
	'assets/img/games/conelMan/conelMan4.jpg',
];

const header = 'assets/img/games/conelMan/header.jpg';
const name = 'Conel man';
const video = 'w_N0P5HlYm4';
const content = (
	<React.Fragment>
		<P>
			This is CONEL MAN. A Game I developed while I was working at WM TEAM here in Hannover -
			Germany.
		</P>
		<P>
			I’ve done the gameplay code and some minor stuff for the menus. It was developed with Flash
			for Web,{' '}
			<A
				href="//itunes.apple.com/de/app/conel-man/id623851860?mt=8&ign-mpt=uo%3D4"
				title="CONEL MAN @ iTunes"
				target="_blank"
			>
				iOS
			</A>{' '}
			and{' '}
			<A
				href="//play.google.com/store/apps/details?id=air.de.wmteam.conel.conelman"
				title="CONEL MAN @ Play Store"
				target="_blank"
			>
				Android
			</A>.
		</P>
		<P>
			The Art is made by{' '}
			<A href="http://www.rainermichael.com" target="_blank">
				Rainer Michael
			</A>.
		</P>
	</React.Fragment>
);

function ConelMan() {
	return (
		<GamePage header={header} name={name} images={images} video={video} ratio="16:9">
			{content}
		</GamePage>
	);
}

export default ConelMan;
