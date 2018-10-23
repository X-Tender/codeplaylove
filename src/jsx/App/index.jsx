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
					<Route exact path="/" component={Home} />
					<Route exact path="/feeds" component={Feeds} />
					<Route exact path="/about" component={About} />
					<Route exact path="/games" component={Games} />
					<Route exact path="/imprint" component={Imprint} />
					<Route exact path="/privacy" component={Privacy} />
					<Route path="/games/:gameSlug" component={Game} />
				</main>
				<Footer />
			</>
		</ConnectedRouter>
	</Provider>
);

export default App;
