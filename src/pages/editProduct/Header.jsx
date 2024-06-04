import React from 'react';

const PageHeader = () => {
  return (
    <div className="d-md-flex justify-content-between align-items-center mt-5 pt-5 mb-5 pb-5 ">
      <div>
        <h2>Products</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a href="#" className="text-inherit">Dashboard</a></li>
            <li className="breadcrumb-item active" aria-current="page">edit product</li>
          </ol>
        </nav>
      </div>
      <div>
        <a href="../products" className="btn btn-primary">Back to product</a>
      </div>
    </div>
  );
}

export default PageHeader;
