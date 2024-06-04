import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../../components/dashboard/sidebar';
import BlogRow from '../../../components/blog/BlogRow';
import PaginationBlog from '../../../components/blog/PaginationBlog';
import SearchForm from '../../../components/productsDash/SearchForm';
import SelectOption from '../../../components/productsDash/SelectOption';

const AllBlogsDash = () => {
    const [blogs, setBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 10;
    const token = localStorage.getItem('userToken');

    useEffect(() => {
        document.title = "Blog Dashboard";
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:4000/blogs/user-blogs', {
                    headers: {
                        Authorization: `group__${token}`
                    }
                });
                
                setBlogs(response.data.blogs);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };
        fetchBlogs();
    }, [token]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1);
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        setCurrentPage(1);
    };

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedOption === '' || blog.blogStatus.toLowerCase() === selectedOption.toLowerCase())
    );

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container pt-5 mt-5">
            <div className="row mb-8">
                <div className="col-lg-2 col-md-12 col-sm-12">
                    <Sidebar />
                </div>
                <div className="col-lg-10 col-md-12 col-sm-12">
                    <div className='mb-5 ms-lg-10 ps-lg-5 mt-5'>
                        <div className="row">
                            <div className="col-12 mb-0">
                                <h1 className="fw-bold">My Blogs</h1>
                            </div>
                            <div className="col-lg-2 col-md-4 col-12">
                                <a href="/dashboard/create-new-blog" className="btn btn-primary">Create New Blog</a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 ms-lg-8 ps-lg-5">
                        <SearchForm handleSearchChange={handleSearchChange} />
                        <SelectOption handleSelectChange={handleSelectChange} />
                    </div>
                    <div className="row mt-5">
                        <div className="col-xl-12 col-12 mb-5 ms-lg-10 ps-lg-8 ">
                            <div className="table-responsive">
                                <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                                    <thead className="bg-light">
                                        <tr>
                                            <th>Image</th>
                                            <th>Blog Title</th>
                                            <th>Category</th>
                                            <th>Status</th>
                                            <th>Create at</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentBlogs.map((blog) => (
                                            <BlogRow 
                                                key={blog._id} 
                                                blogId={blog._id} 
                                                cover={blog.coverPicture} 
                                                title={blog.title} 
                                                blogCategory={blog.category} 
                                                blogStatus={blog.status} 
                                                createdAt={blog.createdAt} 
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <PaginationBlog
                                blogsPerPage={blogsPerPage}
                                totalBlogs={filteredBlogs.length}
                                paginate={paginate}
                                currentPage={currentPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlogsDash;
