import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import PageHeader from '../components/productsDash/PageHeader';
import SearchForm from '../components/productsDash/SearchForm';
import SelectOption from '../components/productsDash/SelectOption';
import ProductTable from '../components/productsDash/ProductTable';
import Pagination from '../components/productsDash/Pagination';
import Sidebar from '../components/dashboard/sidebar';
import axios from 'axios';

const ProductsPage = ({exchangeRate}) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const [authorized, setAuthorized] = useState(true);

 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const authToken = localStorage.getItem('userToken');
        if (authToken) {
          const response = await axios.get(`${process.env.REACT_APP_GREENATIK}/api/products`, {
            headers: {
              Authorization: `group__${authToken}`
            }
          });
          setProducts(response.data.products.map(product => ({ ...product, id: product.id })));
        } else {
          console.error('Authentication token not found');
          setAuthorized(false);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setAuthorized(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  }

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setCurrentPage(1);
  }

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedOption === '' || product.status.toLowerCase() === selectedOption.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (!authorized) {
    return <Navigate to="/accessdenied" />;
  }

  return (
    <div className="container pt-5 mt-5">
      <div className="row mb-8">
        <div className="col-lg-2 col-md-12 col-sm-12">
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-12 col-sm-12">
          <div className='mb-5 ms-lg-10 ps-lg-5 mt-5'>
            <PageHeader />
          </div>
          <div className="row mt-5 ms-lg-8 ps-lg-5">
            <SearchForm handleSearchChange={handleSearchChange} />
            <SelectOption handleSelectChange={handleSelectChange} />
          </div>
          <div className="row mt-5">
            <div className="col-xl-12 col-12 mb-5 ms-lg-10 ps-lg-8 ">
              <ProductTable products={currentProducts} exchangeRate={exchangeRate} />
              <Pagination
                productsPerPage={productsPerPage}
                totalProducts={filteredProducts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
