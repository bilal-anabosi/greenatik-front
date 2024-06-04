import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="container mt-5 ">
      <div className="row mb-8">
        <div className="col-md-12">
          <div className="d-md-flex justify-content-between align-items-center">
            <div>
              <h2>Add New Product</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to="/" className="text-inherit">Dashboard</Link></li>
                  <li className="breadcrumb-item"><Link to="products" className="text-inherit">Products</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Add New Product</li>
                </ol>
              </nav>
            </div>
            <div>
              <Link to="products" className="btn btn-light">Back to Product</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;