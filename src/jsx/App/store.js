import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import reducer from 'reducers';

export const history = createHistory();

const middleware = [thunk, routerMiddleware(history)];

/*
This way I would prevet that the redux tools are available in production mode.
I disable this because I would like to show it, also the source is availbale anyway
*/

/*
const devTools =
	process.env.NODE_ENV === 'production'
		? applyMiddleware(...middleware)
		: composeWithDevTools(applyMiddleware(...middleware));

	const store = createStore(reducer, devTools);
*/

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
