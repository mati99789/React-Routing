import React, {useEffect, useState} from 'react';
import fetchData from '../api/prismic';
import {useHistory, Redirect} from 'react-router-dom';

const Input = ({footballDivision, setFootballDivision}) => {
	const [options, setOptions] = useState([<option key="nothing" value=""></option>]);
	const history = useHistory();

	const handleChange = (e) => {
		const {value} = e.target;
		setFootballDivision((prev) => {
			return {
				...prev,
				division: value
			};
		});
		history.push(`/category,${value}`);
	};

	useEffect(() => {
		fetchData('category')
			.then(resp => {
				const newOptions = resp.results.map(category => (
					<option key={category.uid} value={category.uid}>
						{category.uid}
					</option>)
				);
				setOptions([...options, ...newOptions]);
			});
	}, []);

	return (
		<>
			<form>
				<label htmlFor="category">Category: </label>
				<select form="category" onChange={handleChange}>
					{options}
				</select>
			</form>
			<Redirect to={`/category,${footballDivision.division}/1`}/>
		</>
	);
};

export default Input;