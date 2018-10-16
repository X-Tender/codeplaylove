import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Section from 'Semantics/Section';
import Article from 'Semantics/Article';
import Header from 'Components/Header';
import A from 'Semantics/A';

const ListItem = ({ link, children }) => (
	<li className="uses__list-item">
		{link ? (
			<A href={link} target="_blank">
				{children}
			</A>
		) : (
			children
		)}
	</li>
);

ListItem.propTypes = {
	children: PropTypes.string.isRequired,
	link: PropTypes.string,
};

ListItem.defaultProps = {
	link: null,
};

class Tools extends Component {
	shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}

	getShuffledTools(tools) {
		return this.shuffle(tools).map(tool => (
			<ListItem key={tool.id} link={tool.url}>
				{tool.name}
			</ListItem>
		));
	}

	getUsesCards() {
		const { toolgroups } = this.props.data.toolset;
		return toolgroups.map(toolgroup => {
			const { id, name, tools } = toolgroup;
			const toolList = this.getShuffledTools(tools);

			return (
				<div key={id} className="uses__card">
					<h3 className="uses__head">{name}</h3>
					<ul className="uses__list">{toolList}</ul>
				</div>
			);
		});
	}

	render() {
		const { loaded, toolset: { head, subhead } = {} } = this.props.data;
		if (!loaded) return null;
		const usesCards = this.getUsesCards();
		return (
			<Section>
				<Article>
					<Header subhead={subhead} headline={head} />
					<div className="uses__cards">{usesCards}</div>
				</Article>
			</Section>
		);
	}
}

const mapStateToProps = ({ tools }) => ({
	data: tools,
});

export default connect(mapStateToProps)(Tools);
