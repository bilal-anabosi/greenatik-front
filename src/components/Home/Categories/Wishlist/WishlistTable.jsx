import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const WishlistTable = ({ exchangeRate }) => {
  const [wishlist, setWishlist] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [currencySymbol, setCurrencySymbol] = useState('$'); 
  const token = localStorage.getItem('userToken');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWishlistData = async () => {
      if (!token) {
        navigate('/AccessDenied');
        return;
      }

      try {
        const response = await axios.get('http://localhost:4000/wishlist', {
          headers: {
            'Authorization': `group__${token}`
          }
        });
        setWishlist(response.data.products);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate('/AccessDenied');
        } else {
          console.error('Error fetching wishlist:', error);
        }
      }
    };

    fetchWishlistData();
  }, [token, navigate]);

  const handleDeleteItem = async (id) => {
    if (!token) {
      console.error('No token found');
      return;
    }

    console.log(`Attempting to delete item with ID: ${id}`);

    try {
      const response = await axios.delete(`http://localhost:4000/wishlist/${id}`, {
        headers: {
          'Authorization': `group__${token}`
        },
      });

      if (response.status === 200) {
        const updatedWishlist = wishlist.filter((item) => item._id !== id);
        setWishlist(updatedWishlist);
        console.log(`Item with ID: ${id} successfully deleted`);
      } else {
        console.error(`Failed to delete item with ID: ${id}, status code: ${response.status}`);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigate('/AccessDenied');
      } else {
        console.error('Error deleting item:', error);
      }
    }
  };

  const handleAddToCart = async (productId, size, status) => {
    if (!token) {
      console.error('No token found');
      return;
    }

    if (!status) {
      setErrorMessage('Product is out of stock and cannot be added to cart.');
      return;
    }

    const quantity = 1;

    try {
      const response = await axios.post('http://localhost:4000/cart/add', 
        { productId, quantity, size },
        {
          headers: {
            'Authorization': `group__${token}`
          }
        }
      );

      if (response.status === 200) {
        console.log('Product added to cart successfully');
        navigate('/cart');

      } else {
        console.error('Failed to add product to cart, status code:', response.status);
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  useEffect(() => {
    setCurrencySymbol(exchangeRate === 1 ? '$' : '₪');
  }, [exchangeRate]);

  return (
    <section className="mt-8 mb-14">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="mb-8">
              <h1 className="mb-1">My Wishlist</h1>
              <p>There are {wishlist.length} products in this wishlist.</p>
            </div>
            <div className="table-responsive">
              <table className="table text-nowrap table-padding">
                <thead className="table-light">
                  <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Actions</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((item) => (
                    <tr key={item._id}>
                      <td className="align-middle">
                        <a href="#1">
                          <img
                            src={item.product.images && item.product.images[0] ? `http://localhost:4000/${item.product.images[0]}` : 'path/to/default-image.jpg'}
                            className="icon-shape icon-xxl"
                            alt=""
                          />
                        </a>
                      </td>
                      <td className="align-middle">
                        <div>
                          <h5 className="fs-6 mb-0">
                            <a href="#1" className="text-inherit">
                              {item.product.title}
                            </a>
                          </h5>
                          <small>{item.product.size}</small>
                        </div>
                      </td>
                      <td className="align-middle">
                        {currencySymbol} {(item.product.price * exchangeRate).toFixed(2)}
                      </td>
                      <td className="align-middle">
                        <span className={`badge ${item.product.status ? "bg-success" : "bg-danger"}`}>
                          {item.product.status ? "In Stock" : "Out of Stock"}
                        </span>
                      </td>
                      <td className="align-middle">
                        <button 
                          className="btn btn-primary btn-sm" 
                          onClick={() => handleAddToCart(item.product._id, item.product.size, item.product.status)}
                        >
                          Add to Cart
                        </button>
                      </td>
                      <td className="align-middle">
                        <button
                          className="text-muted"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          aria-label="Delete"
                          style={{
                            border: 'none',
                            background: 'none',
                            padding: '0',
                            cursor: 'pointer',
                            outline: 'none',
                            boxShadow: 'none' 
                          }}
                          onClick={() => handleDeleteItem(item._id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mb-3">
          {/* Display error message box */}
          {errorMessage && (
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
              <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                  <img src="/favicon.ico" width={32} height={32} className="rounded me-2" alt="" />
                  <strong className="me-auto">GreeNatik</strong>
                  <small>Now</small>
                  <button type="button" className="btn-close" onClick={() => setErrorMessage('')} aria-label="Close"></button>
                </div>
                <div className="toast-body">
                  {errorMessage}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WishlistTable;
