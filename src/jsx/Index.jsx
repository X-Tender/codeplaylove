import React from 'react';
import { render } from 'react-dom';
import App from 'App';

if (process.env.NODE_ENV === 'production') {
	/*
	I disable the deactivation of the devtools.
	I mean when I make the source public it is useless
	to disable the devtools, this way any currious dev
	can peek at the stuff 😀
	*/
	/*
	if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
		for (const [key, value] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
			window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value === 'function' ? () => {} : null;
		}
	}
	*/
}

if (module.hot) {
	module.hot.accept();
}

const target = document.querySelector('#app-root');

render(<App />, target);
