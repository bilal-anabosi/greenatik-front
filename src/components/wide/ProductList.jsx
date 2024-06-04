import React, { useState, useEffect } from 'react';
import { useLocation, Link,useNavigate } from 'react-router-dom';
import ProductCards from '../wide/ProductCards';
import axios from 'axios';
import ViewControls from './ViewControls';
import PriceFilter from './PriceFilter';
import RatingFilter from './RatingFilter';
import CategoryName from './CategoryName';


const ProductList = ({exchangeRate}) => {
  const [allProducts, setAllProducts] = useState([]);
  const [latestProductsWithSale, setLatestProductsWithSale] = useState([]);
  const [sortBy, setSortBy] = useState('Featured');
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState({ label: '', min: 0, max: Infinity });
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const category = query.get('category');
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState('Wide');


    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/wide/wide-products');
                setAllProducts(response.data.LasstProductsWithSale);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchAllProducts();
    }, []);

    useEffect(() => {
        let filteredProducts = allProducts;

        if (category) {
            if (category === "Sale") {
                filteredProducts = filteredProducts.filter(product =>
                    product.sizes.some(size => size.salePrice !== null)
                );
            } else {
                filteredProducts = filteredProducts.filter(product => product.category === category);
            }
        }

        if (selectedRatings.length > 0) {
            filteredProducts = filteredProducts.filter(product =>
                selectedRatings.includes(product.reviews)
            );
        }

        if (selectedPriceRange.label) {
            filteredProducts = filteredProducts.filter(product =>
                product.sizes.some(size => 
                    (size.salePrice !== null ? size.salePrice : size.regularPrice) >= selectedPriceRange.min && 
                    (size.salePrice !== null ? size.salePrice : size.regularPrice) <= selectedPriceRange.max
                )
            );
        }

        switch (sortBy) {
            case "Low to High":
                filteredProducts.sort((a, b) => a.sizes[0].regularPrice - b.sizes[0].regularPrice);
                break;
            case "High to Low":
                filteredProducts.sort((a, b) => b.sizes[0].regularPrice - a.sizes[0].regularPrice);
                break;
            case "Release Date":
                filteredProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;
            case "Avg. Rating":
                filteredProducts.sort((a, b) => b.reviews - a.reviews);
                break;
            default:
                break;
        }

        setLatestProductsWithSale(filteredProducts);
    }, [allProducts, category, sortBy, selectedRatings, selectedPriceRange]);

    const handleRatingChange = (rating) => {
        setSelectedRatings((prevRatings) =>
            prevRatings.includes(rating)
                ? prevRatings.filter((r) => r !== rating)
                : [...prevRatings, rating]
        );
    };

    const handlePriceChange = (range) => {
        setSelectedPriceRange(range);
    };


  const handleCategoryClick = (category) => {
    setCategoryName(category);
    navigate(`/wide?category=${category}`);
};

  return (
    <div className="container">
            <CategoryName categoryName={categoryName}/>

            <div className="row">
                <aside className="col-lg-3 col-md-4 mb-6 mb-md-0">
                    <h5 style={{ marginBottom: 3 }}>Categories</h5>
                    <ul className="nav nav-category flex-column">
                        <li className="nav-item border-bottom w-100">

                            <Link className="nav-link" to="/wide?category=Home" onClick={() => handleCategoryClick('Home')}>Home</Link>
                        </li>
                        <li className="nav-item border-bottom w-100">
                            <Link className="nav-link" to="/wide?category=Skin care" onClick={() => handleCategoryClick('Skin care')}>Skin care</Link>
                        </li>
                        <li className="nav-item border-bottom w-100">
                            <Link className="nav-link" to="/wide?category=Pets" onClick={() => handleCategoryClick('Pets')}>Pets</Link>
                        </li>
                        <li className="nav-item border-bottom w-100">
                            <Link className="nav-link" to="/wide?category=Sale" onClick={() => handleCategoryClick('Sale')}>Sale</Link>
                        </li>
                        <li className="nav-item border-bottom w-100">
                            <Link className="nav-link" to="/wide?category=Food Ware" onClick={() => handleCategoryClick('Food Ware')}>Food Ware</Link>
                        </li>
                        <li className="nav-item border-bottom w-100">
                            <Link className="nav-link" to="/wide?category=Clothing" onClick={() => handleCategoryClick('Clothing')}>Clothing</Link>
                        </li>
                        <li className="nav-item border-bottom w-100">
                            <Link className="nav-link" to="/wide?category=Office" onClick={() => handleCategoryClick('Office')}>Office</Link>
                        </li>
                        <li className="nav-item border-bottom w-100">
                            <Link className="nav-link" to="/wide?category=Shopping Bags" onClick={() => handleCategoryClick('Shopping Bags')}>Shopping Bags</Link>
                        </li>
                        <li className="nav-item border-bottom w-100">
                            <Link className="nav-link" to="/wide?category=Electronics" onClick={() => handleCategoryClick('Electronics')}>Electronics</Link>

                        </li>
                    </ul>
                    <PriceFilter selectedPriceRange={selectedPriceRange} onPriceChange={handlePriceChange} />
                    <RatingFilter selectedRatings={selectedRatings} onRatingChange={handleRatingChange} />
                </aside>
                <section className="col-lg-9 col-md-8">
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <h5 style={{ marginBottom: 3 }}>Products</h5>
                        <ViewControls sortBy={sortBy} setSortBy={setSortBy} />
                    </div>
                    <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                        {latestProductsWithSale.map((product, index) => (
                            <ProductCards
                                key={index}
                                id={product._id}
                                title={product.title}
                                isOnSale={product.sizes.some(size => size.salePrice !== null)}
                                rating={product.reviews}
                                regularPrice={product.sizes?.[0]?.regularPrice || ''}
                                salePrice={product.sizes?.[0]?.salePrice || ''}
                                images={product.images}
                                category={product.category}
                                inStock={product.inStock}
                                reviews={product.reviews}

                                exchangeRate={exchangeRate}

                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>

  );

};

export default ProductList;
