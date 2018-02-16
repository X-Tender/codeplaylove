import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = () => (
	<p className="copyright">
		© {new Date().getFullYear()} – <span className="copyright__name">Paul Kamma</span> –{' '}
		<Link className="hasUnderline" to="/imprint">
			Imprint
		</Link>
	</p>
);

export default Copyright;
