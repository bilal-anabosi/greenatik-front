import React from "react";
import Product from "./Product";
const products = [
  {
    imgSrc: "./pics/cartPage/cat.png",
    title: "heey",
    price: 4,
    newPrice: 2,
  },
  {
    imgSrc: "./pics/cartPage/cat.png",
    title: "wewewewe",
    price: 40,
    // newPrice: 21,
  },
  {
    imgSrc: "./pics/cartPage/cat.png",
    title: "wewewewe",
    price: 21,
    newPrice: 6,
  },
  {
    imgSrc: "./pics/cartPage/cat.png",
    title: "wewewewe",
    price: 23,
    newPrice: 11,
  },
];
const SideBarCart = () => {
  const handleClose = () => {
    const offcanvas = document.getElementById("offcanvasRight");
    offcanvas.classList.remove("show");
  };
  return (
    <div
      className="offcanvas offcanvas-end"
      style={{ width: "555px" }}
      tabIndex={-1}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
      aria-modal="true"
      role="dialog"
    >
      <div className="offcanvas-header border-bottom">
        <div className="text-start">
          <h5 id="offcanvasRightLabel" className="mb-0 fs-4">
            Shop Cart
          </h5>
        </div>

        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={handleClose}
        />
      </div>
      <div className="offcanvas-body">
        
          <h6>Your items:</h6>
        
        <ul className="list-group list-group-flush">
          {products.map((product, index) => (
            <Product
              key={index}
              imgSrc={product.imgSrc}
              title={product.title}
              price={product.price}
              newPrice={product.newPrice}
            />
          ))}
        </ul>
        <div className="d-flex justify-content-between mt-4">
          <a href="#!" className="btn btn-primary">
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBarCart;
