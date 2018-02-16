import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from 'reducers/grid';

import GridItem from 'Components/GridItem';
import Hero from 'Components/Hero';
import Introduction from 'Components/Introduction';
import CodePlayLoveCards from 'Components/CodePlayLoveCards';

class Home extends React.PureComponent {
	componentDidMount() {
		if (this.props.grid.length === 0) this.props.getPosts();
	}

	getItems() {
		return this.props.grid.map((item, index) => <GridItem key={index} data={item} />);
	}

	render() {
		return (
			<React.Fragment>
				<Hero />
				<Introduction />
				<CodePlayLoveCards />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
