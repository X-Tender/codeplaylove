import React from 'react';
import PropTypes from 'prop-types';
import convert from 'htmr';
import { connect } from 'react-redux';
import { getPrivacy } from 'reducers/privacy';
import HeaderImage from 'Components/HeaderImage';
import Header from 'Components/Header';
import Text from 'Components/Text';
import Article from 'Semantics/Article';
import Section from 'Semantics/Section';
import P from 'Semantics/P';
import A from 'Semantics/A';

class Privacy extends React.Component {
	static propTypes = {
		privacy: PropTypes.shape({
			loaded: PropTypes.bool.isRequired,
			head: PropTypes.string.isRequired,
			subhead: PropTypes.string.isRequired,
			copy: PropTypes.string.isRequired,
			header: PropTypes.string.isRequired,
			caption: PropTypes.string,
		}).isRequired,
		getPrivacy: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);

		if (!this.props.privacy.loaded) this.props.getPrivacy();
	}

	render() {
		const { loaded, head, subhead, copy, caption, header } = this.props.privacy;

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
			</>
		);
	}
}

const mapStateToProps = ({ privacy }) => ({ privacy });

export default connect(
	mapStateToProps,
	{ getPrivacy }
)(Privacy);
