import React, { useState, useEffect } from "react";

const Order = ({ items, discountAmount, exchangeRate }) => {
  const itemsSubtotal = items.reduce((acc, item) => {
    const itemTotal = (item.regularPrice || 0) * (item.quantity || 0) * exchangeRate;
    return acc + itemTotal;
  }, 0);

  const serviceFee=2.00 *exchangeRate; 

  const subTotal = itemsSubtotal + serviceFee;
  const totalAfterDiscount = subTotal - discountAmount;
  const [currencySymbol, setCurrencySymbol] = useState('$'); 

  // Update currency symbol when exchange rate changes
  useEffect(() => {
    setCurrencySymbol(exchangeRate === 1 ? '$' : '₪');
  }, [exchangeRate]);

  return (
    <div className="mt-4 mt-lg-0" style={{ maxWidth: '800px' }}>
      <div className="card shadow-sm">
        <h5 className="px-6 py-4 bg-transparent mb-0">Order Details</h5>
        <ul className="list-group list-group-flush">
          {items.map((item, index) => (
            <li className="list-group-item px-4 py-3" key={index}>
              <div className="row align-items-center">
                <div className="col-2 col-md-2">
                  <img 
                    src={`${process.env.REACT_APP_GREENATIK}/${item.images}`}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-5 col-md-5">
                  <h6 className="mb-0">{item.title || 'Unnamed Item'}</h6>
                  <span><small className="text-muted">{item.sizes || 'No description'}</small></span>
                </div>
                <div className="col-2 col-md-2 text-center text-muted">
                  <span>{item.quantity || 0}</span>
                </div>
                <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                  <span className="fw-bold">{currencySymbol} {((item.regularPrice * exchangeRate).toFixed(1))}</span>
                </div>
              </div>
            </li>
          ))}
          <li className="list-group-item px-4 py-3">
            <div className="d-flex align-items-center justify-content-between">
              <div>Item Subtotal</div>
              <div className="fw-bold">{currencySymbol} {(itemsSubtotal.toFixed(2))}</div>
            </div>
          </li>
          <li className="list-group-item px-4 py-3">
            <div className="d-flex align-items-center justify-content-between">
              <div>Service Fee</div>
              <div className="fw-bold">{currencySymbol} {serviceFee}</div>
            </div>
          </li>
          <li className="list-group-item px-4 py-3">
            <div className="d-flex align-items-center justify-content-between">
              <div>SubTotal</div>
              <div className="fw-bold">{currencySymbol} {(subTotal.toFixed(2))}</div>
            </div>
          </li>
          <li className="list-group-item px-4 py-3">
            <div className="d-flex align-items-center justify-content-between fw-bold">
              <div>Total after Discount</div>
              <div>{currencySymbol} {(totalAfterDiscount.toFixed(2))}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Order;
