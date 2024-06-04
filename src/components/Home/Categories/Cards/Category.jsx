import React from 'react';
import { Link } from 'react-router-dom';
const Category = ({ imageUrl, title, onClick }) => {
  return (
    <div className="col-lg col-md-4 col-6" onClick={onClick}>
      <div className="text-center mb-10">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="mt-4">
          <h5 className="fs-6 mb-0"><Link className="text-inheritt">{title}</Link></h5>
        </div>
      </div>
    </div>
  );
};

export default Category;
