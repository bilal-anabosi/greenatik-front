import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    document.title = "This is Link blog";

    // Fetch blog data by ID
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_GREENATIK}/blogs/blogs/${id}`);
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <main>
        {/* section */}
        <div className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* breadcrumb */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/blog">Blog</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{blog.title}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* section */}
        <section className="my-lg-14 my-8">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* text */}
                <div className="mb-5">
                  <div className="mb-3 text-center"><Link to={`/blog-category/${blog.category}`}>{blog.category}</Link></div>
                  <h1 className="fw-bold text-center">{blog.title}</h1>
                  <div className="d-flex justify-content-center text-muted mt-4">
                    <span className="me-2"><small>{new Date(blog.createdAt).toLocaleDateString()}</small></span>
                    <span>
                      <small>
                        Read time:
                        <span className="text-dark fw-bold">{blog.readingTime} min</span>
                      </small>
                    </span>
                  </div>
                </div>
                {/* img */}
                <div className="mb-8">
                  <img src={`${process.env.REACT_APP_GREENATIK}/${blog.coverPicture}`} alt="Blog cover" className="img-fluid rounded" style={{ width: '848px', height: '389px', objectFit: 'cover' }} />
                </div>
                <div>
                  {/* Render HTML content */}
                  <div className="mb-4" dangerouslySetInnerHTML={{ __html: blog.content }} />
                  
                </div>
                <hr className="mt-8 mb-5" />
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <div className="d-flex align-items-center">
                    <img src={`${blog.owner.image.secure_url}`} alt="Author" className="rounded-circle avatar-md" />
                    <div className="ms-2 lh-1">
                      <h5 className="mb-0">{blog.owner.username}</h5>
                      <span className="text-primary small">Verified User</span>
                    </div>
                  </div>
                  <div>
                    {/* socials */}
                    <span className="ms-2 text-muted">Share</span>
                    <Link to="#!" className="ms-2 text-muted"><i className="bi bi-facebook fs-6" /></Link>
                    <Link to="#!" className="ms-2 text-muted"><i className="bi bi-twitter fs-6" /></Link>
                    <Link to="#!" className="ms-2 text-muted"><i className="bi bi-linkedin fs-6" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SingleBlog;
