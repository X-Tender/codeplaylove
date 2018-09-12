import React from 'react';
import HeaderImage from 'Components/HeaderImage';
import Header from 'Components/Header';
import Text from 'Components/Text';
import Article from 'Semantics/Article';
import Section from 'Semantics/Section';
import P from 'Components/P';
import A from 'Components/A';

const Imprint = () => (
	<React.Fragment>
		<HeaderImage
			src="assets/img/imprint/header.jpg"
			caption="Photo by Adria Berrocal Forcada on Unsplash"
		/>
		<Section>
			<Article>
				<Header subhead="Imprint" headline="In case of groopies" />

				<Text>
					<P>Paul Kamma</P>
					<P>
						<A href="mailto:paul@codeplaylove.de" title="paul@codeplaylove.de">
							contact@codeplaylove.de
						</A>
					</P>
				</Text>
			</Article>
		</Section>

		<Section>
			<Article>
				<Header subhead="Credits" headline="Thank you" />
				<Text>
					<P>
						Icons on startpage designed by{' '}
						<A
							href="https://www.flaticon.com/authors/eucalyp"
							target="_blank"
							title="eucalyp @ Flatcion.com"
						>
							eucalyp
						</A>{' '}
						from Flaticon.
					</P>
				</Text>
			</Article>
		</Section>
	</React.Fragment>
);

export default Imprint;
