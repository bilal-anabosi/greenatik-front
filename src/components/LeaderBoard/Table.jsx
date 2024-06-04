import React, { useState, useEffect } from 'react';

const Table = ({ data }) => {
  const [userPosition, setUserPosition] = useState(null);
  const [filteredData, setFilteredData] = useState(data);
  const [filter, setFilter] = useState('all-time');

  useEffect(() => {
    const fetchUserPosition = async () => {
      try {
        const userToken = localStorage.getItem('userToken');
        if (!userToken) {
          console.error('User token not found.');
          return;
        }

        const response = await fetch(`${process.env.REACT_APP_GREENATIK}/leaderboard/position`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `group__${userToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserPosition(data);
        } else {
          console.error('Failed to fetch user position:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user position:', error);
      }
    };

    fetchUserPosition();
  }, []);

  useEffect(() => {
    const fetchFilteredData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_GREENATIK}/leaderboard/points/filter?filter=${filter}`);
        if (response.ok) {
          const data = await response.json();
          setFilteredData(data);
        } else {
          console.error('Failed to fetch filtered data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching filtered data:', error);
      }
    };

    if (filter !== 'all-time') {
      fetchFilteredData();
    } else {
      setFilteredData(data);
    }
  }, [filter, data]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-6">
          <div className="card h-100 card-lg">
            <div className="p-6">
              <h3 className="mb-0 fs-5">Global Ranking</h3>
              <select onChange={handleFilterChange} value={filter} className="form-select">
                <option value="all-time">All Time</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-centered table-borderless text-nowrap table-hover">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col">Rank</th>
                      <th scope="col">Profile</th>
                      <th scope="col">User Name</th>
                      <th scope="col">City</th>
                      <th scope="col">Tasks</th>
                      <th scope="col">Total Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((item, index) => (
                      <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            src={item.image?.secure_url || './favicon.ico'}
                            alt={`${item.username}'s profile`}
                            className="rounded-circle"
                            width="50"
                            height="50"
                          />
                        </td>
                        <td>{item.username}</td>
                        <td>{item.address || 'N/A'}</td>
                        <td>{item.points.tasks}</td>
                        <td>{item.points.total}</td>
                      </tr>
                    ))}
                    {userPosition && (
                      <tr>
                        <td><h5 className='text-success'>{userPosition.position}</h5></td>
                        <td>
                          <img
                            src={userPosition.image?.secure_url || './favicon.ico'}
                            alt={`${userPosition.username}'s profile`}
                            className="rounded-circle"
                            width="50"
                            height="50"
                          />
                          this is your placement
                        </td>
                        <td><h5 className='text-success'>{userPosition.user.username}</h5></td>
                        <td><h5 className='text-success'>{userPosition.user.address || 'N/A'}</h5></td>
                        <td><h5 className='text-success'>{userPosition.user.points.tasks}</h5></td>
                        <td><h5 className='text-success'>{userPosition.user.points.total}</h5></td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            color="#333333CC"
            fill="currentColor"
            className="bi bi-exclamation-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
          </svg>
          <span className="t-text">You might not see the real-time changes</span>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Table;
