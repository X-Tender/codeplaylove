import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import convert from 'htmr';
import { getCards } from 'reducers/cards';
import Section from 'Semantics/Section';
import P from 'Semantics/P';
import A from 'Semantics/A';
import CodePlayLoveCard from './CodePlayLoveCard';

class CodePlayLoveCards extends PureComponent {
	static propTypes = {
		cards: PropTypes.shape({
			data: PropTypes.array.isRequired,
		}).isRequired,
		getCards: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);

		if (this.props.cards.data.length === 0) this.props.getCards();
	}

	render() {
		const cardsData = this.props.cards.data;

		const cards = cardsData.sort((a, b) => a.sort - b.sort).map(({ id, title, copy, style }) => (
			<CodePlayLoveCard key={id} style={style} title={title}>
				{copy &&
					convert(copy, {
						transform: {
							p: P,
							a: A,
						},
					})}
			</CodePlayLoveCard>
		));

		return (
			<Section className="code-play-love-cards">
				<ul className="code-play-love-cards__list">{cards}</ul>
			</Section>
		);
	}
}

const mapStateToProps = ({ cards }) => ({
	cards,
});

export default connect(
	mapStateToProps,
	{ getCards }
)(CodePlayLoveCards);
