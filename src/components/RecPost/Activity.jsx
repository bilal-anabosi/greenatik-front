import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Activity = () => {

    const [likedPosts, setLikedPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLikedPosts = async () => {
            try {
                const token = localStorage.getItem('userToken');
                if (!token) {
                    setError('No token found');
                    setLoading(false);
                    return;
                }

                console.log(token);

                const response = await axios.post('http://localhost:4000/singlepost/likedposts',{} ,{
                    headers: {
                        'Authorization': `group__${token}`
                    }
                });
                setLikedPosts(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.response ? error.response.data.error : 'Error fetching liked posts');
                setLoading(false);
            }
        };

        fetchLikedPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
    <div>

<div className="col-lg-9 col-md-8 col-12">
  <div className="py-6 p-md-6 p-lg-10">
    {/* heading */}
    <h2 className="mb-6">Posts you've liked</h2>
    <div className="table-responsive-xxl border-0">
      {/* Table */}
      <table className="table mb-0 text-nowrap table-centered">
        {/* Table Head */}
        <thead className="bg-light">
          <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Date</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>
                            {likedPosts.map((post, index) => (
                                <tr key={index}>
                                    <td className="align-middle border-top-0 w-0">
                                        <a href="# "><img src={post.image} alt="Profile" className="icon-shape icon-xl" /></a>
                                    </td>
                                    <td className="align-middle border-top-0">
                                        <a href="# " className="fw-semibold text-inherit">
                                            <h6 className="mb-0">{post.username}</h6>
                                        </a>
                                        <span><small className="text-muted">{post.quantity}</small></span>
                                    </td>
                                    <td className="align-middle border-top-0">{post.dateLiked}</td>
                                    <td className="align-middle border-top-0">
                                        <button type="button" className="btn btn-primary btn-sm" disabled>Pending</button>
                                    </td>
                                    <td className="text-muted align-middle border-top-0">
                                        <a href={`/singlepost/${post.postId}`} className="text-inherit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg></a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
      </table>
    </div>
  </div>
</div>





    </div>
    );
};

export default Activity;
