import React from 'react';
import { connect } from 'react-redux';
import { getGames } from 'reducers/games';
import convert from 'htmr';

import HeaderImage from 'Components/HeaderImage';
import Header from 'Components/Header';
import Text from 'Components/Text';
import Floppy from 'Components/Floppy';
import Article from 'Semantics/Article';
import Section from 'Semantics/Section';
import P from 'Components/P';
import A from 'Components/A';

const Games_ = () => (
	<React.Fragment>
		<HeaderImage src="assets/img/games/header.jpg" caption="Photo by Carl Raw on Unsplash" />
		<Section>
			<Article>
				<Header subhead="Games" headline="My Game-Dev playground" />

				<Text>
					<P>
						Before I started my Web-Developer career I worked as a game developer, whis is, and
						always will be, my passion.
					</P>
					<P>
						From time to time when I have the chance I still develop games. Most of them are
						developed during game jams.
					</P>
				</Text>
			</Article>
		</Section>
		<Section>
			<Article className="floppy-container">
				<Floppy to="/games/codename-gordon" cover="assets/img/games/codenameGordon/cg1.jpg">
					Codename: Gordon
				</Floppy>
				<Floppy
					to="/games/irish-sushi-smuggler"
					cover="assets/img/games/irishSushiSmuggler/irishSushiSmuggler1.jpg"
				>
					Irish Sushi Smuggler
				</Floppy>
				<Floppy to="/games/mine-matcher" cover="assets/img/games/mineMatcher/mineMatcher1.jpg">
					Mine Matcher
				</Floppy>
				<Floppy
					to="/games/stealth-pervert"
					cover="assets/img/games/stealthPervert/stealthPervert1.jpg"
				>
					Stealth Pervert
				</Floppy>
				<Floppy to="/games/void" cover="assets/img/games/void/void1.png">
					VOID
				</Floppy>
				<Floppy to="/games/cold-iron" cover="assets/img/games/coldIron/coldIron3.jpg">
					Cold Iron
				</Floppy>
				<Floppy to="/games/conel-man" cover="assets/img/games/conelMan/conelMan2.jpg">
					Cold Iron
				</Floppy>
			</Article>
		</Section>
	</React.Fragment>
);

class Games extends React.Component {
	constructor(props) {
		super(props);

		if (!props.games.loaded) {
			props.getGames();
		}
	}

	get floppys() {
		return this.props.games.gameList.map(({ id, name, slug, cover }) => (
			<Floppy key={id} to={`/games/${slug}`} cover={cover}>
				{name}
			</Floppy>
		));
	}

	render() {
		const { loaded, head, subhead, copy } = this.props.games;
		if (!loaded) return null;

		return (
			<React.Fragment>
				<HeaderImage src="assets/img/games/header.jpg" caption="Photo by Carl Raw on Unsplash" />
				<Section>
					<Article>
						<Header subhead={subhead} headline={head} />
						<Text>
							{convert(copy, {
								transform: {
									p: P,
									a: A,
								},
							})}
						</Text>
					</Article>
				</Section>

				<Section>
					<Article className="floppy-container">{this.floppys}</Article>
				</Section>
			</React.Fragment>
		);
	}
}

const mapStateToProps = ({ games }) => ({
	games,
});

export default connect(
	mapStateToProps,
	{ getGames }
)(Games);
