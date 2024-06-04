import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/dashboard/sidebar';

const DeliveryOrders = ({exchangeRate}) => {
  const [originalCustomers, setOriginalCustomers] = useState([]); //get the data and store them in array for feltering
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState(''); //to change the deliverd not delivered
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(10); //for pangtion 
  const navigate = useNavigate();
  const [currencySymbol, setCurrencySymbol] = useState('$'); 
  useEffect(() => {
    setCurrencySymbol(exchangeRate === 1 ? '$' : '₪');
  }, [exchangeRate]);
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const token = localStorage.getItem('userToken');
        const response = await axios.get(`http://localhost:4000/checkout/all`, {
          headers: {
            Authorization: `group__${token}`, 
          },
        });
        if (response.status === 200) {
          setOriginalCustomers(response.data); //store customers
          setCustomers(response.data); //render them
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching customers:", error);
        if (error.response && error.response.status === 403) {
          navigate("/AccessDenied");
        }
      }
    };

    fetchCustomers();
  }, [navigate]);

  useEffect(() => {
//search for name or username (تذكر اعمل تشتغل على السيرتش)
    const filteredCustomers = originalCustomers.filter(customer => {
      const searchTermMatch = customer.user && customer.user.name && customer.user.name.toLowerCase().includes(searchTerm.toLowerCase());
      const statusFilterMatch = statusFilter ? customer.status === statusFilter : true;
      return searchTermMatch && statusFilterMatch;
    });
    setCustomers(filteredCustomers);
    setCurrentPage(1); // when search make it go to 1
  }, [originalCustomers, searchTerm, statusFilter]);


  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

//to change pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleCustomerClick = (customer) => {
    navigate(`/dashboard/order-details/${customer.numOrder}`);
  };

  return (
    <>
    <div className="container-fluid mt-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 ">
          <Sidebar />
        </div>
        {/* Content */}
        <div className="col-md-9 ms-md-10">
          <div className="row justify-content-between mb-3">
            <div className="col-md-4">
              <input
                className="form-control mb-2"
                type="search"
                placeholder="Search Customers by Username"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearch}
              />
              <select
                className="form-select"
                value={statusFilter}
                onChange={handleFilterChange}
              >
                <option value="">All Statuses</option>
                <option value="delivered">Delivered</option>
                <option value="not delivered">Not Delivered</option>
              </select>
            </div>
          </div>
          <div className="card h-100 card-lg">
            <div className="card-body p-0">
              <table className="table table-centered table-hover table-borderless mb-0 table-with-checkbox text-nowrap">
                <thead className="bg-light">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Purchase Date</th>
                    <th>Status</th>
                    <th>Spent</th>
                    <th>Items</th>
                  </tr>
                </thead>
                <tbody>
                  {currentCustomers.map((customer, index) => (
                    <tr key={index}>
                      <td>
                        <a href="#" className="text-inherit" onClick={() => handleCustomerClick(customer)}>
                          {customer.user ? customer.user.name : 'N/A'}
                        </a>
                      </td>
                      <td>{customer.user ? customer.user.email : 'N/A'}</td>
                      <td>{new Date(customer.checkoutDate).toLocaleDateString()}</td>
                      <td>
                        <span className={`badge bg-${customer.status === 'delivered' ? 'primary' : 'danger'}`}>
                          {customer.status}
                        </span>
                      </td>
                      <td>{currencySymbol}{(customer.totalAmount* exchangeRate).toFixed(1) }</td>
                      <td>{customer.items.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Pagination */}
          <nav>
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
              </li>
              {Array.from({ length: Math.ceil(customers.length / customersPerPage) }, (_, i) => (
                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => paginate(i + 1)}>{i + 1}</button>
                </li>
              ))}
              <li className={`page-item ${currentPage === Math.ceil(customers.length / customersPerPage) ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
     <div className='mb-5 pb-5'></div>
     <div className='mb-5 pb-5'></div>
     <div className='mb-5 pb-5'></div>
     <div className='mb-5 pb-5'></div>
     <div className='mb-5 pb-5'></div>
     <div className='mb-5 pb-5'></div>
     <div className='mb-5 pb-5'></div>
     </>
  );
};

export default DeliveryOrders;
