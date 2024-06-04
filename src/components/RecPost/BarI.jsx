import React from 'react';
import { Link } from 'react-router-dom';
const BarI = (props) => {
    return (
      <div className="ss">
      <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
        <li className="breadcrumb-item"><Link to="/all-posts ">Recycling</Link></li>
        <li className="breadcrumb-item active" aria-current="page">{props.Title}</li>
      </ol>
    </nav>
    </div>
    );
  };
  
  export default BarI;
  