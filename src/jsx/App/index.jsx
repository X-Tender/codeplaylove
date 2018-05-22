import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

import DynamicRoute from 'Routes/DynamicRoute';

import CodenameGordon from 'Routes/Games/CodenameGordon';
import ColdIron from 'Routes/Games/ColdIron';
import IrishSushiSmuggler from 'Routes/Games/IrishSushiSmuggler';
import MineMatcher from 'Routes/Games/MineMatcher';
import StealthPervert from 'Routes/Games/StealthPervert';
import Void from 'Routes/Games/Void';
import ConelMan from 'Routes/Games/ConelMan';

import Footer from 'Components/Footer';
import Navigation from 'Components/Navigation';

const Home = props => (
	<DynamicRoute load={() => import('./../Routes/Home')}>
		{Component => (Component === null ? null : <Component {...props} />)}
	</DynamicRoute>
);

const About = props => (
	<DynamicRoute load={() => import('./../Routes/About')}>
		{Component => (Component === null ? null : <Component {...props} />)}
	</DynamicRoute>
);

const Feeds = props => (
	<DynamicRoute load={() => import('./../Routes/Feeds')}>
		{Component => (Component === null ? null : <Component {...props} />)}
	</DynamicRoute>
);

const Games = props => (
	<DynamicRoute load={() => import('./../Routes/Games')}>
		{Component => (Component === null ? null : <Component {...props} />)}
	</DynamicRoute>
);

const Imprint = props => (
	<DynamicRoute load={() => import('./../Routes/Imprint')}>
		{Component => (Component === null ? null : <Component {...props} />)}
	</DynamicRoute>
);

const Privacy = props => (
	<DynamicRoute load={() => import('./../Routes/Privacy')}>
		{Component => (Component === null ? null : <Component {...props} />)}
	</DynamicRoute>
);

const App = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<React.Fragment>
				<Navigation />
				<main>
					<Route exact path="/" component={Home} />
					<Route exact path="/feeds" component={Feeds} />
					<Route exact path="/about" component={About} />
					<Route exact path="/games" component={Games} />
					<Route exact path="/imprint" component={Imprint} />
					<Route exact path="/privacy" component={Privacy} />
					<Route exact path="/games/codename-gordon" component={CodenameGordon} />
					<Route exact path="/games/cold-iron" component={ColdIron} />
					<Route exact path="/games/irish-sushi-smuggler" component={IrishSushiSmuggler} />
					<Route exact path="/games/mine-matcher" component={MineMatcher} />
					<Route exact path="/games/stealth-pervert" component={StealthPervert} />
					<Route exact path="/games/void" component={Void} />
					<Route exact path="/games/conel-man" component={ConelMan} />
				</main>
				<Footer />
			</React.Fragment>
		</ConnectedRouter>
	</Provider>
);

export default App;
