import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import convert from 'htmr';
import { getCards } from 'reducers/cards';
import Section from 'Semantics/Section';
import P from 'Semantics/P';
import A from 'Semantics/A';

const CodePlayLoveCard = ({ title, children, style }) => (
	<li className={`code-play-love-card code-play-love-card--${style}`}>
		<div className={`code-play-love-card__icon code-play-love-card__icon--${style}`} />
		<div className="code-play-love-card__content">
			<h3 className="code-play-love-card__head">{title}</h3>
			{children}
		</div>
	</li>
);

class CodePlayLoveCards extends PureComponent {
	constructor(props) {
		super(props);

		if (this.props.cards.data.length === 0) this.props.getCards();
	}

	render() {
		const cardsData = this.props.cards.data;

		const cards = cardsData.sort((a, b) => a.sort - b.sort).map(({ id, title, copy, style }) => (
			<CodePlayLoveCard key={id} title={title} style={style}>
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
