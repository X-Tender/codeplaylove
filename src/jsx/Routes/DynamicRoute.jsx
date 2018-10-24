import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class DynamicRoute extends PureComponent {
	static propTypes = {
		load: PropTypes.func.isRequired,
		children: PropTypes.number.isRequired,
	};

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

export default DynamicRoute;
