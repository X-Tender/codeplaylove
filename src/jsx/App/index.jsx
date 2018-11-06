import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

import DynamicRoute from 'Routes/DynamicRoute';

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

const Game = props => (
	<DynamicRoute load={() => import('./../Routes/Games/Game')}>
		{Component => (Component === null ? null : <Component {...props} />)}
	</DynamicRoute>
);

const App = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<>
				<Navigation />
				<main>
					<Route component={Home} exact path="/" />
					<Route component={Feeds} exact path="/feeds" />
					<Route component={About} exact path="/about" />
					<Route component={Games} exact path="/games" />
					<Route component={Imprint} exact path="/imprint" />
					<Route component={Privacy} exact path="/privacy" />
					<Route component={Game} path="/games/:gameSlug" />
				</main>
				<Footer />
			</>
		</ConnectedRouter>
	</Provider>
);

export default App;
