import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class DynamicRoute extends PureComponent {
	state = {
		component: null,
	};

	componentDidMount() {
		this.props.load().then(component => {
			this.setState(() => ({
				component: component.default ? component.default : component,
			}));
		});
	}

	render() {
		return this.props.children(this.state.component);
	}
}

DynamicRoute.propTypes = {
	load: PropTypes.func.isRequired,
	children: PropTypes.number.isRequired,
};
