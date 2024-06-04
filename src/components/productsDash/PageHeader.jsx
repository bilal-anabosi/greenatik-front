import React from 'react';

const PageHeader = () => {
  return (
    <div className="d-md-flex justify-content-between align-items-center">
      <div>
        <h2>Products</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a href="#" className="text-inherit">Dashboard</a></li>
            <li className="breadcrumb-item active" aria-current="page">Products</li>
          </ol>
        </nav>
      </div>
      <div>
        <a href="add-products" className="btn btn-primary">Add Product</a>
      </div>
    </div>
  );
}

export default PageHeader;
