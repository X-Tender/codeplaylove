import React from 'react';
import convert from 'htmr';
import { connect } from 'react-redux';
import { getPrivacy } from 'reducers/privacy';
import HeaderImage from 'Components/HeaderImage';
import Header from 'Components/Header';
import Text from 'Components/Text';
import Article from 'Semantics/Article';
import Section from 'Semantics/Section';
import P from 'Components/P';
import A from 'Components/A';

class Privacy extends React.Component {
	constructor(props) {
		super(props);

		if (!this.props.privacy.loaded) this.props.getPrivacy();
	}

	render() {
		const { loaded, head, subhead, copy, caption, header } = this.props.privacy;

		if (!loaded) return null;

		return (
			<React.Fragment>
				<HeaderImage src={header} caption={caption} />
				<Section>
					<Article>
						<Header subhead={subhead} headline={head} />

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
			</React.Fragment>
		);
	}
}
const mapStateToProps = ({ privacy }) => ({ privacy });

export default connect(
	mapStateToProps,
	{ getPrivacy }
)(Privacy);
