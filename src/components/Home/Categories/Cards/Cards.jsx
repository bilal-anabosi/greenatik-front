import React from 'react';
import { useNavigate } from 'react-router-dom';
import Category from './Category';
import './Cards.css';
import { useTranslation } from 'react-i18next';

const Cards = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/wide?category=${category}`);
  };

  return (
    <div className="j">
      <div className="categories-container">
        <h2 className="special-h2">{t('Categories.Categories')}</h2>
        <h4 className="special-h4">{t('Categories.Find')}</h4>
      </div>

      <div className="row row-cols-5 g-4">
        <Category 
          imageUrl="/pics/images/s1.png" 
          title={t('Categories.Food Ware')} 
          onClick={() => handleCategoryClick('Food Ware')}
        />
        <Category 
          imageUrl="/pics/images/s2.png" 
          title={t('Categories.Gardening')} 
          onClick={() => handleCategoryClick('Gardening')}
        />
        <Category 
          imageUrl="/pics/images/s4.png" 
          title={t('Categories.Pets')} 
          onClick={() => handleCategoryClick('Pets')}
        />
        <Category 
          imageUrl="/pics/images/s5.png" 
          title={t('Categories.Shopping Bags')} 
          onClick={() => handleCategoryClick('Shopping Bags')}
        />
        <Category 
          imageUrl="/pics/images/s6.png" 
          title={t('Categories.Office')} 
          onClick={() => handleCategoryClick('Office')}
        />
      </div>

      <div className="row row-cols-5 g-4">
        <Category 
          imageUrl="/pics/images/s7.png" 
          title={t('Categories.Skin Care')}
          onClick={() => handleCategoryClick('Skin care')}
        />
        <Category 
          imageUrl="/pics/images/s8.png" 
          title={t('Categories.Electronics')}  
          onClick={() => handleCategoryClick('Electronics')}
        />
        <Category 
          imageUrl="/pics/images/s9.png" 
          title={t('Categories.Clothing')}  
          onClick={() => handleCategoryClick('Clothing')}
        />
        <Category 
          imageUrl="/pics/images/s10.png" 
          title={t('Categories.Home')}  
          onClick={() => handleCategoryClick('Home')}
        />
      </div>
    </div>
  );
}

export default Cards;