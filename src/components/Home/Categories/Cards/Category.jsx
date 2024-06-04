import React from 'react';

const Category = ({ imageUrl, title, onClick }) => {
  return (
    <div className="col-lg col-md-4 col-6" onClick={onClick}>
      <div className="text-center mb-10">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="mt-4">
          <h5 className="fs-6 mb-0"><a className="text-inheritt">{title}</a></h5>
        </div>
      </div>
    </div>
  );
};

export default Category;
