import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getAbout } from 'reducers/about';
import HeaderImage from 'Components/HeaderImage';
import Skills from 'Components/Skills';
import Uses from 'Components/Uses';
import DetailedIntroduction from 'Components/DetailedIntroduction';

class About extends PureComponent {
	constructor(props) {
		super(props);

		if (!this.props.about.loaded) this.props.getAbout();
	}

	render() {
		if (!this.props.about.loaded) return null;

		return (
			<React.Fragment>
				<HeaderImage src="assets/img/introduction/header.jpg" />
				<DetailedIntroduction />
				<Skills />
				<Uses />
			</React.Fragment>
		);
	}
}

const mapStateToProps = ({ about }) => ({
	about,
});

export default connect(
	mapStateToProps,
	{ getAbout }
)(About);
