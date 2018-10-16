import React, { PureComponent } from 'react';
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
	constructor(props) {
		super(props);

		if (this.props.introduction.copy === null) this.props.getIntroduction();
	}

	render() {
		const { copy, head, image, punchline, subhead } = this.props.introduction;

		return (
			<Section className="introduction content">
				<Article className="introduction__article">
					<Header className="introduction__head" subhead={subhead} headline={head} />
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
						<Button to="about" primary ghost fullWithSm>
							Learn more about me
						</Button>
					</footer>

					<div className="introduction__photo">
						{image && (
							<img
								className="introduction__img"
								src={image}
								alt="Portrait of Paul Kamma"
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
