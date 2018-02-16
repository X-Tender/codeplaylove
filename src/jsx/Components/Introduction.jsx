import React from 'react';
import Button from 'Components/Button';
import NoWrap from 'Components/NoWrap';
import Header from 'Components/Header';
import P from 'Components/P';
import A from 'Components/A';
import Section from 'Semantics/Section';
import Article from 'Semantics/Article';

const Introduction = () => (
	<Section className="introduction content">
		<Article className="introduction__article">
			<Header className="introduction__head" subhead="Hello" headline="My name is Paul" />

			<div className="introduction__body">
				<P className="introduction__punchline">
					I'm a {~~((Date.now() - +new Date('1981-05-28')) / 31557600000)} year old Full-Stack
					Web-Developer from <NoWrap>Hannover – Germany.</NoWrap>
					<br />
					I currently work at{' '}
					<A href="//weareslim.de/" title="slim Interactive GmbH" target="_blank">
						slim Interactive
					</A>{' '}
					where we develop websites and interactive experiences. In my free time I make small games,
					that's where my coding roots are settled.
				</P>
				<P>
					This is my portfolio page where I'd like to show you some of my work.<br />
					Also it's a never ending sandbox for me to test out new stuff like currently react, redux,
					css grid and other technologies in a 'production-like' environment.
				</P>
			</div>

			<footer className="introduction__footer">
				<Button to="about" primary ghost fullWithSm>
					Learn more about me
				</Button>
			</footer>

			<div className="introduction__photo">
				<img
					className="introduction__img"
					src="assets/img/introduction/paulkamma.jpg"
					alt="Portrait of Paul Kamma"
					title="Hello, I'm Paul"
				/>
			</div>
		</Article>
	</Section>
);
export default Introduction;
