import React, { useEffect, useState } from 'react';
import PaginationBlog from '../../components/blog/PaginationBlog';
import BlogCard from '../../components/blog/BlogCard';
import CategoryCard from '../../components/blog/CategoryCard';

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    document.title = "GreeNatik Blog"; 

    // Fetch blogs from the API
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:4000/blogs/blogs'); // Adjust the URL as per your backend setup
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div>
        <div className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* breadcrumb */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="/home">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Blog</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* section */}
        <section className="mt-8">
          <div className="container">
            <div className="row">
              {/* logo */}
              <div className="col-12">
                <h1 className="fw-bold">GreeNatik Blog</h1>
              </div>
            </div>
          </div>
        </section>

         {/* this is a static blog because of its importance to be always here the rest are not static */}
        
        {/* section */}
        <section className="mt-6 mb-lg-14 mb-8">
          {/* container */}
          <div className="container">
            <div className="row d-flex align-items-center mb-8">
              <div className="col-12 col-md-12 col-lg-8">
                <a href="/openingblog">
                  {/* img */}
                  <div className="img-zoom">
                    <img src="https://i.imgur.com/X3yjmRP.png" alt="ALT" className="img-fluid w-100" />
                  </div>
                </a>
              </div>
              {/* text */}
              <div className="col-12 col-md-12 col-lg-4">
                <div className="ps-lg-8 mt-8 mt-lg-0">
                  <h2 className="mb-3"><a href="/openingblog" className="text-inherit">Will sustainable living make you happier?</a></h2>
                  <p>
                    clean air, fresh water, green trees…I think everyone can agree that a clean, sustainable environment is better for everyone.
                  </p>
                  <div className="d-flex justify-content-between text-muted">
                    <span><small>22 April 2023</small></span>
                    <span>
                      <small>
                        Read time:
                        <span className="text-dark fw-bold">12min</span>
                      </small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-lg-14 my-8">
              <div className="container">
                <div className="row">
                  <div className="col-12 mb-6">
                    <h3 className="mb-0">Featured Categories</h3>
                  </div>
                </div>
              </div>
              <div className="container">
                {/* row */}
                <div className="table-responsive-xxl">
                  <div className="row flex-nowrap">
                    <CategoryCard card_img='https://i.imgur.com/cp1Va46.png' color='bg-success' title='lifestyle' link="http://localhost:3000/blog-category" />
                    <CategoryCard card_img='https://i.imgur.com/rQEu9RT.png' color='bg-secondary' title='climate change' />
                    <CategoryCard card_img='https://i.imgur.com/JlRwd3y.png' color='bg-dark-danger' title='eco-friendly' />
                    <CategoryCard card_img='https://i.imgur.com/YGDiTAA.png' color='bg-primary' title='recycle' />
                    <CategoryCard card_img='https://i.imgur.com/C2b4YFo.png' color='bg-warning' title='family' />
                  </div>
                </div>
              </div>
            </div>

            {/* row */}
            <div className="row">
              {blogs.map(blog => (
                <BlogCard
                  key={blog._id}
                  blogId={blog._id}
                  cover={blog.coverPicture}
                  category={blog.category}
                  title={blog.title}
                  summary={blog.summary}
                  createdAt={new Date(blog.createdAt).toLocaleDateString()}
                  readingTime={blog.readingTime}
                />
              ))}
              <PaginationBlog />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AllBlogs;