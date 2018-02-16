import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from 'reducers/grid';
import StackGrid from 'react-stack-grid';
import GridItem from 'Components/GridItem';
import HeaderImage from 'Components/HeaderImage';
import Section from 'Semantics/Section';
import Article from 'Semantics/Article';
import Header from 'Components/Header';

class Feeds extends React.PureComponent {
	componentDidMount() {
		if (this.props.grid.length === 0) this.props.getPosts();
	}

	getItems() {
		return this.props.grid.map((item, index) => <GridItem key={index} data={item} />);
	}

	render() {
		return (
			<React.Fragment>
				<HeaderImage
					src="assets/img/feeds/header.jpg"
					caption="Photo by Rodion Kutsaev on Unsplash"
				/>
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
			</React.Fragment>
		);
	}
}

const mapStateToProps = ({ grid }) => ({
	grid: grid.data,
});

const mapDispatchToProps = {
	getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feeds);
