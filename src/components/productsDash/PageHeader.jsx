import React from 'react';
import { Link } from 'react-router-dom';
const PageHeader = () => {
  return (
    <div className="d-md-flex justify-content-between align-items-center">
      <div>
        <h2>Products</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><Link to="#" className="text-inherit">Dashboard</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Products</li>
          </ol>
        </nav>
      </div>
      <div>
        <Link to="add-products" className="btn btn-primary">Add Product</Link>
      </div>
    </div>
  );
}

export default PageHeader;
