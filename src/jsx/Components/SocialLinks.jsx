import React from 'react';
import { connect } from 'react-redux';
import { getSocialLinks } from 'reducers/socialLinks';

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

class SocialLinks extends React.Component {
	constructor(props) {
		super(props);

		if (!this.props.socialLinks.loaded) this.props.getSocialLinks();
	}

	render() {
		const { loaded, data } = this.props.socialLinks;
		if (!loaded) return null;

		const socialLinks = data.map(({ id, name, url, icon_name }) => (
			<SocialLinkItem key={id} url={url} iconName={icon_name}>
				{name}
			</SocialLinkItem>
		));

		return <ul className="social-links">{socialLinks}</ul>;
	}
}

const mapStateToProps = ({ socialLinks }) => ({ socialLinks });

export default connect(
	mapStateToProps,
	{ getSocialLinks }
)(SocialLinks);
