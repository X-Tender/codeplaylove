import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Section from 'Semantics/Section';
import Article from 'Semantics/Article';
import Header from 'Components/Header';
import A from 'Components/A';

const ListItem = ({ link, children }) => {
	return (
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
};

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

	getTools() {
		return this.shuffle(this.props.tools).map(tool => (
			<ListItem key={tool.name} link={tool.link}>
				{tool.name}
			</ListItem>
		));
	}

	getGears() {
		return this.shuffle(this.props.gears).map(gear => (
			<ListItem key={gear.name} link={gear.link}>
				{gear.name}
			</ListItem>
		));
	}

	render() {
		return (
			<Section>
				<Article>
					<Header subhead="Uses" headline="My tools and gears" />
					<div className="uses__cards">
						<div className="uses__card">
							<h3 className="uses__head">Software</h3>
							<ul className="uses__list">{this.getTools()}</ul>
						</div>
						<div className="uses__card">
							<h3 className="uses__head">Hardware</h3>
							<ul className="uses__list">{this.getGears()}</ul>
						</div>
					</div>
				</Article>
			</Section>
		);
	}
}

const mapStateToProps = ({ tools, gears }) => ({
	tools,
	gears,
});

export default connect(mapStateToProps)(Tools);
