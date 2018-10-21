import React from 'react';
import { render } from 'react-dom';
import App from 'App';

require('disable-react-devtools');

if (module.hot) {
	module.hot.accept();
}

const target = document.querySelector('#app-root');

render(<App />, target);
