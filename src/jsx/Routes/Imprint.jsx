import React from 'react';
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

				<Section>
					<Article>
						<Header subhead={credits.subhead} headline={credits.head} />
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
			</React.Fragment>
		);
	}
}

const mapStateToProps = ({ imprint, credits }) => ({
	imprint,
	credits,
});

export default connect(
	mapStateToProps,
	{ getImprint }
)(Imprint);
