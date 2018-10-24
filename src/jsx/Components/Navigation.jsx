import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavigationItem from './NavigationItem';
import Burger from './Burger';

class Navigation extends Component {
	static propTypes = {
		isOpen: PropTypes.bool,
	};

	static defaultProps = {
		isOpen: false,
	};

	render() {
		const classes = `navigation ${this.props.isOpen ? 'isOpen' : ''}`;
		return (
			<nav className={classes}>
				<Burger />
				<h1 className="navigation__title">
					<span className="navigation__title-word navigation__title-word--code">Code</span>
					<span className="navigation__title-word navigation__title-word--play">Play</span>
					<span className="navigation__title-word navigation__title-word--love">Love</span>
				</h1>
				<ul className="navigation__list">
					<NavigationItem style="home" to="/">
						Home
					</NavigationItem>
					<NavigationItem style="user-circle" to="/about">
						About
					</NavigationItem>
					<NavigationItem style="comment" to="/feeds">
						Feeds
					</NavigationItem>
					<NavigationItem style="gamepad" to="/games">
						Games
					</NavigationItem>
				</ul>
			</nav>
		);
	}
}

const mapStateToProps = ({ menu }) => ({
	isOpen: menu.isOpen,
});

export default connect(mapStateToProps)(Navigation);
