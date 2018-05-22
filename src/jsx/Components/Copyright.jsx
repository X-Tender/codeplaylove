import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = () => (
	<p className="copyright">
		© {new Date().getFullYear()} – <span className="copyright__name">Paul Kamma</span> –{' '}
		<Link className="hasUnderline" to="/imprint">
			Imprint
		</Link>{' '}
		<Link className="hasUnderline" to="/privacy">
			Privacy policy
		</Link>
	</p>
);

export default Copyright;
