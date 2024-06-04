import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "../components/Product";

const Cart = ({ exchangeRate }) => {
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem("userToken");
  const [totalPrice, setTotalPrice] = useState(0);
  const [currencySymbol, setCurrencySymbol] = useState('$'); 
  const ServiceFee = 2;
  const navigate = useNavigate();

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:4000/cart", {
        headers: {
          Authorization: `group__${token}`,
        },
      });
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
      if (error.response.status === 403) {
        navigate("/AccessDenied");
      }
    }
  };

  useEffect(() => {
    if (token) {
      fetchCartItems();
    } else {
      navigate("/AccessDenied");
    }
  }, [token, navigate]);

  const calculateCartTotal = (items) => {
    let total = 0;
    items.forEach((item) => {
      const price = item.salePrice || item.regularPrice;
      total += price * item.quantity ;
    });
    return total;
  };

  useEffect(() => {
    const totalPrice = calculateCartTotal(cartItems);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const addToCart = async (productId, quantity, size) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/cart/add",
        {
          productId,
          quantity,
          size,
        },
        {
          headers: {
            Authorization: `group__${token}`,
          },
        }
      );

      if (response.status === 200) {
        fetchCartItems();
      } else {
        console.error("Failed to add item to cart");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const removeFromCart = async (productId, size) => {
    try {
      const response = await axios.delete("http://localhost:4000/cart/delete", {
        headers: {
          Authorization: `group__${token}`,
        },
        data: {
          productId,
          size,
        },
      });

      if (response.status === 200) {
        fetchCartItems();
      } else {
        console.error("Failed to remove item from cart");
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const updateCartItemQuantity = async (productId, size, quantity) => {
    try {
      const response = await axios.put(
        "http://localhost:4000/cart/update",
        {
          productId,
          size,
          quantity,
        },
        {
          headers: {
            Authorization: `group__${token}`,
          },
        }
      );

      if (response.status === 200) {
        fetchCartItems();
      } else {
        console.error("Failed to update item quantity in cart");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const message = error.response.data.message;
        if (message === "Quantity exceeds available stock") {
          toast.error("Quantity exceeds available stock");
        } else {
          toast.error("Failed to update item quantity in cart");
        }
      } else {
        console.error("Error updating item quantity in cart:", error);
        toast.error("Error updating item quantity in cart");
      }
    }
  };

  useEffect(() => {
    setCurrencySymbol(exchangeRate === 1 ? '$' : '₪');
  }, [exchangeRate]);

  return (
    <div>
      <ToastContainer />
      <div>
        <main>
          <div className="mt-4">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="/store">Shop</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Shop Cart
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <section className="mb-lg-14 mb-8 mt-8">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="card py-1 border-0 mb-8">
                    <div>
                      <h1 className="fw-bold">Shop Cart</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-7">
                  <div className="py-3">
                    <ul className="list-group list-group-flush">
                      {cartItems.length === 0 ? (
                        <p>No items in cart</p>
                      ) : (
                        cartItems.map((item) => {
                          const productProps = {
                            key: item.productId,
                            imgSrc: item.images,
                            title: item.title,
                            price: item.regularPrice,
                            productId: item.id,
                            size: item.sizes,
                            onDelete: removeFromCart,
                            addToCart: addToCart,
                            updateCartItemQuantity: updateCartItemQuantity,
                            quantity: item.quantity,
                            exchangeRate: exchangeRate, // Add the exchangeRate prop
                          };

                          if (item.salePrice > 0) {
                            productProps.newPrice = item.salePrice;
                          }

                          return <Product {...productProps} />;
                        })
                      )}
                    </ul>
                    <div className="d-flex justify-content-between mt-7">
                      <a href="/store" className="btn btn-primary">
                        Continue Shopping
                      </a>
                    </div>
                  </div>
                </div>
                {cartItems.length !== 0 ? (
                  <div className="col-12 col-lg-4 col-md-5">
                    <div className="mb-5 card mt-6">
                      <div className="card-body p-6">
                        <h2 className="h5 mb-4">Summary</h2>
                        <div className="card mb-2">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                              <div className="me-auto">
                                <div>Item Subtotal</div>
                              </div>
                              <span>{currencySymbol} {(totalPrice * exchangeRate).toFixed(1)}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                              <div className="me-auto">
                                <div>Service Fee</div>
                              </div>
                              <span>{currencySymbol} {(ServiceFee * exchangeRate).toFixed(1)}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                              <div className="me-auto">
                                <div className="fw-bold">Subtotal</div>
                              </div>
                              <span className="fw-bold">
                                {currencySymbol} {((totalPrice + ServiceFee) * exchangeRate).toFixed(1)}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="d-grid mb-1 mt-4">
                          <a
                            href="/checkout"
                            className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                            type="submit"
                          >
                            Go to Checkout
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Cart;
