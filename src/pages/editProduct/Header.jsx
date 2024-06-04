import React from 'react';
import { Link } from 'react-router-dom';
const PageHeader = () => {
  return (
    <div className="d-md-flex justify-content-between align-items-center mt-5 pt-5 mb-5 pb-5 ">
      <div>
        <h2>Products</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><Link to="#" className="text-inherit">Dashboard</Link></li>
            <li className="breadcrumb-item active" aria-current="page">edit product</li>
          </ol>
        </nav>
      </div>
      <div>
        <Link to="../products" className="btn btn-primary">Back to product</Link>
      </div>
    </div>
  );
}

export default PageHeader;
