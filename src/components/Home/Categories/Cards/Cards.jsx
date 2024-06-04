import React from 'react';
import { useNavigate } from 'react-router-dom';
import Category from './Category';
import './Cards.css';

const Cards = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/wide?category=${category}`);
  };

  return (
    <div className="j">
      <div className="categories-container">
        <h2 className="special-h2">Categories</h2>
        <h4 className="special-h4">Find what you are looking for</h4>
      </div>

      <div className="row row-cols-5 g-4">
        <Category 
          imageUrl="/pics/images/s1.png" 
          title="Food Ware" 
          onClick={() => handleCategoryClick('Food Ware')}
        />
        <Category 
          imageUrl="/pics/images/s2.png" 
          title="Gardening" 
          onClick={() => handleCategoryClick('Gardening')}
        />
        <Category 
          imageUrl="/pics/images/s4.png" 
          title="Pets" 
          onClick={() => handleCategoryClick('Pets')}
        />
        <Category 
          imageUrl="/pics/images/s5.png" 
          title="Shopping Bags" 
          onClick={() => handleCategoryClick('Shopping Bags')}
        />
        <Category 
          imageUrl="/pics/images/s6.png" 
          title="Office" 
          onClick={() => handleCategoryClick('Office')}
        />
      </div>

      <div className="row row-cols-5 g-4">
        <Category 
          imageUrl="/pics/images/s7.png" 
          title="Skin Care" 
          onClick={() => handleCategoryClick('Skin care')}
        />
        <Category 
          imageUrl="/pics/images/s8.png" 
          title="Electronics" 
          onClick={() => handleCategoryClick('Electronics')}
        />
        <Category 
          imageUrl="/pics/images/s9.png" 
          title="Clothing" 
          onClick={() => handleCategoryClick('Clothing')}
        />
        <Category 
          imageUrl="/pics/images/s10.png" 
          title="Home" 
          onClick={() => handleCategoryClick('Home')}
        />
      </div>
    </div>
  );
}

export default Cards;
