import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import convert from 'htmr';
import Header from 'Components/Header';
import Text from 'Components/Text';
import P from 'Semantics/P';
import A from 'Semantics/A';
import Section from 'Semantics/Section';
import Article from 'Semantics/Article';

class DetailedIntroduction extends PureComponent {
	static propTypes = {
		data: PropTypes.shape({
			loaded: PropTypes.bool.isRequired,
			subhead: PropTypes.string.isRequired,
			head: PropTypes.string.isRequired,
			copy: PropTypes.string.isRequired,
		}).isRequired,
	};

	render() {
		const { loaded, subhead, head, copy } = this.props.data;
		if (!loaded) return null;

		return (
			<Section>
				<Article className="introduction__content--noImage">
					<Header headline={head} subhead={subhead} />

					<Text hasTwoColumns>
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

const mapStateToProps = ({ detailedIntroduction: data }) => ({ data });

export default connect(mapStateToProps)(DetailedIntroduction);
