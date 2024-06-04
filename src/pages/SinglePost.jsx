// src/pages/Home.js
import React from 'react';
import PostI from '../components/RecPost/Posts/PostI';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
    const { id } = useParams();
return (


<div className=' container'>

<PostI postId={id} />

</div>



);
};

export default SinglePost;
