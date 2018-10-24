import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import convert from 'htmr';
import { getIntroduction } from 'reducers/introduction';
import Button from 'Components/Button';
import Header from 'Components/Header';
import Section from 'Semantics/Section';
import Article from 'Semantics/Article';
import P from 'Semantics/P';
import A from 'Semantics/A';

class Introduction extends PureComponent {
	static propTypes = {
		introduction: PropTypes.shape({
			copy: PropTypes.string.isRequired,
			head: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			punchline: PropTypes.string.isRequired,
			subhead: PropTypes.string.isRequired,
		}).isRequired,
		getIntroduction: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);

		if (this.props.introduction.copy === null) this.props.getIntroduction();
	}

	render() {
		const { copy, head, image, punchline, subhead } = this.props.introduction;

		return (
			<Section className="introduction content">
				<Article className="introduction__article">
					<Header className="introduction__head" headline={head} subhead={subhead} />
					<div className="introduction__body">
						{punchline &&
							React.cloneElement(
								convert(punchline, {
									transform: {
										p: P,
										a: A,
									},
								}),
								{
									className: 'introduction__punchline',
									key: 'punchline',
								}
							)}
						{copy &&
							React.cloneElement(
								convert(copy, {
									transform: {
										p: P,
									},
								}),
								{ key: 'copy' }
							)}
					</div>

					<footer className="introduction__footer">
						<Button isFullWithSm isGhost isPrimary to="about">
							Learn more about me
						</Button>
					</footer>

					<div className="introduction__photo">
						{image && (
							<img
								alt="Portrait of Paul Kamma"
								className="introduction__img"
								src={image}
								title="Hello, I'm Paul"
							/>
						)}
					</div>
				</Article>
			</Section>
		);
	}
}

const mapStateToProps = ({ introduction }) => ({
	introduction,
});

export default connect(
	mapStateToProps,
	{ getIntroduction }
)(Introduction);
