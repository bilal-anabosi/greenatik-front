import React from 'react';
import { Link } from 'react-router-dom';
const WishlistBreadcrumb = () => {
    return (
        <div className="mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="/store">Shop</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">My Wishlist</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WishlistBreadcrumb;
