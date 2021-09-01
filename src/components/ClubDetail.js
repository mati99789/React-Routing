import React from 'react';
import {useParams, useHistory} from 'react-router-dom';

const ClubDetail = ({doc}) => {
	const {clubName} = useParams();
	const history = useHistory();
	const selectedClub = doc.filter((item) => {
		return item.uid === clubName;
	});

	const clubTitle = selectedClub[0].data.club_name[0].text;
	const clubLogo = {
		photo: selectedClub[0].data.logo_type.url,
		altText: selectedClub[0].data.logo_type.alt
	};
	const clubDivision = selectedClub[0].data.category_name.uid;

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