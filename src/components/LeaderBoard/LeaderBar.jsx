import React from 'react';
import { Link } from 'react-router-dom';
const LeaderBar = () => {
    return (
      
      <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="# ">Home</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Leader Bord</li>
      </ol>
    </nav>
    );
  };
  
  export default LeaderBar;
  