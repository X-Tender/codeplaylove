import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleMenu } from 'reducers/menu';

export class Burger extends Component {
	static propTypes = {
		isOpen: PropTypes.bool,
		toggleMenu: PropTypes.func.isRequired,
	};

	static defaultProps = {
		isOpen: false,
	};

	onMenuButtonClick = () => {
		this.props.toggleMenu();
	};

	render() {
		const classes = `burger ${this.props.isOpen ? 'isOpen' : ''}`;
		return (
			<button className={classes} onClick={this.onMenuButtonClick} title="Menu" type="button">
				<span className="burger__line burger__line--top" />
				<span className="burger__line burger__line--center" />
				<span className="burger__line burger__line--bottom" />
			</button>
		);
	}
}

const mapStateToProps = ({ menu: { isOpen } }) => ({ isOpen });

export default connect(
	mapStateToProps,
	{ toggleMenu }
)(Burger);
