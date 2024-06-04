import React, { useState } from 'react';

const ProductInformation = ({ onChange }) => {
  const [sizes, setSizes] = useState([
    { size: '', quantity: '', unit: '', regularPrice: '', salePrice: '' }
  ]);
  const [images, setImages] = useState([]);

  const handleSizeChange = (index, event) => {
    const { name, value } = event.target;
    const newSizes = [...sizes];
    newSizes[index][name] = value;
    setSizes(newSizes);
    onChange({ target: { name: 'sizes', value: newSizes } });
  };

  const addSize = () => {
    if (sizes.length < 3) {
      setSizes([...sizes, { size: '', quantity: '', unit: '', regularPrice: '', salePrice: '' }]);
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    onChange({ target: { name: 'images', value: files } });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card mb-6 card-lg">
            <div className="card-body p-6">
              <h4 className="mb-4 h5">Product Information</h4>
              <div className="row">
                <div className="mb-3 col-lg-6">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product Name"
                    required
                    onChange={onChange}
                    name="title"
                  />
                </div>
                <div className="mb-3 col-lg-6">
                  <label className="form-label">Product Category</label>
                  <select
                    className="form-select"
                    onChange={onChange}
                    name="category"
                    required
                  >
                    <option value="" disabled selected>Select Category</option>
                    <option value="FoodWare">FoodWare</option>
                    <option value="Gardening">Gardening</option>
                    <option value="Pets">Pets</option>
                    <option value="Shopping bags">Shopping bags</option>
                    <option value="Office">Office</option>
                    <option value="Skin care">Skin care</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Home">Home</option>
                  </select>
                </div>
                <div className="mb-3 col-lg-12">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    placeholder="Add your description here"
                    rows="3"
                    onChange={onChange}
                    name="longDescription"
                    required
                  ></textarea>
                </div>
                <div className="mb-3 col-lg-12">
                  <h4 className="mb-3 h5">Sizes, Quantity, and Pricing</h4>
                  {sizes.map((size, index) => (
                    <div key={index} className="row">
                      <div className="mb-3 col-lg-2">
                        <label className="form-label">Size</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Size"
                          required
                          name="size"
                          value={size.size}
                          onChange={(e) => handleSizeChange(index, e)}
                        />
                      </div>
                      <div className="mb-3 col-lg-2">
                        <label className="form-label">Unit</label>
                        <select
                          className="form-select"
                          name="unit"
                          value={size.unit}
                          onChange={(e) => handleSizeChange(index, e)}
                          required
                        >
                          <option value="" disabled selected>Select Unit</option>
                          <option value="clothing">Clothing</option>
                          <option value="kg">Kg</option>
                          <option value="g">g</option>
                          <option value="mL">mL</option>
                          <option value="L">L</option>
                          <option value="number">Number</option>
                        </select>
                      </div>
                      <div className="mb-3 col-lg-2">
                        <label className="form-label">Quantity</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Quantity"
                          required
                          name="quantity"
                          value={size.quantity}
                          onChange={(e) => handleSizeChange(index, e)}
                        />
                      </div>
                      <div className="mb-3 col-lg-3">
                        <label className="form-label">Regular Price</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="$0.00"
                          required
                          name="regularPrice"
                          value={size.regularPrice}
                          onChange={(e) => handleSizeChange(index, e)}
                        />
                      </div>
                      <div className="mb-3 col-lg-3">
                        <label className="form-label">Sale Price</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="$0.00"
                          required
                          name="salePrice"
                          value={size.salePrice}
                          onChange={(e) => handleSizeChange(index, e)}
                        />
                      </div>
                    </div>
                  ))}
                  {sizes.length < 3 && (
                    <button className="btn btn-secondary" onClick={addSize}>
                      Add Size
                    </button>
                  )}
                </div>
                <div className="mb-3 col-lg-12">
                  <label className="form-label">Upload Images</label>
                  <input
                    type="file"
                    className="form-control"
                    multiple
                    onChange={handleImageChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
