import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const propTypes = {
	children: PropTypes.node,
	to: PropTypes.string.isRequired,
	style: PropTypes.string.isRequired,
};

const defaultProps = {
	children: null,
};

const NavigationItem = ({ children, to, style }) => (
	<li className="navigation__list-item">
		<i className={`fas fa-${style}`} />
		<NavLink
			activeClassName="navigation__link--active"
			className={`navigation__link navigation__link--${style}`}
			exact
			to={to}
		>
			{children}
		</NavLink>
	</li>
);

NavigationItem.propTypes = propTypes;
NavigationItem.defaultProps = defaultProps;

export default NavigationItem;
