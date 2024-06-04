import React, { useState, useEffect } from "react";
import { useLocation, Link,useNavigate } from 'react-router-dom';
const ProductCards = ({ id, title, rating, regularPrice, salePrice, images, category, inStock, reviews, exchangeRate }) => {
    const convertedRegularPrice = (regularPrice * exchangeRate).toFixed(2);
    const convertedSalePrice = salePrice ? (salePrice * exchangeRate).toFixed(2) : null;
    const [currencySymbol, setCurrencySymbol] = useState('$'); 
    useEffect(() => {
        setCurrencySymbol(exchangeRate === 1 ? '$' : '₪');
      }, [exchangeRate]);
    
    return (
        <div className="card card-product">
            <div className="card-body">
                <div className="text-center position-relative">
                    {salePrice && (
                        <div className="position-absolute top-0 start-0">
                            <span className="badge bg-danger">Sale</span>
                        </div>
                    )}
                    <Link to={`/shop-single/${id}`}>
                        <img src={images && images.length > 0 ? `${process.env.REACT_APP_GREENATIK}/${images[0]}` : 'path/to/default-image.jpg'} alt={`${title} Image`} className="mb-3 img-fluid" />
                    </Link>
                </div>
                <div className="text-small mb-1">
                    <Link to="#!" className="text-decoration-none text-muted"><small>{category}</small></Link>
                </div>
                <h2 className="fs-6"><Link to={`/shop-single/${id}`} className="text-inherit text-decoration-none">{title}</Link></h2>
                <div>
                    <small className="text-warning">
                        {Array.from({ length: 5 }, (_, i) => (
                            <i className={"bi " + (i < Math.floor(reviews) ? "bi-star-fill" : (i < reviews ? "bi-star-half" : "bi-star"))} key={i} />
                        ))}
                    </small>
                    {reviews !== undefined && (
                        <span className="text-muted small">{reviews.toFixed(1)}</span>
                    )}
                </div>
                <div>
                    {inStock ? (
                        <span className="text-uppercase small text-primary">In Stock</span>
                    ) : (
                        <span className="text-uppercase small text-danger">Out of Stock</span>
                    )}
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                        <span className="text-dark"> {currencySymbol}{convertedSalePrice ? convertedSalePrice : convertedRegularPrice}</span>
                        {convertedSalePrice && <span className="text-decoration-line-through text-muted"> {currencySymbol}{convertedRegularPrice}</span>}
                    </div>
                    <div>
                        <Link to={`/shop-single/${id}`} className="btn btn-primary btn-sm">
                            View more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCards;
