import React from 'react';

const BreadcrumbComponent = () => {
  return (
 
          <nav aria-label="breadcrumb" style={{  padding: "10px 10px" }}>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="/home">Home</a></li>
              <li className="breadcrumb-item"><a href="/store">Shop</a></li>
              <li className="breadcrumb-item active" aria-current="page">Shop Checkout</li>
            </ol>
          </nav>
    
    
  );
};

export default BreadcrumbComponent;
