import React from 'react';
import { connect } from 'react-redux';
import ResponsiveEmbed from 'react-responsive-embed';
import convert from 'htmr';

import { getGames } from 'reducers/games';
import HeaderImage from 'Components/HeaderImage';
import Header from 'Components/Header';
import Text from 'Components/Text';
import Article from 'Semantics/Article';
import Section from 'Semantics/Section';
import P from 'Semantics/P';
import A from 'Semantics/A';

const Video = ({ youtubeId, className, ratio = '4:3' }) => (
	<div style={{ gridColumn: '1/-1' }} className={className}>
		<ResponsiveEmbed
			ratio={ratio}
			src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&amp;showinfo=0&theme=white`}
			allowFullScreen
		/>
	</div>
);

const Images = ({ images }) => {
	const imageItems = images.map(image => (
		<img key={image} className="images-list__img" src={image} />
	));
	return <ul className={`images-list images-list--${images.length}`}>{imageItems}</ul>;
};

class Game extends React.Component {
	constructor(props) {
		super(props);

		if (!this.props.data.loaded) {
			this.props.getGames();
		}
	}

	render() {
		const { loaded, header, name, images, youtube, ratio, copy } = this.props.data;

		if (!loaded) return null;

		return (
			<>
				<HeaderImage src={header} pixelate />
				<Section>
					<Article>
						<Header subhead="Game" headline={name} />
						<div className="game-content clearfix">
							<Video youtubeId={youtube} ratio={ratio} className="game-content__video" />
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

				<Section fullWidth>
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
	return { data: { loaded: games.loaded, ...games.gameList.find(game => game.slug === gameSlug) } };
};

export default connect(
	mapStateToProps,
	{ getGames }
)(Game);
