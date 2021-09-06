import React, {useEffect, useState} from 'react';
import fetchData from '../api/prismic';
import {HashRouter as Router, Route, useParams} from 'react-router-dom';
import Input from './Input';
import ClubDetail from './ClubDetail';
import Pagination from './Pagination';
import Post from './Post';


const Clubs = () => {
	const [doc, setDocData] = useState([]);
	const [footballDivision, setFootballDivision] = useState({division: ''});

	useEffect(() => (
		fetchData('post')
			.then((response) => {
				const filteredCategory = response.results.filter((post) => {
					if (footballDivision.division ? post.data.division.uid === footballDivision.division : true) {
						return post;
					}
				});
				setDocData([...filteredCategory]);
			})
	), [setDocData, footballDivision.division]);

	return (
		<Router>
			<header>
				<h1>Clubs</h1>
			</header>
			<section>
				<Route>
					<Input footballDivision={footballDivision} setFootballDivision={setFootballDivision}/>
				</Route>
				<Route path="/category,:category?/:page">
					<Pagination>
						{doc.map(item => (<Post key={item.uid} post={item}/>))}
					</Pagination>
				</Route>
				<Route path="/club/:clubName">
					<ClubDetail doc={doc}/>
				</Route>
			</section>
		</Router>
	);
};

export default Clubs;