import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) => {
	const {post} = props;
	return (
		<div style={{border: '2px solid red', margin: '1rem'}}>
			<Link exact to={`/club/${post.uid}`}>{post.data.club_name[0].text}</Link>
			<p>{post.data.short_info[0].text}</p>
			<p>data wpisu:{post.data.date}</p>
		</div>
	);
};

export default Post;