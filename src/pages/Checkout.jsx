import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Order from '../components/checkout/Order';
import BreadcrumbComponent from '../components/checkout/BreadcrumbComponent';
import DeliveryAddress from '../components/checkout/DeliveryAddress';
import DeliveryInstructionsAccordion from '../components/checkout/DeliveryInstructionsAccordion';
import PaymentMethodAccordion from '../components/checkout/PaymentMethodAccordion';
import CheckoutComponent from '../components/checkout/CheckoutComponent';
import Discount from '../components/checkout/Discount';

import './Checkout.css';

function Checkout({ exchangeRate }) {
  const [items, setItems] = useState([]);
  const [availablePoints, setAvailablePoints] = useState(0);
  const token = localStorage.getItem('userToken');

  useEffect(() => {
    const fetchWishlistData = async () => {
      if (!token) {
        console.error('No token found');
        return;
      }

      try {
        const response = await axios.get(`${process.env.REACT_APP_GREENATIK}/cart`, {
          headers: {
            'Authorization': `group__${token}`
          }
        });
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    const fetchUserPoints = async () => {
      if (!token) {
        console.error('No token found');
        return;
      }

      try {
        const response = await axios.get(`${process.env.REACT_APP_GREENATIK}/checkout/points`, {
          headers: {
            'Authorization': `group__${token}`
          }
        });
        setAvailablePoints(response.data.availablePoints);
      } catch (error) {
        console.error('Error fetching user points:', error);
      }
    };

    fetchWishlistData();
    fetchUserPoints();
  }, [token]);

  const [checkoutData, setCheckoutData] = useState({});
  const [discountAmount, setDiscountAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState('');

  const handleUpdateCheckoutData = (newData) => {
    const updatedPoints = newData.selectedPoints > availablePoints ? availablePoints : newData.selectedPoints;

    setCheckoutData((prevData) => ({
      ...prevData,
      ...newData,
      selectedPoints: updatedPoints,
    }));

    setDiscountAmount(newData.discountAmount || 0);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const serviceFee = 3.00;
    const itemsSubtotal = items.reduce((acc, item) => {
      const itemTotal = (item.regularPrice || 0) * (item.quantity || 0);
      return acc + itemTotal;
    }, 0);
    const subTotal = itemsSubtotal + serviceFee;
    const totalAfterDiscount = subTotal - discountAmount;

    const checkoutPayload = {
      address: checkoutData.address,
      deliveryInstructions: checkoutData.deliveryInstructions,
      paymentMethod: checkoutData.paymentMethod,
      items: items.map(item => ({
        productId: item.id,
        size: item.sizes,
        quantity: item.quantity
      })),
      totalAfterDiscount: totalAfterDiscount,
      pointsUsed: checkoutData.selectedPoints, // Include the selected points
    };

    try {
      const response = await axios.post(`${process.env.REACT_APP_GREENATIK}/checkout`, checkoutPayload, {
        headers: {
          'Authorization': `group__${token}`
        }
      });
      if (response.status === 201) {
        setNotification(`Order placed successfully. Order Number:  ${response.data.numOrder}`);
      }
    } catch (error) {
      setErrorMessage('Failed to place order.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container3">
      <div className="CheckoutGrid">
        <div className="sidebar">
          <BreadcrumbComponent />
          <CheckoutComponent />
          <DeliveryAddress onUpdate={handleUpdateCheckoutData} />
          <DeliveryInstructionsAccordion onUpdate={handleUpdateCheckoutData} />
          <PaymentMethodAccordion onUpdate={handleUpdateCheckoutData} />
          <Discount onUpdate={handleUpdateCheckoutData} totalPoints={availablePoints} />

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button 
              onClick={handleSubmit} 
              className="btn btn-primary mt-4" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Placing Order...' : 'Place Order'}
            </button>
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
            {/* Display notification message */}
            {notification && (
              <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="toast-header">
                    <img src="/favicon.ico" width={32} height={32} className="rounded me-2" alt="" />
                    <strong className="me-auto">GreeNatik</strong>
                    <small>Now</small>
                    <button type="button" className="btn-close" onClick={() => setNotification('')} aria-label="Close"></button>
                  </div>
                  <div className="toast-body">
                    {notification}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="main-content" style={{ marginBottom: '20px' }}>
          <Order
            items={items}
            discountAmount={discountAmount}
            exchangeRate={exchangeRate}
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
