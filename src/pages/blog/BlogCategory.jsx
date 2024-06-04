import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogCard from '../../components/blog/BlogCard.jsx';
import PaginationBlog from '../../components/blog/PaginationBlog.jsx';

function BlogCategory() {
  const { category } = useParams();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    document.title = `${category} - GreeNatik Blog`;

    // Fetch blogs by category from the API
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`http://localhost:4000/blogs/category/${category}`);
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, [category]);

  return (
    <>
      {/* section */}
      <div className="mt-4">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            {/* col */}
            <div className="col-12">
              {/* breadcrumb */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="/home">Home</a></li>
                  <li className="breadcrumb-item"><a href="/blogs">Blog</a></li>
                  <li className="breadcrumb-item active" aria-current="page">{category}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* section */}
      <section className="mt-8">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-12 mb-4">
              {/* heading */}
              <h1 className="fw-bold">{category}</h1>
            </div>
          </div>
        </div>
      </section>
      {/* section */}
      <section className="mb-lg-14 mb-8">
        {/* container */}
        <div className="container">
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
          </div>
          <PaginationBlog />
        </div>
      </section>
    </>
  );
}

export default BlogCategory;
