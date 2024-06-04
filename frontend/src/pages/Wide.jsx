import React from 'react';

import ProductList from '../components/wide/ProductList';



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
            <li className="breadcrumb-item"><a href="/home">Home</a></li>
            <li className="breadcrumb-item"><a href="/store">Shop</a></li>
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
