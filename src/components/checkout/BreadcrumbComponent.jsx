import React from 'react';
import { Link } from 'react-router-dom';
const BreadcrumbComponent = () => {
  return (
 
          <nav aria-label="breadcrumb" style={{  padding: "10px 10px" }}>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/store">Shop</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Shop Checkout</li>
            </ol>
          </nav>
    
    
  );
};

export default BreadcrumbComponent;
