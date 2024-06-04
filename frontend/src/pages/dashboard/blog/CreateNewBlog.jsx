import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../../../components/dashboard/sidebar';
import Editor from '../../../components/blog/BlogTextEditor';
import { useNavigate } from 'react-router-dom';

const CreateNewBlog = () => {
    const [formData, setFormData] = useState({
        cover: null, 
        title: '',
        summary: '',
        readingTime: '',
        content: '',
        category: '',  
        metaData: '',
        blogStatus: 'Draft'
    });
    const token = localStorage.getItem('userToken');
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();

        for (const key in formData) {
            if (key === 'cover') {
                data.append(key, formData.cover);
            } else {
                data.append(key, formData[key]);
            }
        }

        try {
            const response = await axios.post('http://localhost:4000/blogs/create-new-blog', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `group__${token}`,
                },
            });

            if (response.status === 201) {
                toast.success('Blog created successfully');
                navigate('/dashboard/all-blogs');
            } else {
                toast.error('Error creating blog: ' + response.data.message);
            }
        } catch (error) {
            toast.error('Error creating blog: Please fill all data');
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        const inputValue = type === 'file' ? files[0] : value;
        setFormData({ ...formData, [name]: inputValue });
    };

    return (
        <>
            <ToastContainer />
            <form onSubmit={handleFormSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-4">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="#!">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#!">Blog</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Create New Blog</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                <section className="mt-8">
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="d-md-flex justify-content-between align-items-center">
                                    <div className="row">
                                        <div className="col-12 mb-0">
                                            <h1 className="fw-bold">Create New Blog</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="/dashboard/all-blogs" className="btn btn-light">Back to Blog</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <main className="main-content-wrapper">
                            <div className="d-md-flex justify-content-between align-items-center">
                                <Sidebar />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12 col-12 mb-5">
                                            <div className="card h-100 card-lg">
                                                <div className="px-6 py-6">
                                                    <div className="card-body p-0">
                                                        <div className="mb-3 col-lg-12 mt-5">
                                                            <h4 className="mb-3 h5">Blog Cover <i className="bi bi-asterisk fs-6 text-danger"> </i></h4>
                                                            <div id="my-dropzone" className="dropzone mt-4 border-dashed rounded-2 min-h-0 dz-clickable" style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                <div className="dz-default dz-message">
                                                                    <input type="file" required name="cover" onChange={handleInputChange} />
                                                                    {formData.cover && <p>Selected File: {formData.cover.name}</p>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <h4 className="mb-3 h5">Blog Title <i className="bi bi-asterisk fs-6 text-danger"> </i></h4>
                                                            <input type="text" className="form-control" required placeholder="Title" name="title" value={formData.title} onChange={handleInputChange} />
                                                        </div>
                                                        <div className="mb-3">
                                                            <h4 className="mb-3 h5">Blog Summary <i className="bi bi-asterisk fs-6 text-danger"> </i></h4>
                                                            <input type="text" className="form-control" required placeholder="The summary could be the first paragraph of your blog" name="summary" value={formData.summary} onChange={handleInputChange} />
                                                        </div>
                                                        <br />
                                                        <h4 className="mb-3 h5">Blog Details </h4>
                                                        <div className="row">
                                                            <div className="mb-3 col-lg-6">
                                                                <label className="form-label">Reading Time <i className="bi bi-asterisk fs-6 text-danger"></i></label>
                                                                <input type="number" className="form-control" placeholder="In minutes" required name="readingTime" value={formData.readingTime} onChange={handleInputChange} />
                                                            </div>
                                                            <div className="mb-3 col-lg-6">
                                                                <label className="form-label">Category</label>
                                                                <select className="form-select" name="category" value={formData.category} onChange={handleInputChange}>  {/* Changed to match schema */}
                                                                    <option value="">Category Name</option>
                                                                    <option value="lifestyle">LifeStyle</option>
                                                                    <option value="climate change">Climate Change</option>
                                                                    <option value="eco-friendly">Eco-friendly</option>
                                                                    <option value="recycle">Recycle</option>
                                                                    <option value="family">Family</option>
                                                                </select>
                                                                <br />
                                                            </div>
                                                            <div className="mb-3 col-lg-12">
                                                                <Editor name="content" value={formData.content} onChange={(content) => setFormData({ ...formData, content })} />
                                                            </div>
                                                            <div className="mb-3 col-lg-12 mt-5">
                                                                <h4 className="mb-4 h5">Meta Data</h4>
                                                                <div className="mb-3">
                                                                    <input type="text" className="form-control" placeholder="In simple words followed by , e.g (life style, cooking, Karen)" name="metaData" value={formData.metaData} onChange={handleInputChange} />
                                                                </div>
                                                            </div>
                                                            <div className="mb-3 col-lg-12">
                                                                <h4 className="mb-4 h5">Blog Status</h4>
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" type="radio" name="blogStatus" id="inlineRadio1" value="Draft" checked={formData.blogStatus === 'Draft'} onChange={handleInputChange} />
                                                                    <label className="form-check-label" htmlFor="inlineRadio1">Draft</label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" type="radio" name="blogStatus" id="inlineRadio2" value="Published" checked={formData.blogStatus === 'Published'} onChange={handleInputChange} />
                                                                    <label className="form-check-label" htmlFor="inlineRadio2">Published</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <button type="submit" className="btn btn-primary">Create Blog</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </section>
            </form>
        </>
    );
};

export default CreateNewBlog;
