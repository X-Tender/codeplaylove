import React from 'react';
import PropTypes from 'prop-types';

const HeaderImage = ({ src, pixelate, caption }) => (
	<div className="header-image">
		<img
			className={`header-image__img ${pixelate ? 'header-image__img--pixelate' : ''}`}
			src={src}
		/>
		{caption && <span className="header-image__caption">{caption}</span>}
	</div>
);

HeaderImage.propTypes = {
	src: PropTypes.string.isRequired,
	pixelate: PropTypes.bool,
	caption: PropTypes.string,
};

HeaderImage.defaultProps = {
	pixelate: false,
};

export default HeaderImage;
