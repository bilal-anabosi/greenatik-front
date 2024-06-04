import React from 'react';
import Postss from './Postss';
import BarI from '../BarI';

const PostI = ({ postId }) => {
    

    return (
<div>
<BarI Title="Post" />

<Postss  postId={postId} />

</div>

);
};
export default PostI;