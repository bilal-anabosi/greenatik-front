import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
    return (
        <div className="newpost_sidebar">
            <h4>Quick Menu</h4>
            
            <div className="newpost_item">
                <Link to="/dashboard/products">
                    <i className="fi fi-sr-shopping-bag"></i>
                    <span>Product</span>
                </Link>
            </div>
            <div className="newpost_item">
                <Link to="/dashboard/post">
                    <i className="fi fi-sr-blog-text"></i>
                    <span>Post</span>
                </Link>
            </div>
            <div className="newpost_item">
                <Link to="/dashboard/all-blogs">
                    <i className="fi fi-sr-duplicate"></i>
                    <span>Blog</span>
                </Link>
            </div>
            <div className="newpost_item">
                <Link to="/dashboard/deliveryorders">
                <i class="bi bi-box2-heart-fill"></i>
                    <span>Orders Delivery</span>
                </Link>
            </div>
            <div className="newpost_item">
                <Link to="/dashboard/contributions">
                <i class="bi bi-clipboard-check-fill"></i>
                    <span>Recycling Delivery</span>
                </Link>
            </div>
        </div>
    )
}
