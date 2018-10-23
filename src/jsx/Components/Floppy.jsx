import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Floppy = ({ cover, to, children }) => (
	<Link className="floppy" title={children} to={to}>
		<img className="floppy__disc" src="assets/img/games/floppy.svg" />
		<img className="floppy__cover" src={cover} />
	</Link>
);

Floppy.propTypes = {
	cover: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
};

export default Floppy;
