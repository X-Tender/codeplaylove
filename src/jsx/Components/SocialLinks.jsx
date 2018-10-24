import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSocialLinks } from 'reducers/socialLinks';
import SocialLinkItem from './SocialLinkItem';

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
