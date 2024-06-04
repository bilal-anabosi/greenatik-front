import React from 'react';
import PropTypes from 'prop-types';

const BlogRow = ({ cover, title, blogCategory, blogStatus, createdAt, blogId, onDelete }) => {
    return (
        <tr>
            <td>
                <img src={`http://localhost:4000/${cover}`} alt="Cover" className="icon-shape icon-md" />
            </td>
            <td><a href="#!" className="text-reset">{title}</a></td>
            <td>{blogCategory.join(', ')}</td>
            <td>
                <span className={`badge bg-light-${blogStatus === 'Active' ? 'primary' : blogStatus === 'Disabled' ? 'danger' : 'warning'} text-dark-${blogStatus === 'Active' ? 'primary' : blogStatus === 'Disabled' ? 'danger' : 'warning'}`}>{blogStatus}</span>
            </td>
            <td>{new Date(createdAt).toLocaleDateString()}</td>
            <td>
                <button className="btn btn-link text-reset" >
                    Delete
                </button>
            </td>
        </tr>
    );
};

BlogRow.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    blogCategory: PropTypes.arrayOf(PropTypes.string).isRequired,
    blogStatus: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    blogId: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default BlogRow;
