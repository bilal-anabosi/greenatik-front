import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from 'react-router-dom';

const OrderList = ({ exchangeRate })=> {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const [currencySymbol, setCurrencySymbol] = useState('$'); 

    useEffect(() => {
        setCurrencySymbol(exchangeRate === 1 ? '$' : '₪');
      }, [exchangeRate]);
    
    const fetchOrders = useCallback(async () => {
        const token = localStorage.getItem('userToken');
        try {
            const response = await fetch('http://localhost:4000/checkout/details', {
                headers: {
                    'Authorization': `group__${token}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch order details');
            }
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                navigate('/AccessDenied');
            } else {
                console.error('Error fetching orders:', error);
            }
        }
    }, [navigate]);

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders]);

    return (
        <div>
            <section>
                <div className="container">
                    {orders.map((order, orderIndex) => (
                        <div className="row" key={orderIndex}>
                            <div className="col-lg-9 col-md-8 col-12">
                                <div className="py-6 p-md-6 p-lg-10">
                                    <h2 className="mb-1">Order {orderIndex + 1}: {order.numOrder}</h2>
                                    <h6
                                        className="mb-6"
                                        style={{
                                            padding: '5px 10px',
                                            borderRadius: '5px',
                                            display: 'inline-block',
                                            backgroundColor: order.status === 'delivered' ? 'green' : 'red',
                                            color: 'white'
                                        }}
                                    >
                                        Status: {order.status}
                                    </h6>
                                    <div className="table-responsive-xxl border-0">
                                        <table className="table mb-0 text-nowrap table-centered">
                                            <thead className="bg-light">
                                                <tr>
                                                    <th>&nbsp;</th>
                                                    <th>Product</th>
                                                    <th>Date</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {order.items.map((item, itemIndex) => (
                                                    <tr key={itemIndex}>
                                                        <td className="align-middle border-top-0 w-0">
                                                            <a href="# ">
                                                                <img src={`http://localhost:4000/${item.image}`} alt="Ecommerce" className="icon-shape icon-xl" />
                                                            </a>
                                                        </td>
                                                        <td className="align-middle border-top-0">
                                                            <a href="# " className="fw-semibold text-inherit">
                                                                <h6 className="mb-0">{item.name}</h6>
                                                            </a>
                                                            <span><small className="text-muted">{item.description}</small></span>
                                                        </td>
                                                        <td className="align-middle border-top-0">{new Date(order.checkoutDate).toLocaleDateString()}</td>
                                                        <td className="align-middle border-top-0">{item.quantity}</td>
                                                        <td className="align-middle border-top-0"> {currencySymbol}{(item.price * item.quantity).toFixed(2)}</td>
                                                    </tr>
                                                ))}
                                                <tr>
                                                    <td colSpan="4" className="text-end fw-bold">Total Amount</td>
                                                    <td className="fw-bold"> {currencySymbol}{(order.items.reduce((total, item) => total + (item.price * item.quantity), 0) * exchangeRate).toFixed(2)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default OrderList;
