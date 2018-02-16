import React from 'react';
import NoWrap from 'Components/NoWrap';
import Header from 'Components/Header';
import Text from 'Components/Text';
import P from 'Components/P';
import Section from 'Semantics/Section';
import Article from 'Semantics/Article';

const Introduction = () => (
	<Section>
		<Article className="introduction__content--noImage">
			<Header subhead="About" headline="Something about me" />

			<Text twoColumns>
				<P>
					My name is Paul Kamma, I'm a {~~((Date.now() - +new Date('1981-05-28')) / 31557600000)}{' '}
					year old Full-Stack Web-Developer from <NoWrap>Hannover – Germany.</NoWrap> I grew up in
					Poland and moved at the age of 6 to Germany.
				</P>
				<P>
					My professional career began in Braunschweig as a Game-Developer for the company
					NuclearVision, where I released my first Full-Price game{' '}
					<a
						href="http://www.metacritic.com/game/pc/psychotoxic"
						rel="noopener noreferrer"
						target="_blank"
					>
						„Psychotoxic“
					</a>.<br />
					But months before that I released my first game ever with my friend{' '}
					<a href="http://warby.de" rel="noopener noreferrer" target="_blank">
						Soenke C. „warby“ Seidel
					</a>, called „Codename: Gordon” which was a huge success for us.<br />Sadly the companys
					game didn't performed well so they had to close down.
				</P>
				<P>
					After that I moved to Hannover where I made my graduation as a IT Specialist(Media
					Intigration). During my education I worked for the game company,{' '}
					<NoWrap>4HEAD-Studios</NoWrap>, mainly known for the „The Guild“-Series. After this
					company had to close down too I lost my faith in the german Game-Development szene so I
					decided to switch from Game-Development to Web-Develoment.
				</P>

				<P>
					I started at the Digital Ad-Agency WM-Team which I left mid 2013 and joined my current
					employer{' '}
					<NoWrap>
						<a
							href="//weareslim.de/"
							title="slim Interactive GmbH"
							rel="noopener noreferrer"
							target="_blank"
						>
							slim Interactive
						</a>
					</NoWrap>{' '}
					where I work as the Lead-Developer.
				</P>
			</Text>
		</Article>
	</Section>
);
export default Introduction;
