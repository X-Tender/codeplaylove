import React from 'react';

const SocialLinkItem = ({ url, iconName, children }) => (
	<li className="social-links__list-item">
		<a
			target="_blank"
			rel="noopener noreferrer"
			href={url}
			name={children}
			className="social-links__link"
			title={children}
		>
			<i className={`fab fa-${iconName} fa-3x`} />
		</a>
	</li>
);

const SocialLinks = () => (
	<ul className="social-links">
		<SocialLinkItem url="//github.com/X-Tender" iconName="github">
			GitHub
		</SocialLinkItem>
		<SocialLinkItem url="//twitter.com/xtender" iconName="twitter">
			Twitter
		</SocialLinkItem>
		<SocialLinkItem url="//instagram.com/xtender" iconName="instagram">
			Instagram
		</SocialLinkItem>
		<SocialLinkItem url="//facebook.com/paul.kamma" iconName="facebook">
			Facebook
		</SocialLinkItem>
		<SocialLinkItem url="//xing.com/profile/Paul_Kamma" iconName="xing">
			XING
		</SocialLinkItem>
	</ul>
);
export default SocialLinks;
