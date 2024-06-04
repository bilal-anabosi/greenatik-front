import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/dashboard/sidebar';

const DeliveryContributions = () => {
  const [originalContributions, setOriginalContributions] = useState([]); // Store contributions data
  const [contributions, setContributions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState(''); // Filter by delivery status
  const [cityFilter, setCityFilter] = useState(''); // Filter by city
  const [currentPage, setCurrentPage] = useState(1);
  const [contributionsPerPage] = useState(10); // For pagination
  const navigate = useNavigate();
  const defaultImageUrl = 'path/to/default/image.jpg'; // Default image URL

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const token = localStorage.getItem('userToken');
        const response = await axios.get(`${process.env.REACT_APP_GREENATIK}/delivery/contributions`, {
          headers: {
            Authorization: `group__${token}`, 
          },
        });
        if (response.status === 200) {
          setOriginalContributions(response.data); // Store contributions
          setContributions(response.data); // Render them
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching contributions:", error);
        if (error.response && error.response.status === 403) {
          navigate("/AccessDenied");
        }
      }
    };

    fetchContributions();
  }, [navigate]);

  useEffect(() => {
    // Search for name or username
    const filteredContributions = originalContributions.filter(contribution => {
      const searchTermMatch = contribution.userId && contribution.userId.username && contribution.userId.username.toLowerCase().includes(searchTerm.toLowerCase());
      const statusFilterMatch = statusFilter ? contribution.status === statusFilter : true;
      const cityFilterMatch = cityFilter ? contribution.postId.address.city === cityFilter : true;
      return searchTermMatch && statusFilterMatch && cityFilterMatch;
    });
    setContributions(filteredContributions);
    setCurrentPage(1); // When search make it go to page 1
  }, [originalContributions, searchTerm, statusFilter, cityFilter]);

  const indexOfLastContribution = currentPage * contributionsPerPage;
  const indexOfFirstContribution = indexOfLastContribution - contributionsPerPage;
  const currentContributions = contributions.slice(indexOfFirstContribution, indexOfLastContribution);

  // Change pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleCityFilterChange = (e) => {
    setCityFilter(e.target.value);
  };

  const handleContributionClick = (contribution) => {
    navigate(`/dashboard/contribution-details/${contribution._id}`);
  };

  const cityChoices = [
    { label: "All", value: "" },
    { label: "Jerusalem", value: "Jerusalem" },
    { label: "Gaza City", value: "Gaza City" },
    { label: "Hebron", value: "Hebron" },
    { label: "Naqab", value: "Naqab" },
    { label: "Jenin", value: "Jenin" },
    { label: "Nablus", value: "Nablus" },
    { label: "Rafah", value: "Rafah" },
    { label: "Ramallah", value: "Ramallah" },
    { label: "Bethlehem", value: "Bethlehem" },
    { label: "Tulkarm", value: "Tulkarm" },
  ];

  return (
    <>
    <div className="container-fluid mt-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2">
          <Sidebar />
        </div>
        {/* Content */}
        <div className="col-md-9 ms-md-10">
          <div className="row justify-content-between mb-3">
            <div className="col-md-4">
              <input
                className="form-control mb-2"
                type="search"
                placeholder="Search Contributors by Username"
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
                <option value="canceled">Canceled</option>
              </select>
              <select
                className="form-select mt-2"
                value={cityFilter}
                onChange={handleCityFilterChange}
              >
                {cityChoices.map((city, index) => (
                  <option key={index} value={city.value}>{city.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="card h-100 card-lg">
            <div className="card-body p-0">
              <table className="table table-centered table-hover table-borderless mb-0 table-with-checkbox text-nowrap">
                <thead className="bg-light">
                  <tr>
                    <th>Profile Picture</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contribution Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {currentContributions.map((contribution, index) => (
                    <tr key={index}>
                      <td>
                        <img 
                          src={contribution.userId && contribution.userId.image ? contribution.userId.image.secure_url : defaultImageUrl} 
                          alt="User" 
                          width="30" 
                          height="30" 
                          className="rounded-circle"
                        />
                      </td>
                      <td>
                        <Link to={`/dashboard/contribution-details/${contribution._id}`} className="text-inherit">
                          {contribution.userId ? contribution.userId.username : 'N/A'}
                        </Link>
                      </td>
                      <td>{contribution.userId ? contribution.userId.email : 'N/A'}</td>
                      <td>{contribution.quantity}</td>
                      <td>{new Date(contribution.createdAt).toLocaleDateString()}</td>
                      <td>
                        <span className={`badge bg-${contribution.status === 'delivered' ? 'primary' : (contribution.status ===                      'not delivered' ? 'danger' : 'secondary')}`}>
                          {contribution.status}
                        </span>
                      </td>
                      <td>{contribution.postId.address.city || 'N/A'}</td> {/* Display the location */}
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
              {Array.from({ length: Math.ceil(contributions.length / contributionsPerPage) }, (_, i) => (
                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => paginate(i + 1)}>{i + 1}</button>
                </li>
              ))}
              <li className={`page-item ${currentPage === Math.ceil(contributions.length / contributionsPerPage) ? 'disabled' : ''}`}>
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

export default DeliveryContributions;

