import React from 'react';
import PropTypes from 'prop-types';
import A from 'Semantics/A';

const propTypes = {
	children: PropTypes.string.isRequired,
	link: PropTypes.string,
};

const defaultProps = {
	link: null,
};

const UsesListItem = ({ link, children }) => (
	<li className="uses__list-item">
		{link ? (
			<A href={link} target="_blank">
				{children}
			</A>
		) : (
			children
		)}
	</li>
);

UsesListItem.propTypes = propTypes;
UsesListItem.defaultProps = defaultProps;

export default UsesListItem;
