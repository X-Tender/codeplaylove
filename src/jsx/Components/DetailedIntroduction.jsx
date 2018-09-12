import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import convert from 'htmr';
import NoWrap from 'Components/NoWrap';
import Header from 'Components/Header';
import Text from 'Components/Text';
import P from 'Components/P';
import A from 'Components/A';
import Section from 'Semantics/Section';
import Article from 'Semantics/Article';

class DetailedIntroduction extends PureComponent {
	render() {
		const { subhead, head, copy } = this.props.data;
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

const mapStateToProps = ({ about }) => ({
	data: about.detailedIntroduction,
});

export default connect(mapStateToProps)(DetailedIntroduction);
