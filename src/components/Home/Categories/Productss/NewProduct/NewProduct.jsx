import React from 'react';
import { useState, useEffect } from 'react';
import '../Products.css';
import ProductCards from '../../../../wide/ProductCards';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const NewProduct = ({exchangeRate}) => {

    const [latestProducts, setLatestProducts] = useState([]);
        useEffect(() => {
            async function fetchLatestProducts() {
                try {
                    const response = await axios.get('http://localhost:4000/store/latest-products');
                        setLatestProducts(response.data.latestProducts);
            } 
            catch (error) {
                console.error('Error fetching latest products:', error);
            }
        }

fetchLatestProducts();
}, []);

const { t } = useTranslation();

return (
    <div className="kk">
        <br/>
        <br/>
        <br/>
            <section className="mb-lg-14 mb-8">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-6 d-xl-flex justify-content-between align-items-center">
                            {/* heading */}
                                <div className="mb-5 mb-xl-0">
                                    <h3 className="mb-0">{t('Categories.New1')}</h3>
                                        <p className="mb-0">{t('Categories.New2')}</p>
                                </div>
                            <div>
                        </div>
                    </div>
                </div>
            </div>
        {/* row */}
    <div className="row">
        <div className="col-12">
            {/* tab */}
            <div className="col">
                <div className="container">
                    <div className="row row-cols-2 row-cols-xl-5 row-cols-md-3 g-4">
                    {latestProducts.map((product, index) => {
                                            const firstSize = product.sizes && product.sizes[0] ? product.sizes[0] : {};
                                            return (
                                                <ProductCards
                                                    id={product._id} 
                                                    key={index}
                                                    title={product.title}
                                                    rating={product.rating}
                                                    regularPrice={firstSize.regularPrice}
                                                    salePrice={firstSize.salePrice}
                                                    images={product.images}
                                                    category={product.category}
                                                    inStock={product.inStock}
                                                    reviews={product.reviews}
                                                    exchangeRate={exchangeRate}
                                                />
                                            );
                                        })}
    </div>
</div>
</div></div></div></div></section></div>
);
}
export default NewProduct;