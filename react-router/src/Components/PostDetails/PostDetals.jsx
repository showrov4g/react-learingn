import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetals = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const {id, title, body} = post;
    const navigate = useNavigate();
    const handleRemove =() =>{
        navigate(-1);
    };
    console.log(postId);

    return (
        <div>
            <h1>Post details Id: {id}</h1>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleRemove} className='btn btn-primary'>go back</button>
        </div>
    );
};

export default PostDetals;