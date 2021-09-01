import React from 'react';
import {Link, useParams} from 'react-router-dom';

const Pagination = (props) => {
	const {category = '', page} = useParams();
	const path = `/category,${category}`;
	const {children, limit = 6} = props;
	const length = children.length;
	const begin = limit * (page - 1);
	const end = page * limit;
	const pages = Math.ceil(length / limit);
	const links = (new Array(pages).fill(0)).map((item, index) => <li key={index}>
			<Link to={`${path}/${index + 1}`}>{index + 1}</Link>
		</li>
	);

	return (
		<>
			{children.slice(begin, end)}
			<nav>
				<ul>{links}</ul>
			</nav>

		</>
	);

};

export default Pagination;