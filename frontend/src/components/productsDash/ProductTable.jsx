import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProductTable = ({ products, exchangeRate }) => {
  const [currencySymbol, setCurrencySymbol] = useState('$');

  useEffect(() => {
    setCurrencySymbol(exchangeRate === 1 ? '$' : '₪');
  }, [exchangeRate]);

  const handleEditClick = (productId) => {
    window.location.href = `EditProductPage/${productId}`;
  };
  return (
    <div className="table-responsive">
      <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
        <thead className="bg-light">
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Price</th>
            <th>Create at</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <img
                  src={product.images[0] ? `http://localhost:4000/${product.images[0]}` : 'path/to/default-image.jpg'}
                  alt=""
                  className="icon-shape icon-md"
                />
              </td>
              <td><a href="#!" className="text-reset">{product.title}</a></td>
              <td>{product.category}</td>
              <td>
                <span className={`badge bg-light-${product.status === 'Active' ? 'primary' : product.status === 'Disabled' ? 'danger' : 'warning'} text-dark-${product.status === 'Active' ? 'primary' : product.status === 'Disabled' ? 'danger' : 'warning'}`}>{product.status}</span>
              </td>
              <td>{(product.sizes[0].regularPrice * exchangeRate).toFixed(2)}{currencySymbol}</td>
              <td>{new Date(product.createdAt).toLocaleDateString()}</td>
              <td>
                <button className="btn btn-link text-reset" onClick={() => handleEditClick(product._id)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
  exchangeRate: PropTypes.number.isRequired,
};

export default ProductTable;
