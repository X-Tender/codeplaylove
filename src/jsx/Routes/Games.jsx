import React from 'react';
import PropTypes from 'prop-types';
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
			<Floppy cover={cover} key={id} to={`/games/${slug}`}>
				{name}
			</Floppy>
		));
	}

	render() {
		const { loaded, head, subhead, copy, header, caption } = this.props.games;
		if (!loaded) return null;

		return (
			<>
				<HeaderImage caption={caption} src={header} />
				<Section>
					<Article>
						<Header headline={head} subhead={subhead} />
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

Games.propTypes = {
	games: PropTypes.shape({
		loaded: PropTypes.bool.isRequired,
		head: PropTypes.string.isRequired,
		subhead: PropTypes.string.isRequired,
		copy: PropTypes.string.isRequired,
		header: PropTypes.string.isRequired,
		gameList: PropTypes.array,
		caption: PropTypes.string,
	}).isRequired,
	getGames: PropTypes.func.isRequired,
};

const mapStateToProps = ({ games }) => ({
	games,
});

export default connect(
	mapStateToProps,
	{ getGames }
)(Games);
