import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSocialLinks } from 'reducers/socialLinks';

const SocialLinkItem = ({ url, iconName, children }) => (
	<li className="social-links__list-item">
		<a
			className="social-links__link"
			href={url}
			name={children}
			rel="noopener noreferrer"
			target="_blank"
			title={children}
		>
			<i className={`fab fa-${iconName} fa-3x`} />
		</a>
	</li>
);

SocialLinkItem.propTypes = {
	url: PropTypes.string.isRequired,
	iconName: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
};

class SocialLinks extends React.Component {
	constructor(props) {
		super(props);

		if (!this.props.socialLinks.loaded) this.props.getSocialLinks();
	}

	render() {
		const { loaded, data } = this.props.socialLinks;
		if (!loaded) return null;

		const socialLinks = data.map(({ id, name, url, icon_name }) => (
			<SocialLinkItem iconName={icon_name} key={id} url={url}>
				{name}
			</SocialLinkItem>
		));

		return <ul className="social-links">{socialLinks}</ul>;
	}
}

SocialLinks.propTypes = {
	socialLinks: PropTypes.shape({
		loaded: PropTypes.bool.isRequired,
		data: PropTypes.array.isRequired,
	}).isRequired,
	getSocialLinks: PropTypes.func.isRequired,
};

const mapStateToProps = ({ socialLinks }) => ({ socialLinks });

export default connect(
	mapStateToProps,
	{ getSocialLinks }
)(SocialLinks);
