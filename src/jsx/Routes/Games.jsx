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
import P from 'Semantics/P';
import A from 'Semantics/A';

class Games extends React.Component {
	constructor(props) {
		super(props);

		if (!props.games.loaded) props.getGames();
	}

	get floppys() {
		return this.props.games.gameList.map(({ id, name, slug, cover }) => (
			<Floppy key={id} to={`/games/${slug}`} cover={cover}>
				{name}
			</Floppy>
		));
	}

	render() {
		const { loaded, head, subhead, copy, header, caption } = this.props.games;
		if (!loaded) return null;

		return (
			<>
				<HeaderImage src={header} caption={caption} />
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
			</>
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
