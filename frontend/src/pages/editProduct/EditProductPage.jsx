import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [formData, setFormData] = useState({});
  const authToken = localStorage.getItem('userToken');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/products/${productId}`, {
          headers: {
            Authorization: `group__${authToken}`
          }
        });
        setProduct(response.data.product);
        setFormData({
          title: response.data.product.title,
          category: response.data.product.category,
          longDescription: response.data.product.longDescription,
          sizes: response.data.product.sizes,
          images: [], 
          inStock: response.data.product.inStock,
          status: response.data.product.status
        });
      } catch (error) {
        console.error('Error fetching product:', error);
        toast.error('Error fetching product');
      }
    };
    fetchProduct();
  }, [authToken, productId]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'images') {
      const files = [...event.target.files];
      setFormData({ ...formData, images: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSizeChange = (index, event) => {
    const { name, value } = event.target;
    const updatedSizes = [...formData.sizes];
    updatedSizes[index] = { ...updatedSizes[index], [name]: value };
    setFormData({ ...formData, sizes: updatedSizes });
  };

  const addSizeField = () => {
    setFormData({ ...formData, sizes: [...formData.sizes, { size: '', quantity: 0, unit: '', regularPrice: 0.0, salePrice: 0.0 }] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formDataToSend = {
        ...formData,
        sizes: JSON.stringify(formData.sizes)
      };

      const form = new FormData();
      for (const key in formDataToSend) {
        if (key === 'images') {
          if (formData.images.length > 0) {
            formData.images.forEach(file => form.append('images', file));
          }
        } else {
          form.append(key, formDataToSend[key]);
        }
      }

      if (!formData.images || formData.images.length === 0) {
        form.append('keepExistingImages', true);
      }

      await axios.put(`http://localhost:4000/api/products/${productId}`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `group__${authToken}`
        }
      });
      toast.success('Product updated successfully');
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error('Error updating product');
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-12">
          <div className="card mb-6 card-lg">
            <div className="card-body p-6">
              <h4 className="mb-4 h5">Edit Product</h4>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Product Name"
                      required
                      onChange={handleInputChange}
                      name="title"
                      value={formData.title || ''}
                    />
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Product Category</label>
                    <select
                      className="form-select"
                      onChange={handleInputChange}
                      name="category"
                      required
                      value={formData.category || ''}
                    >
                      <option value="none" disabled>Select Category</option>
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
                      onChange={handleInputChange}
                      name="longDescription"
                      required
                      value={formData.longDescription || ''}
                    ></textarea>
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">In Stock</label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="inStock"
                      checked={formData.inStock || false}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select"
                      onChange={handleInputChange}
                      name="status"
                      value={formData.status || ''}
                    >
                      <option value="" disabled>Select Status</option>
                      <option value="Active">Active</option>
                      <option value="Disabled">Disabled</option>
                    </select>
                  </div>
                  <div className="mb-3 col-lg-12">
                    <label className="form-label">Images</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleInputChange}
                      name="images"
                      multiple
                    />
                  </div>
                  <div className="mb-3 col-lg-12">
                    <label className="form-label">Sizes</label>
                    {formData.sizes && formData.sizes.map((size, index) => (
                      <div key={index} className="row mb-3">
                        <div className="col-lg-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Size"
                            name="size"
                            value={size.size}
                            required
                            onChange={(e) => handleSizeChange(index, e)}
                          />
                        </div>
                        <div className="col-lg-2">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Quantity"
                            name="quantity"
                            value={size.quantity}
                            onChange={(e) => handleSizeChange(index, e)}
                          />
                        </div>
                        <div className="col-lg-2">
                          <select
                            className="form-select"
                            name="unit"
                            value={size.unit}
                            required
                            onChange={(e) => handleSizeChange(index, e)}
                          >
                            <option value="none" disabled>Select Unit</option>
                            <option value="clothing">Clothing</option>
                            <option value="kg">kg</option>
                            <option value="g">g</option>
                            <option value="mL">mL</option>
                            <option value="L">L</option>
                            <option value="number">Number</option>
                          </select>
                        </div>
                        <div className="col-lg-2">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Regular Price"
                            name="regularPrice"
                            value={size.regularPrice}
                            required
                            onChange={(e) => handleSizeChange(index, e)}
                          />
                        </div>
                        <div className="col-lg-2">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Sale Price"
                            name="salePrice"
                            value={size.salePrice}
                            
                            onChange={(e) => handleSizeChange(index, e)}
                          />
                        </div>
                      </div>
                    ))}
                    <button type="button" className="btn btn-secondary" onClick={addSizeField}>Add Size</button>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductPage;
