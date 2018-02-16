import React from 'react';
import Section from 'Semantics/Section';

const CodePlayLoveCard = ({ title, children, style }) => (
	<li className={`code-play-love-card code-play-love-card--${style}`}>
		<div className={`code-play-love-card__icon code-play-love-card__icon--${style}`} />
		<div className="code-play-love-card__content">
			<h3 className="code-play-love-card__head">{title}</h3>
			{children}
		</div>
	</li>
);

const CodePlayLoveCards = () => (
	<Section className="code-play-love-cards">
		<ul className="code-play-love-cards__list">
			<CodePlayLoveCard title="Code" style="code">
				<p>JavaScript, PHP, SQL and C# are my weapons of choice when it comes to programming.</p>
				<p>Theres are mostly applied for Web-Development at the front– and backend.</p>
				<p>
					From time to time I have to opportinuty to do some c# code in Unity3D, which is a great
					change.
				</p>
			</CodePlayLoveCard>

			<CodePlayLoveCard title="Play" style="play">
				<p>Game-Development is still my passion which I try to follow in my spare time.</p>
				<p>When I have the possibility I try to attend Game-Jams like the Ludum-Dare.</p>
				<p>
					In this case is playing games also a joy for me, mainly small games because I didn't have
					the time anymore for titles like Fallout or GTA.
				</p>
			</CodePlayLoveCard>

			<CodePlayLoveCard title="Love" style="love">
				<p>Beside all of these digital technologies I need some love sometimes.</p>
				<p>
					I get this from my family, food, watching movies or just climb up a mountain when I have
					the opportunity when visiting my in-laws.
				</p>
				<p>
					I share some of these moments at Instagram and every 'Like' is a loveletter to my soul 🤗
				</p>
			</CodePlayLoveCard>
		</ul>
	</Section>
);

export default CodePlayLoveCards;
