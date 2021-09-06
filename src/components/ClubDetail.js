import React from 'react';
import {useParams, useHistory} from 'react-router-dom';

const ClubDetail = ({doc}) => {
	const {clubName} = useParams();
	const history = useHistory();

	const selectedClub = doc.find((item) => {
		return item.uid === clubName;
	});

	const {data} = selectedClub;

	const clubTitle = data.club_name[0].text;
	const clubLogo = {
		photo: data.logo_type.url,
		altText: data.logo_type.alt
	};
	const clubDivision = data.division.uid;

	const handleBackClick = () => {
		history.goBack();
	}

	return (
		<div>
			<h1>{clubTitle}</h1>
			<img src={clubLogo.photo} alt={clubLogo.altText} style={{maxWidth: '200px'}}/>
			<h3>{clubDivision}</h3>
			<button onClick={handleBackClick}>Back</button>
		</div>
	);
};

export default ClubDetail;