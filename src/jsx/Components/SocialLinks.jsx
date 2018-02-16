import React from 'react';

const SocialLinkItem = ({ url, children }) => (
	<li className="social-links__list-item">
		<a
			target="_blank"
			rel="noopener noreferrer"
			href={url}
			name={children}
			className="social-links__link"
			title={children}
		>
			<i className={`fab fa-${children.toLowerCase()} fa-3x`} />
		</a>
	</li>
);

const SocialLinks = () => (
	<ul className="social-links">
		<SocialLinkItem url="//github.com/X-Tender">GitHub</SocialLinkItem>
		<SocialLinkItem url="//twitter.com/xtender">Twitter</SocialLinkItem>
		<SocialLinkItem url="//instagram.com/xtender">Instagram</SocialLinkItem>
		<SocialLinkItem url="//facebook.com/paul.kamma">Facebook</SocialLinkItem>
		<SocialLinkItem url="//xing.com/profile/Paul_Kamma">XING</SocialLinkItem>
	</ul>
);
export default SocialLinks;
