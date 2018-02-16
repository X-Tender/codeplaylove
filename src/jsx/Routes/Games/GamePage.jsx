import React from 'react';
import ResponsiveEmbed from 'react-responsive-embed';
import HeaderImage from 'Components/HeaderImage';
import Header from 'Components/Header';
import Text from 'Components/Text';
import Article from 'Semantics/Article';
import Section from 'Semantics/Section';

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

const GamePage = ({ header, name, images, video, children, ratio }) => (
	<React.Fragment>
		<HeaderImage src={header} pixelate />
		<Section>
			<Article>
				<Header subhead="Game" headline={name} />
				<div className="game-content clearfix">
					<Video youtubeId={video} ratio={ratio} className="game-content__video" />
					<Text className="game-content__text">{children}</Text>
				</div>
			</Article>
		</Section>

		<Section fullWidth>
			<Article isPage>
				<Images images={images} />
			</Article>
		</Section>
		<Section />
	</React.Fragment>
);

export default GamePage;
