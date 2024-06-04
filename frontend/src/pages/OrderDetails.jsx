import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const OrderDetails = ( {exchangeRate}) => {
  const { numOrder } = useParams();
  const [customer, setCustomer] = useState(null);
  const [currencySymbol, setCurrencySymbol] = useState('$'); 
  useEffect(() => {
    setCurrencySymbol(exchangeRate === 1 ? '$' : '₪');
  }, [exchangeRate]);
  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const token = localStorage.getItem('userToken');
        const response = await axios.get(`http://localhost:4000/checkout/checkout/${numOrder}`, {
          headers: {
            Authorization: `group__${token}`,
          },
        });
        if (response.status === 200) {
          setCustomer(response.data);
        } else {
          console.error("Failed to fetch customer data:", response.data);
        }
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchCustomerData();
  }, [numOrder]);

//to make sure it changes from not deliverd to deliverd
  const handleStatusChange = async (orderNumber) => {
    try {
      const token = localStorage.getItem('userToken');
      const response = await axios.put(`http://localhost:4000/checkout/${orderNumber}/delivered`, {
        status: 'delivered',
      }, {
        headers: {
          Authorization: `group__${token}`,
        },
      });
      if (response.status === 200) {
        setCustomer(prevCustomer => ({
          ...prevCustomer, //... for parcing remember
          status: 'delivered',
        }));
      } else {
        console.error("Failed to update status:", response.data);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  //get pics
  const renderItemImage = (item) => {
    if (item.image) {
      return <img src={`http://localhost:4000/${item.image}`} alt={item.name} className="card-img-top" />;
    } else {
      return <div className="card-img-top">No image available</div>;
    }
  };

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Order Details</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">User Info</h4>
              <p><strong>Name:</strong> {customer.user.username}</p>
              <p><strong>Email:</strong> {customer?.user?.email}</p>
              <div>
                <h4>Address:</h4>
                <ul>
                  {Object.entries(customer?.address || {}).map(([key, value]) => (
                    <li key={key}><strong>{key}:</strong> {value}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Delivery Instructions:</h4>
                <p>{customer.deliveryInstructions}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Checkout Info</h4>
              <p><strong>Order Number:</strong> {numOrder}</p>
              <p><strong>Purchase Date:</strong>{new Date(customer.createdAt).toLocaleDateString()}</p>
              <p><strong>Status:</strong> {customer?.status}</p>
              <p><strong>Spent:</strong> {currencySymbol}{customer?.total*exchangeRate}</p>
              {/*changin the stat here*/}
              {customer.status !== 'delivered' && (
                <button className="btn btn-success" onClick={() => handleStatusChange(numOrder)}>Mark as Delivered</button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Items</h4>
              <div className="row">
                {customer?.items.map((item, index) => (
                  <div className="col-md-3 mb-3" key={index}>
                    {renderItemImage(item)}
                    <p>{item.name}</p>
                    <p>Quantity:{item.quantity}</p>
                    <p>item price:{item.price}</p>
                    <p>items total:{item.price*item.quantity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Link to="/dashboard/deliveryorders" className="btn btn-primary">Back to Orders</Link>
      </div>
    </div>
  );
};

export default OrderDetails;
