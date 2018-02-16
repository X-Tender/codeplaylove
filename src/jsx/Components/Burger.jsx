import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from 'reducers/menu';

export class Burger extends Component {
	state = { open: false };

	constructor(props) {
		super(props);
		this.onMenuButtonClick = ::this.onMenuButtonClick;
	}

	onMenuButtonClick() {
		this.props.toggleMenu();
	}

	render() {
		const classes = `burger ${this.props.open ? 'isOpen' : ''}`;
		return (
			<button onClick={this.onMenuButtonClick} className={classes} type="button" title="Menu">
				<span className="burger__line burger__line--top" />
				<span className="burger__line burger__line--center" />
				<span className="burger__line burger__line--bottom" />
			</button>
		);
	}
}

const mapStateToProps = ({ menu }) => ({
	open: menu.open,
});

const mapDispatchToProps = {
	toggleMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Burger);
