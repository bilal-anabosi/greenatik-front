import React from 'react';

const CategoryName = ({categoryName}) => {

    return (
        <>
       <div className="card mb-4 bg-light border-0">
  {/* card body */}
  <div className="card-body p-9">
    {/* title */}
    <h2 className="mb-0 fs-1">{categoryName}</h2>
  </div>
</div>
        </>
    );
};

export default CategoryName;
