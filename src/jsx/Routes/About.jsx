import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
		const { header, loaded } = this.props.about;

		if (!loaded) return null;

		return (
			<>
				<HeaderImage src={header} />
				<DetailedIntroduction />
				<Skills />
				<Uses />
			</>
		);
	}
}

About.propTypes = {
	about: PropTypes.shape({
		loaded: PropTypes.bool.isRequired,
		header: PropTypes.string.isRequired,
	}).isRequired,
	getAbout: PropTypes.func.isRequired,
};

const mapStateToProps = ({ about }) => ({
	about,
});

export default connect(
	mapStateToProps,
	{ getAbout }
)(About);
