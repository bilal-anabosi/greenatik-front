import React from 'react';
import './HomeBar.css'
const HomeBar = () => {
    return (
      <div className="ss">
      <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="/home">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Shop</li>
      </ol>
    </nav>
    </div>
    );
  };
  
  export default HomeBar;
  