import React, { useState } from 'react';
import ProductInformation from '../components/addProcduct/ProductInformation';
import ProductStatus from '../components/addProcduct/ProductStatus';
import Header from '../components/addProcduct/Header';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateProductForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    longDescription: '',
    sizes: [],
    images: [],
    inStock: false,
    status: 'Active'
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    for (const key in formData) {
      if (key === 'images') {
        formData.images.forEach((image) => {
          data.append('images', image);
        });
      } else if (key === 'sizes') {
        data.append(key, JSON.stringify(formData[key]));
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      const token = localStorage.getItem('userToken');
      const response = await axios.post(`${process.env.REACT_APP_GREENATIK}/api/products`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `group__${token}`
        }
      });

      if (response.status === 201) {
        toast.success('Product created successfully');
      } else  {
        toast.error('Error creating product: ' + response.data.message);
      }
    } catch (error) {
      toast.error('Error creating product: Please fill all data ');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-lg-9 col-12">
          <ProductInformation onChange={handleInputChange} />
        </div>
        <div className="col-lg-3 col-12">
          <ProductStatus onChange={handleInputChange} />
        </div>
        <form onSubmit={handleFormSubmit}>
          <button type="submit" className="btn btn-primary">Create Product</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductForm;
