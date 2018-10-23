import React from 'react';
import PropTypes from 'prop-types';

const HeaderImage = ({ src, isPixelated, caption }) => (
	<div className="header-image">
		<img
			className={`header-image__img ${isPixelated ? 'header-image__img--pixelate' : ''}`}
			src={src}
		/>
		{caption && <span className="header-image__caption">{caption}</span>}
	</div>
);

HeaderImage.propTypes = {
	src: PropTypes.string.isRequired,
	isPixelated: PropTypes.bool,
	caption: PropTypes.string,
};

HeaderImage.defaultProps = {
	isPixelated: false,
	caption: null,
};

export default HeaderImage;
