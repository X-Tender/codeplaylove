import React from 'react';
import PropTypes from 'prop-types';
import convert from 'htmr';
import { connect } from 'react-redux';
import { getImprint } from 'reducers/imprint';
import HeaderImage from 'Components/HeaderImage';
import Header from 'Components/Header';
import Text from 'Components/Text';
import Article from 'Semantics/Article';
import Section from 'Semantics/Section';
import P from 'Semantics/P';
import A from 'Semantics/A';

class Imprint extends React.Component {
	constructor(props) {
		super(props);

		if (!this.props.imprint.loaded) this.props.getImprint();
	}

	render() {
		const { loaded, head, subhead, copy, caption, header } = this.props.imprint;
		const { credits } = this.props;

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
					<Article>
						<Header headline={credits.head} subhead={credits.subhead} />
						<Text>
							{convert(credits.copy, {
								transform: {
									p: P,
									a: A,
								},
							})}
						</Text>
					</Article>
				</Section>
			</>
		);
	}
}

Imprint.propTypes = {
	imprint: PropTypes.shape({
		loaded: PropTypes.bool.isRequired,
		head: PropTypes.string.isRequired,
		subhead: PropTypes.string.isRequired,
		copy: PropTypes.string.isRequired,
		header: PropTypes.string.isRequired,
		caption: PropTypes.string,
	}).isRequired,
	credits: PropTypes.string.isRequired,
	getImprint: PropTypes.func.isRequired,
};

const mapStateToProps = ({ imprint, credits }) => ({
	imprint,
	credits,
});

export default connect(
	mapStateToProps,
	{ getImprint }
)(Imprint);
