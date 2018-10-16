import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import convert from 'htmr';
import Header from 'Components/Header';
import Text from 'Components/Text';
import P from 'Semantics/P';
import A from 'Semantics/A';
import Section from 'Semantics/Section';
import Article from 'Semantics/Article';

class DetailedIntroduction extends PureComponent {
	render() {
		const { loaded, subhead, head, copy } = this.props.data;
		if (!loaded) return null;

		return (
			<Section>
				<Article className="introduction__content--noImage">
					<Header subhead={subhead} headline={head} />

					<Text twoColumns>
						{convert(copy, {
							transform: {
								p: P,
								a: A,
							},
						})}
					</Text>
				</Article>
			</Section>
		);
	}
}

const mapStateToProps = ({ detailedIntroduction }) => ({
	data: detailedIntroduction,
});

export default connect(mapStateToProps)(DetailedIntroduction);
