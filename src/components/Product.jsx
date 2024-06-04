import React, { useState, useEffect } from "react";

const Product = ({
  imgSrc,
  title,
  price,
  newPrice,
  productId,
  onDelete,
  size,
  addToCart,
  updateCartItemQuantity,
  quantity: defaultQuantity,
  exchangeRate, // Receive the exchangeRate prop
}) => {
  const [quantity, setQuantity] = useState(defaultQuantity);
  const [currencySymbol, setCurrencySymbol] = useState('$'); 

  // Function to handle quantity change
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    updateCartItemQuantity(productId, size, newQuantity);
  };

  const totalPrice = newPrice ? newPrice * quantity * exchangeRate : price * quantity * exchangeRate;

  const handleAddToCart = () => {
    addToCart(productId, quantity, size);
  };

  const handleRemoveClick = () => {
    onDelete(productId, size);
  };

  useEffect(() => {
    setCurrencySymbol(exchangeRate === 1 ? '$' : '₪');
  }, [exchangeRate]);

  return (
    <li className="list-group-item py-3 py-lg-0 px-0 border-top">
      <div className="row align-items-center mt-4 mb-4">
        <div className="col-3 col-md-2">
          <img
            src={
              imgSrc
                ? `http://localhost:4000/${imgSrc}`
                : "fallback_image_url.jpg"
            }
            alt="Ecommerce"
            className="img-fluid"
          />
        </div>
        <div className="col-4 col-md-5">
          <a href="#!" className="text-inherit">
            <h6 className="mb-0">{title}</h6>
          </a>
          <small>Size: {size}</small>
          <div className="mt-2 small lh-1">
            <a
              href="#!"
              className="text-decoration-none text-inherit"
              onClick={handleRemoveClick}
            >
              <span className="me-1 align-text-bottom">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-trash-2 text-success"
                >
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1={10} y1={11} x2={10} y2={17} />
                  <line x1={14} y1={11} x2={14} y2={17} />
                </svg>
              </span>
              <span className="text-muted">Remove</span>
            </a>
          </div>
        </div>
        <div className="col-3 col-md-3 col-lg-2 d-flex">
          <div className="input-group input-spinner row flex-nowrap px-2">
            <input
              type="button"
              value="-"
              className="button-minus btn btn-sm col"
              data-field="quantity"
              onClick={() => handleQuantityChange(Math.max(quantity - 1, 1))}
              style={{
                borderColor: "#ecf0ef",
                borderTopLeftRadius: "0.25rem",
                borderBottomLeftRadius: "0.25",
              }}
            />

            <input
              type="number"
              step={1}
              max={10}
              value={quantity}
              name="quantity"
              className="form-control col"
              style={{
                display: "block",
                textAlign: "center",
                textWrap: "wrap",
                padding: "0",
                minWidth: "50%",
                justifyItems: "center",
                fontSize: "12px",
                borderColor: "#ecf0ef",
              }}
              readOnly
            />
            <input
              type="button"
              value="+"
              className="button-plus btn btn-sm col"
              data-field="quantity"
              onClick={() => handleQuantityChange(quantity + 1)}
              style={{ borderRadius: "0.25rem,", borderColor: "#ecf0ef" }}
            />
          </div>
        </div>
        <div className="col-2 text-lg-end text-start text-md-end col-md-2">
          <span className="fw-bold">
            {currencySymbol} {totalPrice.toFixed(1)}
          </span>
          {newPrice && (
            <div className="text-decoration-line-through text-muted small">
              {currencySymbol} {(price * exchangeRate).toFixed(1)}
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default Product;
