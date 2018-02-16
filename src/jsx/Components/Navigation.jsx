import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Burger from './Burger';

const NavigItem = ({ children, to, style }) => (
	<li className="navigation__list-item">
		<i className={`fas fa-${style}`} />
		<NavLink
			exact
			activeClassName="navigation__link--active"
			className={`navigation__link navigation__link--${style}`}
			to={to}
		>
			{children}
		</NavLink>
	</li>
);

class Navigation extends Component {
	render() {
		const classes = `navigation ${this.props.open ? 'isOpen' : ''}`;
		return (
			<nav className={classes}>
				<Burger />
				<h1 className="navigation__title">
					<span className="navigation__title-word navigation__title-word--code">Code</span>
					<span className="navigation__title-word navigation__title-word--play">Play</span>
					<span className="navigation__title-word navigation__title-word--love">Love</span>
				</h1>
				<ul className="navigation__list">
					<NavigItem style="home" to="/">
						Home
					</NavigItem>
					<NavigItem style="user-circle" to="/about">
						About
					</NavigItem>
					<NavigItem style="comment" to="/feeds">
						Feeds
					</NavigItem>
					<NavigItem style="gamepad" to="/games">
						Games
					</NavigItem>
				</ul>
			</nav>
		);
	}
}

const mapStateToProps = ({ menu }) => ({
	open: menu.open,
});

export default connect(mapStateToProps)(Navigation);
