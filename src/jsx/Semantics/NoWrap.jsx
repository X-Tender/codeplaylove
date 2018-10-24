import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	children: PropTypes.number.isRequired,
};

const NoWrap = ({ children }) => <span className="no-wrap">{children}</span>;

NoWrap.propTypes = propTypes;

export default NoWrap;
