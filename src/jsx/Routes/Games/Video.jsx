import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveEmbed from 'react-responsive-embed';

const propTypes = {
	youtubeId: PropTypes.string.isRequired,
	className: PropTypes.string,
	ratio: PropTypes.string,
};

const defaultProps = {
	className: null,
	ratio: '4:3',
};

const Video = ({ youtubeId, className, ratio }) => (
	<div className={className} style={{ gridColumn: '1/-1' }}>
		<ResponsiveEmbed
			allowFullScreen
			ratio={ratio}
			src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&amp;showinfo=0&theme=white`}
		/>
	</div>
);

Video.propTypes = propTypes;
Video.defaultProps = defaultProps;

export default Video;
