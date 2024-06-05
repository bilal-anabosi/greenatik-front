import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const Order = ({ items, discountAmount, exchangeRate }) => {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (lng) => {
  i18n.changeLanguage(lng);
};
  const itemsSubtotal = items.reduce((acc, item) => {
    const itemTotal = (item.regularPrice || 0) * (item.quantity || 0) * exchangeRate;
    return acc + itemTotal;
  }, 0);

  const serviceFee = 2.00 * exchangeRate;
  const subTotal = itemsSubtotal + serviceFee;
  const totalAfterDiscount = subTotal - discountAmount;
  const [currencySymbol, setCurrencySymbol] = useState('$');

  useEffect(() => {
    setCurrencySymbol(exchangeRate === 1 ? '$' : '₪');
  }, [exchangeRate]);

  return (
    <div className="mt-4 mt-lg-0" style={{ maxWidth: '800px' }}>
      <div className="card shadow-sm">
        <h5 className="px-6 py-4 bg-transparent mb-0">{t('order.title')}</h5>
        <ul className="list-group list-group-flush">
          {items.map((item, index) => (
            <li className="list-group-item px-4 py-3" key={index}>
              <div className="row align-items-center">
                <div className="col-2 col-md-2">
                  <img
                    src={`http://localhost:4000/${item.images}`}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-5 col-md-5">
                  <h6 className="mb-0">{item.title || t('order.unnamedItem')}</h6>
                  <span><small className="text-muted">{item.sizes || t('order.noDescription')}</small></span>
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
              <div>{t('order.itemSubtotal')}</div>
              <div className="fw-bold">{currencySymbol} {(itemsSubtotal.toFixed(2))}</div>
            </div>
          </li>
          <li className="list-group-item px-4 py-3">
            <div className="d-flex align-items-center justify-content-between">
              <div>{t('order.serviceFee')}</div>
              <div className="fw-bold">{currencySymbol} {serviceFee}</div>
            </div>
          </li>
          <li className="list-group-item px-4 py-3">
            <div className="d-flex align-items-center justify-content-between">
              <div>{t('order.subTotal')}</div>
              <div className="fw-bold">{currencySymbol} {(subTotal.toFixed(2))}</div>
            </div>
          </li>
          <li className="list-group-item px-4 py-3">
            <div className="d-flex align-items-center justify-content-between fw-bold">
              <div>{t('order.totalAfterDiscount')}</div>
              <div>{currencySymbol} {(totalAfterDiscount.toFixed(2))}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Order;
