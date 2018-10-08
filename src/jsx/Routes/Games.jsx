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
