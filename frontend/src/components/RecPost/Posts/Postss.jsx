import React, { useState, useEffect } from 'react';
import './Postss.css';
import FormII from '../Formss/FormII';
import FormI from './FormI';
import axios from 'axios';

const Postss = ({ postId }) => {

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    //Check if the post has already been liked by the user    
    const liked = localStorage.getItem(`post_${postId}_liked`);
    if (liked === 'true') {
        setIsClicked(true);
    }
}, [postId]);

  const handleLike = async () => {
      try {
          // Retrieve the token from localStorage
          const token = localStorage.getItem('userToken');
          console.log(token);

          // Send the like request to the server with the token
          const response = await axios.post(`http://localhost:4000/singlepost/${postId}/likes`, null, {
              headers: {
                  'Authorization': `group__${token}`
              }
          });

        // Check the response from the server
        if (response.status === 201) {
          // If the like was added successfully
          setIsClicked(true);
          // If successful, update the like status and store it in localStorage
          localStorage.setItem(`post_${postId}_liked`, 'true');
          console.log('Post liked');
      } else {
          // If there's any other response status (including error statuses)
          setIsClicked(false);
          console.log('post already liked');
      }
  } catch (error) {
      console.error('Error toggling like:', error);
      setIsClicked(false); // Set isClicked to false in case of error
  }
  };

  const [posts, setPost] = useState(null);
  //fetch post data
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/singlepost/${postId}`);
        setPost(response.data); // Assuming your backend sends back the whole post object
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };
    fetchPostData();
  }, [postId]);

  if (!posts) {
    return <div>error fetching...</div>;
  }

  console.log(posts);

  //copy post link
  const handleCopyPostLink = () => {
    const postLink = `${window.location.origin}/singlepost/${postId}`;
    navigator.clipboard.writeText(postLink);
    alert('Post link copied to clipboard!');
  };
  
  return (
    <div>
      <div className="sa">
        <div className="card mb-4 bg-light border-0" style={{ marginTop: '50px' }}>
          <div className="card-body p-9">
            <div className="mb-0 fs-1">
              <div className="card">
                <div className="card-bodyy">
                  <div className="d-md-flex flex-wrap align-items-start text-center text-md-start">
                    <div className="mb-2">
                      <div className="avatar avatar-xl ">
                      <img
  className="avatar-img border-0"
  alt="..."
  src={posts.owner.image || './favicon.ico'}
/>
                      </div>
                    </div>
                    <div className="ms-md-4 mt-3">
                      <h1 className="h5 mb-0">
                        {posts.owner.username}
                        <button type="button" className="btn btn-primary btn-sm" disabled>
                          Pending
                        </button>
                      </h1>
                      <ul className="nav nav-divider justify-content-center justify-content-md-start">
                        <li className="nav-item">{posts.owner.address}</li>
                      </ul>
                    </div>
                    <div className="d-flex justify-content-center justify-content-md-start align-items-center mt-3 ms-lg-auto">
                      <div className="s">
                        <button className={`btn btn-primary ${isClicked ? 'red-heart' : ''}`} type="button" onClick={handleLike}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                          </svg>
                        </button>
                        <button className="btn btn-primary" type="button" onClick={handleCopyPostLink}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-box-arrow-up" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z" />
                            <path fillRule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

<div className="container">
  <div className="row justify-content-between">
    <div className="col-md-6 col-lg-2 mb-4">
      <section className="my-lg-14 my-8">
        <div className="mb-8 mb-xl-0">
          <div className="mb-6"/>
          <h3 className="h5 mb-3">Requesting</h3>
          <FormI description1={posts.requesting} />
        </div>
      </section>
    </div>
    <div className="col-md-6 col-lg-2 mb-4">
      <section className="my-lg-14 my-8">
        <div className="mb-8 mb-xl-0">
          <div className="mb-6"/>
          <h3 className="h5 mb-3">Quantity</h3>
          <FormI description2={posts.quantity} />
        </div>
      </section>
    </div>
    <div className="col-md-6 col-lg-2 mb-4">
      <section className="my-lg-14 my-8">
        <div className="mb-8 mb-xl-0">
          <div className="mb-6"/>
          <h3 className="h5 mb-3">Condition</h3>
          <FormI description3={posts.condition} />
        </div>
      </section>
    </div>
    <div className="col-md-6 col-lg-2 mb-4">
      <section className="my-lg-14 my-8">
        <div className="mb-8 mb-xl-0">
          <div className="mb-6"/>
          <h3 className="h5 mb-3">PickUp Details</h3>
          <FormI description4= {posts.pickUpDetails} />
        </div>
      </section>
    </div>
    <div className="col-md-6 col-lg-2 mb-4">
      <section className="my-lg-14 my-8">
        <div className="mb-8 mb-xl-0">
          <div className="mb-6"/>
          <h3 className="h5 mb-3">Date</h3>
          <FormI description4= {posts.date} />
        </div>
      </section>
    </div>
  </div>
</div>
              <hr />
              <div className="progress" style={{ marginTop: '60px', height: '25px' }}>
              <div className="progress-bar" role="progressbar" style={{ width: `${(posts.provided / posts.quantity) * 100}%` }} aria-valuenow={(posts.provided / posts.quantity) * 100} aria-valuemin={0} aria-valuemax={100}>{(posts.provided / posts.quantity) * 100}%</div>;
              </div>
              <hr />
              <FormII  postId={postId} />
            </div>
          </div>
        </div>
      </div>
      <div className="x">
        <div className="card-header border-0 pb-0">
          <br />
          <br />
          <br />
          <h1 className="h4 card-title mb-0"> </h1>
          <a href='/all-posts'> 
            <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="#4EA933" className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16" transform="translate(60,-50)">
            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
            </svg>   
          </a>
          <br />
        </div>
      </div>
    </div>
  );
};
export default Postss;