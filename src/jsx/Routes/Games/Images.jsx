import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	images: PropTypes.array,
};

const defaultProps = {
	images: [],
};

const Images = ({ images }) => {
	const imageItems = images.map(image => (
		<img className="images-list__img" key={image} src={image} />
	));
	return <ul className={`images-list images-list--${images.length}`}>{imageItems}</ul>;
};

Images.propTypes = propTypes;
Images.defaultProps = defaultProps;

export default Images;
