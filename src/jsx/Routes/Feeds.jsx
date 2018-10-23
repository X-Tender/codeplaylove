import React from 'react';
import { connect } from 'react-redux';
import { getFeeds } from 'reducers/feeds';
import StackGrid from 'react-stack-grid';
import GridItem from 'Components/GridItem';
import HeaderImage from 'Components/HeaderImage';
import Section from 'Semantics/Section';
import Article from 'Semantics/Article';
import Header from 'Components/Header';

class Feeds extends React.PureComponent {
	constructor(props) {
		super(props);
		if (!this.props.feeds.loaded) this.props.getFeeds();
	}

	getItems() {
		return this.props.feeds.map(item => <GridItem key={item.created_at} data={item} />);
	}

	render() {
		const { header, caption, loaded } = this.props;

		if (!loaded) return null;

		return (
			<>
				<HeaderImage src={header} caption={caption} />

				<Section className="feeds content">
					<Article className="feeds__article">
						<Header className="introduction__head" subhead="Feeds" headline="My sharings" />
						<StackGrid
							columnWidth={279}
							gutterWidth={25}
							gutterHeight={25}
							appearDelay={150}
							duration={200}
							monitorImagesLoaded
							gridRef={grid => (this.grid = grid)}
						>
							{this.getItems()}
						</StackGrid>
					</Article>
				</Section>
			</>
		);
	}
}

const mapStateToProps = ({ feeds }) => ({
	feeds: feeds.data,
	loaded: feeds.loaded,
	title: feeds.title,
	header: feeds.header,
	caption: feeds.caption,
});

export default connect(
	mapStateToProps,
	{ getFeeds }
)(Feeds);
