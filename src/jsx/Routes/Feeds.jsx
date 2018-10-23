import React from 'react';
import PropTypes from 'prop-types';
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
		if (!this.props.feeds.isLoaded) this.props.getFeeds();
	}

	getItems() {
		return this.props.feeds.map(item => <GridItem data={item} key={item.created_at} />);
	}

	render() {
		const { header, caption, isLoaded } = this.props;

		if (!isLoaded) return null;

		return (
			<>
				<HeaderImage caption={caption} src={header} />

				<Section className="feeds content">
					<Article className="feeds__article">
						<Header className="introduction__head" headline="My sharings" subhead="Feeds" />
						<StackGrid
							appearDelay={150}
							columnWidth={279}
							duration={200}
							gridRef={grid => (this.grid = grid)}
							gutterHeight={25}
							gutterWidth={25}
							monitorImagesLoaded
						>
							{this.getItems()}
						</StackGrid>
					</Article>
				</Section>
			</>
		);
	}
}

Feeds.propTypes = {
	isLoaded: PropTypes.bool.isRequired,
	header: PropTypes.string.isRequired,
	getFeeds: PropTypes.func.isRequired,
	feeds: PropTypes.array,
	caption: PropTypes.string,
};

Feeds.defaultProps = {
	feeds: [],
	caption: null,
};

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
