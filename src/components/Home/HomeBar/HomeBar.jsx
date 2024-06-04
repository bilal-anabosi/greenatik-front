import React from 'react';
import './HomeBar.css'
import { Link } from 'react-router-dom';
const HomeBar = () => {
    return (
      <div className="ss">
      <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Shop</li>
      </ol>
    </nav>
    </div>
    );
  };
  
  export default HomeBar;
  