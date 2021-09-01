import React, {useEffect, useState} from 'react';
import fetchData from '../api/prismic';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Input from './Input';
import ClubDetail from './ClubDetail';
import NotFound from './NotFound';
import Pagination from './Pagination';
import Post from './Post';

const Clubs = () => {
	const [doc, setDocData] = useState([]);

	useEffect(() => (
		fetchData('post')
			.then((response) => (
				setDocData([...response.results])
			))
	), [setDocData]);

	return (
		<Router>
			<header>
				<h1>Clubs</h1>
			</header>
			<section>
				<Route>
					<Input/>
				</Route>
				<Route path="/category,:category?/:page">
					<Pagination>
						{doc.map(item => (<Post key={item.uid} post={item}/>))}
					</Pagination>
				</Route>
				<Route path="/club/:clubName">
					<ClubDetail doc={doc}/>
				</Route>
				{/*<Route path="/404.html">*/}
				{/*	<NotFound/>*/}
				{/*</Route>*/}
				{/*<Route>*/}
				{/*	<Redirect to="/404.html"/>*/}
				{/*</Route>*/}
			</section>
		</Router>
	);
};

export default Clubs;