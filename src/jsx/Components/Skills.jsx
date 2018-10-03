import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Section from 'Semantics/Section';
import Article from 'Semantics/Article';
import Header from 'Components/Header';

class Skills extends PureComponent {
	shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}

	getSkills() {
		return this.shuffle(this.props.data.skillset.skills).map(skill => {
			const style = { color: `#${skill.color}80`, backgroundColor: `#${skill.color}` };

			return (
				<li key={skill.id} className="skills__list-item" style={style}>
					<span className="skills__list-item-label">{skill.name}</span>
				</li>
			);
		});
	}

	render() {
		const { loaded, subhead, head } = this.props.data.skillset;
		if (!loaded) return null;

		return (
			<Section className="skills">
				<Article>
					<Header subhead={subhead} headline={head} />
					<ul className="skills__list">{this.getSkills()}</ul>
				</Article>
			</Section>
		);
	}
}

const mapStateToProps = ({ skills }) => ({
	data: skills,
});

export default connect(mapStateToProps)(Skills);
