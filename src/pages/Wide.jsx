import React from 'react';

import ProductList from '../components/wide/ProductList';
import { Link } from 'react-router-dom';


const Wide = ({exchangeRate}) => {
    return (
        <>
        <div className="mt-4">
  <div className="container">
    {/* row */}
    <div className="row">
      {/* col */}
      <div className="col-12">
        {/* breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/store">Shop</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Wide</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</div>


       
        
       <ProductList   exchangeRate={exchangeRate}/>
                  
               
      
        </>
    );
};

export default Wide;
