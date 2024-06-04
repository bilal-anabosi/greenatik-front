import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ContributionDetailsPage = () => {
  const { id } = useParams(); // Get the contribution ID from the URL
  const [contribution, setContribution] = useState(null);
  const [newStatus, setNewStatus] = useState('');
  const [notification, setNotification] = useState('');

  const fetchContributionDetails = async () => {
    try {
      const token = localStorage.getItem('userToken');
      const response = await axios.get(`${process.env.REACT_APP_GREENATIK}/delivery/post/${id}`, {
        headers: {
          Authorization: `group__${token}`, 
        },
      });
      if (response.status === 200) {
        setContribution(response.data.post); // Set contribution details
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching contribution details:", error);
    }
  };

  useEffect(() => {
    fetchContributionDetails();
  }, [id]);

  const calculatePercentage = () => {
    if (contribution) {
      return (contribution.postId.provided / contribution.postId.quantity) * 100;
    }
    return 0;
  };

  const handleStatusChange = async () => {
    try {
      const token = localStorage.getItem('userToken');
      const response = await axios.put(
        `${process.env.REACT_APP_GREENATIK}/delivery/status/${id}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `group__${token}`,
          },
        }
      );
      if (response.status === 200) {
        setNotification(`Contribution status changed successfully to ${newStatus}.`);
        // Fetch contribution details again to update the UI
        fetchContributionDetails();
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error changing contribution status:", error);
      setNotification('Failed to change contribution status.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          {contribution && (
            <div className="card mb-3">
              <div className="card-header bg-primary text-white">Owner Info</div>
              <div className="card-body">
                <img src={contribution.postId.owner.image?.secure_url} alt="Owner" className="img-fluid rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
                <p className="card-text"><strong>Username:</strong> {contribution.postId.owner.username}</p>
                <p className="card-text"><strong>Email:</strong> {contribution.postId.owner.email}</p>
                <p className="card-text"><strong>Role:</strong> {contribution.postId.owner.role}</p>
                <p className="card-text"><strong>Address:</strong> {contribution.postId.owner.address}</p>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-4">
          {contribution && (
            <div className="card mb-3">
              <div className="card-header bg-primary text-white">Post Info</div>
              <div className="card-body">
                <p className="card-text"><strong>Title:</strong> {contribution.postId.title}</p>
                <p className="card-text"><strong>Requesting:</strong> {contribution.postId.requesting}</p>
                <p className="card-text"><strong>Quantity:</strong> {contribution.postId.quantity}</p>
                <p className="card-text"><strong>Condition:</strong> {contribution.postId.condition}</p>
                <p className="card-text"><strong>Post Status:</strong> {contribution.postId.postStatus}</p>
                <p className="card-text"><strong>Pick Up Details:</strong> {contribution.postId.pickUpDetails}</p>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: `${calculatePercentage()}%` }} aria-valuenow={calculatePercentage()} aria-valuemin="0" aria-valuemax="100">{calculatePercentage()}%</div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-4">
          {contribution && (
            <div className="card mb-3">
              <div className="card-header bg-primary text-white">User & Contribution Info</div>
              <div className="card-body">
                <img src={contribution.userId.image?.secure_url} alt="User" className="img-fluid rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
                <p className="card-text"><strong>Username:</strong> {contribution.userId.username}</p>
                <p className="card-text"><strong>Email:</strong> {contribution.userId.email}</p>
                <p className="card-text"><strong>Role:</strong> {contribution.userId.role}</p>
                <p className="card-text"><strong>Address:</strong> {contribution.userId.address}</p>
                <p className="card-text"><strong>Material:</strong> {contribution.material}</p>
                <p className="card-text"><strong>Contribution Quantity:</strong> {contribution.quantity} kg</p>
                <p className="card-text"><strong>Contribution Condition:</strong> {contribution.condition}</p>
                <p className="card-text"><strong>Contribution Notes:</strong> {contribution.notes}</p>
                <p className="card-text"><strong>Contribution Status:</strong> 
                  <span className={`badge bg-${contribution.status === 'delivered' ? 'success' : (contribution.status === 'not delivered' ? 'warning' : 'danger')}`}>
                    {contribution.status}
                  </span>
                </p>
                <p className="card-text"><strong>Contribution Points:</strong> {contribution.points} p</p>
                {contribution.status !== 'delivered' && (
  <div>
    {/* Status Change Dropdown */}
    <div className="input-group mb-3">
      <select
        className="form-select"
        value={newStatus}
        onChange={(e) => setNewStatus(e.target.value)}
      >
        <option value="">Select New Status</option>
        <option value="delivered">Delivered</option>
        <option value="canceled">Canceled</option>
      </select>
      <button
        className="btn btn-primary"
        type="button"
        onClick={handleStatusChange}
      >
        Change Status
      </button>
    </div>

    {/* Notification */}
    {notification && (
      <div className={`alert ${notification.includes('successfully') ? 'alert-success' : 'alert-danger'} mt-3`} role="alert">
        {notification}
      </div>
    )}
  </div>
)}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  };
                  
                  export default ContributionDetailsPage;
                  
                 
