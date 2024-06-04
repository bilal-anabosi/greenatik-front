import React from 'react';
import { useState, useEffect } from 'react';
import ProductCards from '../../../../wide/ProductCards'; 
import '../Products.css';
import Slider from 'react-slick'; // Import Slick Slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

const Best = ({exchangeRate}) => {

    const [topSellingProducts, settopSellingProducts] = useState([]);
      
    useEffect(() => {
      async function fetchtopSellingProducts() {
        try {
          const response = await axios.get(`${process.env.REACT_APP_GREENATIK}/store/top-products`);
          settopSellingProducts(response.data.topSellingProducts);
        } catch (error) {
          console.error('Error fetching top selling products sale:', error);
        }
      }
  
      fetchtopSellingProducts();
    }, []);

    // Slick Slider settings
    const sliderSettings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <span className="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16"><path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" /></svg></span>,
        nextArrow: <span className="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" /></svg></span>,
    };

    return (
        <div className="kk">
            <section className="mb-lg-14 mb-8">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-6 d-xl-flex justify-content-between align-items-center">
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="col">
                                <div className="container">
                                    {/* Wrap the product cards with the Slick Slider */}
                                    <Slider {...sliderSettings}>
                                        {topSellingProducts.map((product, index) => {
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
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Best;