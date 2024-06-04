import React from 'react';

const WishlistBreadcrumb = () => {
    return (
        <div className="mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><a href="/home">Home</a></li>
                                <li className="breadcrumb-item"><a href="/store">Shop</a></li>
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
