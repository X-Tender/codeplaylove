import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Section from 'Semantics/Section';
import Article from 'Semantics/Article';
import Header from 'Components/Header';

class Skills extends PureComponent {
	static propTypes = {
		data: PropTypes.shape({
			skillset: PropTypes.shape({
				skills: PropTypes.array.isRequired,
				loaded: PropTypes.bool.isRequired,
				subhead: PropTypes.string.isRequired,
				head: PropTypes.string.isRequired,
			}),
		}).isRequired,
	};

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
				<li className="skills__list-item" key={skill.id} style={style}>
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
					<Header headline={head} subhead={subhead} />
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
