import React from 'react';

const ProductStatus = ({ onChange, inStock }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card mb-6 card-lg">
            <div className="card-body p-6">
              <div className="form-check form-switch mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchStock"
                  checked={inStock}
                  onChange={(e) => onChange({ target: { name: 'inStock', value: e.target.checked } })}
                  name="inStock"
                />
                <label className="form-check-label" htmlFor="flexSwitchStock">In Stock</label>
              </div>
              <div className="mb-3">
                <label className="form-label" id="productSKU">Status</label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    id="inlineRadio1"
                    value="Active"
                    onChange={onChange}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">Active</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    id="inlineRadio2"
                    value="Disabled"
                    onChange={onChange}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">Disabled</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStatus;