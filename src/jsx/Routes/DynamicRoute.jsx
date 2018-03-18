import { PureComponent } from 'react';

export default class DynamicRoute extends PureComponent {
	state = {
		component: null,
	};
	componentWillMount() {
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
