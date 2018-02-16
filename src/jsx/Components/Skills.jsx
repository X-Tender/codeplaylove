import React, { Component } from 'react';
import { connect } from 'react-redux';

import Section from 'Semantics/Section';
import Article from 'Semantics/Article';
import Header from 'Components/Header';

class Skills extends Component {
	shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}

	getSkills() {
		return this.shuffle(this.props.skills).map(skill => (
			<li key={skill} className={`skills__list-item skills__list-item--${skill.toLowerCase()}`}>
				{skill}
			</li>
		));
	}

	render() {
		return (
			<Section className="skills">
				<Article>
					<Header subhead="Skills" headline="What I'm good at" />
					<ul className="skills__list">{this.getSkills()}</ul>
				</Article>
			</Section>
		);
	}
}

const mapStateToProps = ({ skills }) => ({
	skills,
});

export default connect(mapStateToProps)(Skills);
