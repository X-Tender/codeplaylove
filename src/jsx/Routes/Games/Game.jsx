import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import convert from 'htmr';
import { getGames } from 'reducers/games';
import HeaderImage from 'Components/HeaderImage';
import Header from 'Components/Header';
import Text from 'Components/Text';
import Article from 'Semantics/Article';
import Section from 'Semantics/Section';
import P from 'Semantics/P';
import A from 'Semantics/A';
import Video from './Video';
import Images from './Images';

class Game extends React.Component {
	static propTypes = {
		data: PropTypes.shape({
			isLoaded: PropTypes.bool.isRequired,
			header: PropTypes.string,
			name: PropTypes.string,
			youtube: PropTypes.string,
			copy: PropTypes.string,
			ratio: PropTypes.string,
			images: PropTypes.array,
		}).isRequired,
		getGames: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);

		if (!this.props.data.isLoaded) {
			this.props.getGames();
		}
	}

	render() {
		const { isLoaded, header, name, images, youtube, ratio, copy } = this.props.data;

		if (!isLoaded) return null;

		return (
			<>
				<HeaderImage isPixelated src={header} />
				<Section>
					<Article>
						<Header headline={name} subhead="Game" />
						<div className="game-content clearfix">
							<Video className="game-content__video" ratio={ratio} youtubeId={youtube} />
							<Text className="game-content__text">
								{convert(copy, {
									transform: {
										p: P,
										a: A,
									},
								})}
							</Text>
						</div>
					</Article>
				</Section>

				<Section isFullWidth>
					<Article isPage>
						<Images images={images} />
					</Article>
				</Section>
				<Section />
			</>
		);
	}
}

const mapStateToProps = ({ games }, ownProps) => {
	const { gameSlug } = ownProps.match.params;
	return {
		data: { isLoaded: games.isLoaded, ...games.gameList.find(game => game.slug === gameSlug) },
	};
};

export default connect(
	mapStateToProps,
	{ getGames }
)(Game);
